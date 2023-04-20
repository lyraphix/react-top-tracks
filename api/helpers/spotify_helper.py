"""
Testing multiple playlist making class
Author: Ellie Paek
Source (cloned and edited): https://github.com/musikalkemist/spotifyplaylistgenerator
To do: separate by genre (with possibly more songs), if bitch lasagna is in the song list, remove it (easter egg)
Updated: 2023/02/22 — HAHA COMBINING THINGS ACTUALLY WORKED
"""

import logging
import json
import requests
import random

from api.schemas.track import Track
from api.schemas.playlist import Playlist

from api.helpers.mongodb_helper import MongodbHelper

class PlaylistMaker:

    def __init__(self, listofauths):
        """
        :param authorization_token (str): Spotify API token
        """
        self.authorizationToken = listofauths[0]
        self.tokenslist = listofauths
        self.playlistid = ""
        self.mdb = MongodbHelper()

    def get_playlist_image(self, playlist):
        url = f"https://api.spotify.com/v1/playlists/{playlist.id}/images"
        response = self._place_get_api_request(url, self.authorizationToken)
        response_json = response.json()
        return response_json[0]["url"]


    def get_recent_tracks(self, limit, token):
        """
        Get the recent tracks played by a user
        :param limit (int): Number of tracks to get. Should be <= 50
        :return tracks (list of Track): List of last played tracks
        """
        url = f"https://api.spotify.com/v1/me/player/recently-played?limit={limit}"
        response = self._place_get_api_request(url, token)
        response_json = response.json()
        tracks = [
            Track(track["track"]["name"], track["track"]["id"], track["track"]["artists"][0]["name"], track["track"]["album"]["images"][0]["url"] if track["track"]["album"]["images"] else None)
            for track in response_json["items"]
        ]
        return tracks


    # function for getting multiple users and merging into a playlist
    def multiple_get_tracks(self, limit):
        tracks = list()
        for user in self.tokenslist:
            token = "".join(user)
            tracks.extend(self.get_top_tracks(limit, token))
            tracks.extend(self.get_recent_tracks(limit, token))

        tracks = set(tracks)
        return tracks

    def get_top_tracks(self, limit, token):
        url = f"https://api.spotify.com/v1/me/top/tracks?limit={limit}"
        response = self._place_get_api_request(url, token)
        response_json = response.json()
        tracks = [
            Track(track["name"], track["id"], track["artists"][0]["name"], track["album"]["images"][0]["url"] if track["album"]["images"] else None)
            for track in response_json["items"]
        ]
        return tracks

    
    def get_artists(self, limit, token):
        url = f"https://api.spotify.com/v1/me/top/artists?limit={limit}"
        response = self._place_get_api_request(url, token)
        response_json = response.json()
        artists = [artist["name"] for artist in response_json["items"]]
        return artists


    def get_tracks_genre_filter(self, limit, requested_genres):
        """Get the top and recent n tracks played by a user
        :param limit (int): Number of tracks to get. Should be <= 50
        :param requested_genres (list): list of requested genres user wants
        :return tracks (list of Track): List of last played tracks
        """
        # get top tracks first
        url = f"https://api.spotify.com/v1/me/top/tracks?limit={limit}"
        response = self._place_get_api_request(url)
        response_json = response.json()
        tracks = list()
        # separate by genre
        for track in response_json["items"]:
            artist_id = track["artists"][0]["id"]
            if self.match_artist_genre(artist_id, requested_genres):
                tracks.append(Track(track["name"], track["id"], track["artists"][0]["name"], track["album"]["images"][0]["url"]))
 
        # reset the url to get recently played tracks
        url = f"https://api.spotify.com/v1/me/player/recently-played?limit={limit}"
        response = self._place_get_api_request(url)
        response_json = response.json()
        for track in response_json["items"]:
            artist_id = track["track"]["artists"][0]["id"]
            if self.match_artist_genre(artist_id, requested_genres):
                tracks.append(Track(track["track"]["name"], track["track"]["id"], track["track"]["artists"][0]["name"], track["track"]["album"]["images"][0]["url"]))

        # reset url again to get specific genre tracks of 2022 (Carrie's design)
        for genre in requested_genres:
            url = f"https://api.spotify.com/v1/search?type=track&q=year:2022%20genre:{genre}&limit=5"
            response = self._place_get_api_request(url)
            response_json = response.json()
            for track in response_json['tracks']['items']:
                tracks.append(Track(track["name"], track["id"], track["artists"][0]["name"], track["album"]["images"][0]["url"]))
                                                                                                        
        # remove duplicates
        tracks = set(tracks)
        return tracks

    def get_user_id(self):
        """Get the user ID of user to access their Spotify and create a playlist
        :return userid: unique string for finding user's Spotify"""
        url = f"https://api.spotify.com/v1/me"
        response = self._place_get_api_request(url, self.authorizationToken)
        response_json = response.json()
        userid = response_json["id"]
        return userid

    # genre filter function
    # since apparently getting the track genre is broken
    def match_artist_genre(self, artist, requested_genres):
        """Gets artists' genres and sees if it matches with the requested genres
        :param artist: artist id
        :param requested_genres: list of requested genres
        :return: True if artists' genres is in the requested, False if otherwise
        """
        # testing purposes
        # track_id = "1fdlTXD7obDyqOpx96BEL9" — Maison
        # 5NK2NHvmKLOn8V3eBYDaKm July 7th
        url = f"https://api.spotify.com/v1/artists/{artist}"
        response = self._place_get_api_request(url)
        response_json = response.json()
        artist_genres = response_json["genres"]
        for artist_genre in artist_genres:
            if artist_genre in requested_genres:
                return True
        return False

    # functions for creating a playlist
    def create_playlist(self, name, description=""):
        """
        :param name (str): New playlist name
        :return playlist (Playlist): Newly created playlist
        """
        userid = self.get_user_id()
        data = json.dumps({
            "name": name,
            "description": f"Your freshly created Musaic, based off the phrase '{description}'",
            "collaborative": True,
            "public": False
        })
        url = f"https://api.spotify.com/v1/users/{userid}/playlists"
        response = self._place_post_api_request(url, data, self.authorizationToken)
        response_json = response.json()
        # get playlist ID for getting links
        playlist_id = response_json["id"]
        self.playlistid = playlist_id

        playlist = Playlist(name, playlist_id)
        return playlist
    
    def populate_playlist(self, playlist, track_dict):
        """Add tracks to a playlist.
        :param playlist (Playlist): Playlist to which to add tracks
        :param tracks (list of Track): Tracks to be added to playlist
        :return response: API response
        """
        # Store tracks
        Playlist.set_tracks(playlist, track_dict)

        # Create the playlist on Spotify's end
        track_uris = [track.create_spotify_uri() for track in track_dict]
        data = json.dumps(track_uris)
        url = f"https://api.spotify.com/v1/playlists/{playlist.id}/tracks"
        response = self._place_post_api_request(url, data, self.authorizationToken)
        response_json = response.json()


        return response_json
    
    def delete_playlist(self, playlist_id):
        url = f"https://api.spotify.com/v1/playlists/{playlist_id}/followers"
        response = self._place_delete_api_request(url, self.authorizationToken)
        return response
    

    
    def get_playlist_link(self, playlist):
        """Gets playlist link.
        :param playlist (Playlist): Playlist to which to get URL of
        :return: link of playlist (string)
        """
        url = f"https://api.spotify.com/v1/playlists/{self.playlistid}"

        response = self._place_get_api_request(url, self.authorizationToken)
        response_json = response.json()
        link = response_json['external_urls']['spotify']
        Playlist.set_url(playlist, link)
        return link

    def search(self, query, search_type):
        url = f"https://api.spotify.com/v1/search?q={query}&type={search_type}"
        response = self._place_get_api_request(url, self.authorizationToken)
        response_json = response.json()
        return response_json

    def artist_related_artists(self, artist_id):
        url = f"https://api.spotify.com/v1/artists/{artist_id}/related-artists"
        response = self._place_get_api_request(url, self.authorizationToken)
        response_json = response.json()
        return response_json['artists']

    def artist_top_tracks(self, artist_id, limit=10, country='US'):
        url = f"https://api.spotify.com/v1/artists/{artist_id}/top-tracks?country={country}&limit={limit}"
        response = self._place_get_api_request(url, self.authorizationToken)
        response_json = response.json()
        return response_json['tracks']

    
    def get_tracks_from_artists(self, artist_list, limit=5):
        related_tracks = []
        for artist_name in artist_list:
            if artist_name:
                results = self.search(query=f"artist:{artist_name}", search_type="artist")
                if results['artists']['items']:
                    artist_id = results['artists']['items'][0]['id']
                    related_artists = self.artist_related_artists(artist_id)
                    related_artist_ids = [artist['id'] for artist in related_artists[:limit]]
                    for related_artist_id in related_artist_ids:
                        related_artist_tracks = self.artist_top_tracks(related_artist_id, country='US')
                        for track in related_artist_tracks[:limit]:
                            name = track['name']
                            id = track['id']
                            artist = track['artists'][0]['name']
                            image_url = track['album']['images'][0]['url'] if track['album']['images'] else None
                            related_tracks.append(Track(name, id, artist, image_url))

        return related_tracks


    def artist_albums(self, artist_id, limit=10):
        url = f"https://api.spotify.com/v1/artists/{artist_id}/albums?limit={limit}"
        response = self._place_get_api_request(url, self.authorizationToken)
        response_json = response.json()
        return response_json['items']

    def album_tracks(self, album_id):
        url = f"https://api.spotify.com/v1/albums/{album_id}/tracks"
        response = self._place_get_api_request(url, self.authorizationToken)
        response_json = response.json()
        return response_json

    # API requests for Spotify

    def _place_get_api_request(self, url, auth):
        response = requests.get(
            url,
            headers={
                "Content-Type": "application/json",
                "Authorization": f"Bearer {auth}"
            }
        )
        return response


    def _place_post_api_request(self, url, data, auth):
        response = requests.post(
            url,
            data=data,
            headers={
                "Content-Type": "application/json",
                "Authorization": f"Bearer {auth}"
            }
        )
        return response
    
    def _place_delete_api_request(self, url, auth):
        """
        :param url (str): The URL for the DELETE request
        :param auth (str): The authentication token
        :return response (requests.Response): The response from the DELETE request
        """
        response = requests.delete(
        url,
        headers={
        "Content-Type": "application/json",
        "Authorization": f"Bearer {auth}"
        }
        )
        return response

