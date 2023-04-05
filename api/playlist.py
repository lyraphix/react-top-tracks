"""
Class for building a playlist
Author: Ellie Paek
"""

class Playlist:
    
    def __init__(self, name, id, tracks=None, image_url=None):
        """
        :param name (str): Playlist name
        :param id (int): Spotify playlist id
        :param tracks (list): List of tracks in the playlist
        """
        self.name = name
        self.id = id
        self.tracks = tracks if tracks is not None else []
        self.url = None
        self.image_url = image_url

    def __str__(self):
        return f"Playlist: {self.name}"

    def set_tracks(self, track_dict):
        """
        Add tracks to the playlist.
        :param track_dict (Track) dict: Tracks to be added to the playlist
        """
        self.tracks = track_dict
        return self

    def set_url(self, url):
        """
        Add url to the playlist.
        :param url (Str) URL to be added to the playlist
        """
        self.url = url
        return self