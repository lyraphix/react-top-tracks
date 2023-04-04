from http.server import BaseHTTPRequestHandler
from json import dumps, loads
from api.Musaic import Musaic



class handler(BaseHTTPRequestHandler):
    def do_POST(self):
        content_length = int(self.headers['Content-Length'])
        post_data = self.rfile.read(content_length)
        request_body = loads(post_data)

        token = request_body.get('token')
        pm = Musaic(token)
        genres = pm.get_top_genres()
        
        response_data = {"genres": genres}

        self.send_response(200)
        self.send_header('Content-type', 'application/json')
        self.send_header('Access-Control-Allow-Origin', '*')
        self.end_headers()
        self.wfile.write(dumps(response_data).encode())
        return