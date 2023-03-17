from http.server import BaseHTTPRequestHandler
from json import dumps, loads

from api.playlistMaker import playlistmaker

class handler(BaseHTTPRequestHandler):

    def do_POST(self):
        print("do_POST called")  # Add this line
        content_length = int(self.headers['Content-Length'])
        post_data = self.rfile.read(content_length)
        request_body = loads(post_data)

        token = request_body.get('token')
        print(f"Received token: {token}")
        pm = playlistmaker([token])
        tracks = pm.multiple_get_tracks(50)

        print(f"Tracks received: {tracks}")  # Add this line

        # Convert tracks to a list of dictionaries
        track_dicts = [{"id": track.id, "name": track.name, "artist": [track.artist]} for track in tracks]

        response_data = {"tracks": track_dicts}

        self.send_response(200)
        self.send_header('Content-type', 'application/json')
        self.send_header('Access-Control-Allow-Origin', '*')
        self.end_headers()
        self.wfile.write(dumps(response_data).encode())
        return
