import json
import sys
import requests
from urllib.parse import parse_qs

from http.server import BaseHTTPRequestHandler

from json import JSONEncoder
from bson import ObjectId

from api.helpers.sp_helper import wrapped

from api.helpers.mongodb_helper import MongodbHelper
from api.helpers.spotify_helper import PlaylistMaker

sys.path.append("..")

SPOTIFY_API_ME_ENDPOINT = "https://api.spotify.com/v1/me"

class JSONEncoderWithObjectId(JSONEncoder):
    def default(self, obj):
        if isinstance(obj, ObjectId):
            return str(obj)
        return super(JSONEncoderWithObjectId, self).default(obj)

class handler(BaseHTTPRequestHandler):
    def do_POST(self):

        mdb = MongodbHelper()

        content_length = int(self.headers['Content-Length'])
        post_data = self.rfile.read(content_length)
        data = json.loads(post_data)
        
        access_token = data["token"]

        # Fetch user data from Spotify API
        headers = {"Authorization": f"Bearer {access_token}"}
        response = requests.get(SPOTIFY_API_ME_ENDPOINT, headers=headers)
        user_data_from_spotify = response.json()
        user_id = user_data_from_spotify["id"]

        # Get user profile image URL
        image_url = None
        if user_data_from_spotify["images"]:
            image_url = user_data_from_spotify["images"][0]["url"]

        if mdb.user_exists(user_id):
            # Get the user from the database
            user_data = mdb.get_user(user_id)
        else:
            # Get tracks
            pm = PlaylistMaker([access_token])
            tracks = pm.multiple_get_tracks(50)
            track_dicts = [{"id": track.id, "name": track.name, "artist": [track.artist]} for track in tracks]

            # Get top artists
            top_artists = pm.get_artists(50, access_token)

            # Create a user object and store it in the database
            user_data = mdb.format_user_data(
                user_id,
                user_data_from_spotify["display_name"],
                track_dicts,
                image_url,
                top_artists,
                playlists=[],
                friends=None, 
                friend_requests=None,
            )

            mdb.create_user(user_data)
        top_artists, top_image, top_musics, top_genres = wrapped(access_token)
        
        mdb.update_new_db(user_id, top_artists, top_image, top_musics, top_genres)

        # Send a response back to the client
        self.send_response(200)
        self.send_header('Content-type', 'application/json')
        self.end_headers()
        self.wfile.write(JSONEncoderWithObjectId().encode(user_data).encode('utf-8'))

def main():
    from http.server import HTTPServer
    server = HTTPServer(('localhost', 8080), handler)
    server.serve_forever()

if __name__ == "__main__":
    main()
