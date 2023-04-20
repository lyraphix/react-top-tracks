from http.server import BaseHTTPRequestHandler
from json import dumps, loads
from api.helpers.mongodb_helper import MongodbHelper

class handler(BaseHTTPRequestHandler):

    def do_POST(self):
        content_length = int(self.headers['Content-Length'])
        post_data = self.rfile.read(content_length)
        request_body = loads(post_data)
        user_id = request_body.get('user_id')
        mdb = MongodbHelper()
        mdb.delete_user(user_id)


        self.send_response(204)
        self.send_header('Content-type', 'application/json')
        self.send_header('Access-Control-Allow-Origin', '*')
        self.end_headers()
        return