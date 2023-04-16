from http.server import BaseHTTPRequestHandler
from json import dumps, loads
import os


from api.helpers.mongodb_helper import MongodbHelper

class handler(BaseHTTPRequestHandler):
    def do_POST(self):
        content_length = int(self.headers['Content-Length'])
        post_data = self.rfile.read(content_length)
        request_body = loads(post_data)

        # mock variable for getting lobby link
        lobby_link = request_body.get('lobby-code')

        user_id = request_body.get('user_id')
        page = request_body.get('page', 1)
        mdb = MongodbHelper()

        # if new person clicks on link and authorizes, store them to database
        # different user variable? pretend it's access_token???
        id = mdb.get_user(user_id)
        name = mdb.users_collection['username']
        mdb.store_user_in_lobby(lobby_link, id, name)

        done = False
        
        # if everyone is ready / button is pressed, pull ids and send it to GPT
        grouped_users = list()
        if done:
            for id in mdb.lobbies_db[lobby_link].find():
                grouped_users.append(id)

        # TO DO: modify GPT tracks to iterate through ids and populate playlist
        # how to handle when new user entered room?
        # how to know when everyone is done?


        self.send_response(200)
        self.send_header('Content-type', 'application/json')
        self.send_header('Access-Control-Allow-Origin', '*')
        self.end_headers()
        self.wfile.write(dumps(grouped_users).encode())

        return