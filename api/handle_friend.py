from http.server import BaseHTTPRequestHandler
from json import dumps, loads, JSONEncoder
from bson import ObjectId
from api.helpers.mongodb_helper import MongodbHelper

class JSONEncoderWithObjectId(JSONEncoder):
    def default(self, obj):
        if isinstance(obj, ObjectId):
            return str(obj)
        return super(JSONEncoderWithObjectId, self).default(obj)

class handler(BaseHTTPRequestHandler):
    def do_POST(self):
        '''
        Pass in user id, username, and id of lobby link owner(friend-to-be)
        Essentially, this function updates two users as friends whenever the lobby link is used.
        It adds an entry into the friends dictionary with the friend's user_id as key and username as value.
        It returns the updated user_data to update session storage for dynamic friends list.
        '''
        content_length = int(self.headers['Content-Length'])
        post_data = self.rfile.read(content_length)
        request_body = loads(post_data)

        user_id = request_body.get('user_id')
        username = request_body.get('username')
        friend_id = request_body.get('friend_id')

        mdb = MongodbHelper()

        user_data = mdb.get_user(user_id)
        friend_data = mdb.get_user(friend_id)
        friend_username = user_data['username']

        update = {'$set': {f'friends.{friend_id}': friend_username}}
        mdb.update_user(user_id, update)

        update = {'$set': {f'friends.{user_id}': username}}
        mdb.update_user(friend_id, update)


        self.send_response(200)
        self.send_header('Content-type', 'application/json')
        self.end_headers()
        self.wfile.write(JSONEncoderWithObjectId().encode(user_data).encode('utf-8'))

        return