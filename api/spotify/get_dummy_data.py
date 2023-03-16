from http.server import BaseHTTPRequestHandler
from json import dumps, loads


class handler(BaseHTTPRequestHandler):



    def do_POST(self):
        content_length = int(self.headers['Content-Length'])
        post_data = self.rfile.read(content_length)
        request_body = loads(post_data)

        token = request_body.get('token')



        print(f"Received token: {token}")  # Print the token to debug

        dummy_data = {
            "tracks": [
                {"id": "1", "name": "Track 1", "artist": ["Artist 1"]},
                {"id": "2", "name": "Track 2", "artist": ["Artist 2"]},
                {"id": "3", "name": "Track 3", "artist": [token]},  # Replace "Artist 3" with the token
                {"id": "4", "name": "Track 4", "artist": ["Artist 4"]},
                {"id": "5", "name": "Track 5", "artist": ["Artist 5"]},
            ]
        }

        self.send_response(200)
        self.send_header('Content-type', 'application/json')
        self.send_header('Access-Control-Allow-Origin', '*')
        self.end_headers()
        self.wfile.write(dumps(dummy_data).encode())
        return
