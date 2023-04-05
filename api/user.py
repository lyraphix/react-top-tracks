class User:
    def __init__(self, user_id, username, top_tracks, artists=None, playlists=None, friends=None, friend_requests=None):
        self.user_id = user_id
        self.username = username
        self.friends = friends if friends is not None else []
        self.friend_requests = friend_requests if friend_requests is not None else []
        self.tracks = top_tracks
        self.artists = artists if artists is not None else []
        self.playlists = playlists if playlists is not None else []

    def to_dict(self):
        return {
            "user_id": str(self.user_id),
            "username": self.username,
            "tracks": self.tracks,
            "artists": self.artists,
            "playlists": [playlist.to_dict() for playlist in self.playlists],
            "friends": [friend.to_dict() for friend in self.friends],
            "friend_requests": [request.to_dict() for request in self.friend_requests],
        }
