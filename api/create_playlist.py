from http.server import BaseHTTPRequestHandler
from json import dumps, loads

from api.helpers.spotify_helper import PlaylistMaker
from api.helpers.mongodb_helper import MongodbHelper

from api.schemas.track import Track
from api.schemas.playlist import Playlist


class handler(BaseHTTPRequestHandler):

    def do_POST(self):
        content_length = int(self.headers['Content-Length'])
        post_data = self.rfile.read(content_length)
        request_body = loads(post_data)

        token = request_body.get('token')
        playlist_name = request_body.get('name')
        tracks_data = request_body.get('tracks')
        num_songs = request_body.get('numSongs')
        user_id = request_body.get('user_id')
        description = request_body.get('description')

        # Convert track data to Track objects
        tracks = [Track(data["name"], data["id"], data["artist"], data.get("image_url", "/landing/logo.png")) for data in tracks_data]




        pm = PlaylistMaker([token])

        # Create the playlist with the given name
        playlist = pm.create_playlist(playlist_name, description)

        # Populate the playlist with the selected tracks, limited to num_songs
        pm.populate_playlist(playlist, tracks[:num_songs])

        # Get the link to the playlist
        link = pm.get_playlist_link(playlist)
        image = pm.get_playlist_image(playlist)
        
        # MongoDB needs us to format tracks in a serializable format
        serialized_tracks = [track.to_dict() for track in playlist.tracks]
        playlist_dict = playlist.__dict__
        playlist_dict['tracks'] = serialized_tracks
        playlist_dict['image_url'] = image

        mdb = MongodbHelper()
        mdb.update_user(user_id, {"$push": {"playlists": playlist_dict}})

        response_data = {"external_url": link, "playlist": playlist_dict}

        self.send_response(200)
        self.send_header('Content-type', 'application/json')
        self.send_header('Access-Control-Allow-Origin', '*')
        self.end_headers()
        self.wfile.write(dumps(response_data).encode())
        return
