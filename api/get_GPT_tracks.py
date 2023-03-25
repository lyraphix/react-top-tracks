from http.server import BaseHTTPRequestHandler
from json import dumps, loads
from api.Musaic import Musaic
from api.playlist import Playlist
from api.track import Track

class handler(BaseHTTPRequestHandler):
    def do_POST(self):
        content_length = int(self.headers['Content-Length'])
        post_data = self.rfile.read(content_length)
        request_body = loads(post_data)

        token = request_body.get('token')
        pm = Musaic(token)
        user_input = request_body.get('input')
        playlist = pm.get_playlist_from_gpt(user_input)
        #slightly edited to return playlist id(to match Ellie's playlist format)
        link, tracks, playlist_id = pm.main(playlist, user_input)
        formatted_tracks = []
        for track in tracks:
            formatted_track = Track(track['name'], track['id'], track['artists'][0]['name'])
            formatted_track = formatted_track.to_dict()
            formatted_tracks.append(formatted_track)
        formatted_playlist = Playlist(name=user_input, id=playlist_id, tracks=formatted_tracks)
        formatted_playlist.set_url(link)
        formatted_playlist = formatted_playlist.__dict__
        
        response_data = {"external_url": link, "playlist": formatted_playlist,}


        self.send_response(200)
        self.send_header('Content-type', 'application/json')
        self.send_header('Access-Control-Allow-Origin', '*')
        self.end_headers()
        self.wfile.write(dumps(response_data).encode())
        return
