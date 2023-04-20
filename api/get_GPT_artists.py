from http.server import BaseHTTPRequestHandler
from json import dumps, loads
import os

from api.helpers.openai_helper import PlaylistMakerGPT


class handler(BaseHTTPRequestHandler):
    def do_POST(self):

        content_length = int(self.headers['Content-Length'])
        post_data = self.rfile.read(content_length)
        request_body = loads(post_data)

        user_input = request_body.get('input')
        top_artists = request_body.get('artist_ids')

        api_key = os.environ.get("api_key")
        oah = PlaylistMakerGPT(api_key)

        [user_artists, public_artists] = oah.get_artists_from_input(user_input, top_artists[:20])
        print(user_artists)
        print(public_artists)

        response_data = {"public_artists": public_artists, "user_artists": user_artists}

        self.send_response(200)
        self.send_header('Content-type', 'application/json')
        self.send_header('Access-Control-Allow-Origin', '*')
        self.end_headers()
        self.wfile.write(dumps(response_data).encode())
