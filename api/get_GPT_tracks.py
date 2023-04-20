from http.server import BaseHTTPRequestHandler
from json import dumps, loads

from api.helpers.spotify_helper import PlaylistMaker
from api.schemas.track import Track
from api.helpers.mongodb_helper import MongodbHelper

class handler(BaseHTTPRequestHandler):
    def do_POST(self):

        content_length = int(self.headers['Content-Length'])
        post_data = self.rfile.read(content_length)
        request_body = loads(post_data)

        access_token = request_body.get('token')
        artist_name = request_body.get('artist')

        sp = PlaylistMaker([access_token])
        mdb = MongodbHelper()

        def process_artist(artist_name, sp, mdb):
            tracks = []
            print(artist_name)
            if artist_name and not artist_name.startswith('$'):
                first_char = artist_name[0].upper()
                if not mdb.is_artist_in_database(artist_name):
                    # Search for the artist ID using the artist name
                    results = sp.search(query=f"artist:{artist_name}", search_type="artist")
                    if results['artists']['items']:
                        artist_id = results['artists']['items'][0]['id']
                        # Get the artist's top 3 tracks
                        top_tracks = sp.artist_top_tracks(artist_id, limit=3, country='US')
                        # Remove duplicate tracks
                        unique_tracks = {track['name']: Track(name=track['name'], id=track['id'], artist=artist_name, image_url=track.get('album', {}).get('images', [])[0].get('url') if track.get('album', {}).get('images') else None) for track in top_tracks}.values()

                        related_track_ids = sp.get_tracks_from_artists([artist_name])
                        related_tracks_objects = [Track(name=track.name, id=track.id, artist=track.artist, image_url=track.image_url) for track in related_track_ids]

                        mdb.store_artist_tracks_in_database(artist_name, list(unique_tracks), related_tracks_objects)
                # Retrieving all related tracks
                artist_tracks = mdb.artists_db[first_char].find_one({"name": artist_name}, {'_id': 0, 'top_tracks': 1, 'related_tracks': 1})
                if artist_tracks:
                    top_tracks = artist_tracks.get('top_tracks', [])
                    related_tracks = artist_tracks.get('related_tracks', [])

                    tracks.extend(top_tracks + related_tracks)

            return tracks
        
        tracks = process_artist(artist_name, sp, mdb)

        tracks = [track if isinstance(track, dict) else track.to_dict() for track in tracks]

        response_data = {"tracks": tracks}

        self.send_response(200)
        self.send_header('Content-type', 'application/json')
        self.send_header('Access-Control-Allow-Origin', '*')
        self.end_headers()
        self.wfile.write(dumps(response_data).encode())