import os
from pymongo import MongoClient

from api.schemas.track import Track
from api.schemas.playlist import Playlist
from api.schemas.user import User


class MongodbHelper:
    def __init__(self):
        password = os.environ.get("MONGODB_PWD")
        username = os.environ.get("MONGODB_USERNAME")

        connection_string = f"mongodb+srv://{username}:{password}@spotifymatched.2u1gxhe.mongodb.net/?retryWrites=true&w=majority"
        client = MongoClient(connection_string)

        self.db = client['musaic']  # Use the database named 'musaic'
        self.users_collection = self.db['users']  # Use the collection named 'users'
        self.artists_db = self.db['artists']
        # lobby db
        self.lobbies_db = client['lobbies']

    def get_collection_name(self, artist_name):
        artist_name = ''.join(filter(lambda x: x.isalpha() or x.isdigit() or x.isspace(), artist_name))
        first_letter = artist_name[0].upper()
        return f"{first_letter}"

    def is_artist_in_database(self, artist_name):
        collection_name = self.get_collection_name(artist_name)
        artist = self.artists_db[collection_name].find_one({"name": artist_name})
        return artist is not None

    def store_artist_tracks_in_database(self, artist_name, top_tracks, related_tracks):
        collection_name = self.get_collection_name(artist_name)
        artist_data = {
            "name": artist_name,
            "top_tracks": [track.to_dict() for track in top_tracks],
            "related_tracks": [track.to_dict() for track in related_tracks],
        }
        self.artists_db[collection_name].insert_one(artist_data)

    def add_user_to_db(self, user: User):
        user_data = user.to_dict()
        self.users_collection.insert_one(user_data)

    def add_track_to_db(self, track: Track):
        tracks_collection = self.db["tracks"]
        track_data = track.to_dict()
        tracks_collection.insert_one(track_data)

    def add_playlist_to_db(self, playlist: Playlist):
        playlists_collection = self.db["playlists"]
        playlist_data = playlist.to_dict()
        playlists_collection.insert_one(playlist_data)

    def format_user_data(self, user_id, username, tracks, image_url, top_artists, playlists=[], friends={}, friend_requests=None):
        return {
            "user_id": user_id,
            "username": username,
            "tracks": tracks,
            "playlists": playlists,
            "image_url": image_url,
            "top_artists": top_artists,
            "friends": friends,
            "friend_requests": friend_requests
        }

    def user_exists(self, user_id):
        return self.users_collection.find_one({"user_id": user_id}) is not None

    def get_user(self, user_id):
        return self.users_collection.find_one({"user_id": user_id})

    def create_user(self, user_data):
        # Create a user in the 'users' collection
        print("User created")
        self.users_collection.insert_one(user_data)

    def update_user(self, user_id, updates):
        # Update a user's information
        self.users_collection.update_one({"user_id": user_id}, updates)

    def remove_playlist_from_user(self, user_id, playlist_id):
        result = self.users_collection.update_one(
            {"user_id": user_id},
            {"$pull": {"playlists": {"id": playlist_id}}}
        )
        return result.modified_count

    # functions for lobby
    def is_user_in_lobby(self, lobby_link, userid):
        """
        check if user is in lobby
        :param lobby_link: reference for lobby link to access db
        :param userid: reference for unique userid
        """
        user = self.lobbies_db[lobby_link].find_one({"user_id": userid})
        return user is not None

    def store_user_in_lobby(self, lobby_link, userid, username):
        """
        if user isn't in lobby, store
        :param lobby_link: reference for lobby link to access db
        :param userid: reference for unique userid
        """
        user_data = {
            "user_id": userid,
        }
        self.lobbies_db[lobby_link].insert_one(user_data)