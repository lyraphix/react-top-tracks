from http.server import BaseHTTPRequestHandler
from json import dumps, loads

from api.mongodb_helper import remove_playlist_from_user

class handler(BaseHTTPRequestHandler):

    def do_POST(self):
        content_length = int(self.headers['Content-Length'])
        post_data = self.rfile.read(content_length)
        request_body = loads(post_data)

        user_id = request_body.get('user_id')
        playlist_id = request_body.get('playlistId')

        print(f"Deleting playlist: {playlist_id} for user: {user_id}")  # Add print statement

        remove_playlist_from_user(user_id, playlist_id)

        self.send_response(200)
        self.send_header('Content-type', 'application/json')
        self.send_header('Access-Control-Allow-Origin', '*')
        self.end_headers()
        self.wfile.write(dumps({"message": "Playlist deleted successfully"}).encode())
        return
