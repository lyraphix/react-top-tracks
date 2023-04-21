from http.server import BaseHTTPRequestHandler
from json import dumps, loads
from json import JSONEncoder
from bson import ObjectId
#from api.helpers.openai_helper import PlaylistMakerGPT
#rom api.helpers.spotify_helper import PlaylistMaker
#from api.helpers.sp_helper import wrapped
#from api.schemas.track import Track
from api.helpers.mongodb_helper import MongodbHelper

class JSONEncoderWithObjectId(JSONEncoder):
    def default(self, obj):
        if isinstance(obj, ObjectId):
            return str(obj)
        return super(JSONEncoderWithObjectId, self).default(obj)

class handler(BaseHTTPRequestHandler):
    def do_POST(self):
        content_length = int(self.headers['Content-Length'])
        post_data = self.rfile.read(content_length)
        request_body = loads(post_data)
        user_id = request_body.get('user_id')
        print(user_id)
        mdb = MongodbHelper()
        user_data = mdb.get_new_db(user_id)
        
        top_artists = user_data["top_artists"][:5]
        top_image = user_data["top_image"][:5]
        top_musics = user_data["top_musics"][:5]
        top_genres = user_data["top_genres"][:5]
        #access_token2 = request_body.get('token')
        #top_artists, top_musics, top_genres = wrapped(access_token1)
        #user_info = mdb.get_user(user_id)
        #print(user_info)
        #image_data4 = test_info()
        #images_list = write_info(top_artists, top_musics, top_genres)
        #mdb = MongodbHelper()
        #mdb.add_poster_to_db(self, user_id, images_list)
        #"top_artists": top_artists, "top_musics": top_musics,
        response_data = {"top_artists": top_artists, "top_image": top_image, "top_musics": top_musics,"top_genres": top_genres}
        #print(response_data)

        self.send_response(200)
        self.send_header('Content-type', 'application/json')
        self.send_header('Access-Control-Allow-Origin', '*')
        self.end_headers()
        self.wfile.write(JSONEncoderWithObjectId().encode(response_data).encode('utf-8'))

        return 
