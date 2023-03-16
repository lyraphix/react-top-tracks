from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # This line enables CORS for all routes and sets Access-Control-Allow-Origin to *

@app.route('/', methods=['POST'])
def get_dummy_data():
    dummy_data = {
        "tracks": [
            {"id": "1", "name": "Track 1", "artist": ["Artist 1"]},
            {"id": "2", "name": "Track 2", "artist": ["Artist 2"]},
            {"id": "3", "name": "Track 3", "artist": ["Artist 3"]},
            {"id": "4", "name": "Track 4", "artist": ["Artist 4"]},
            {"id": "5", "name": "Track 5", "artist": ["Artist 5"]},
        ]
    }

    response = jsonify(dummy_data)
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response
