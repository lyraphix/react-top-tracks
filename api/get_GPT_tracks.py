from http.server import BaseHTTPRequestHandler
from json import dumps, loads
from api.playlist import Playlist
from api.track import Track

import mongodb_helper as mdb
import openai_helper as oah
import spotify_helper as sph

class handler(BaseHTTPRequestHandler):
    def do_POST(self):
        content_length = int(self.headers['Content-Length'])
        post_data = self.rfile.read(content_length)
        request_body = loads(post_data)

        token = request_body.get('token')
        user_input = request_body.get('input')
        user_artist_ids = request_body.get('artist_ids')


        generated_artists = oah.get_artists_from_gpt(user_input, user_artist_ids)
        generated_tracks = oah.get_tracks_from_artists(generated_artists)

        response_data = {"generated_tracks": generated_tracks}

        self.send_response(200)
        self.send_header('Content-type', 'application/json')
        self.send_header('Access-Control-Allow-Origin', '*')
        self.end_headers()
        self.wfile.write(dumps(response_data).encode())
        return
