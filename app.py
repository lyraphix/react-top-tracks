# flask_app.py
from api.spotify import app
from flask_cors import CORS

api_v1_cors_config = {
    "origins": ["http://localhost:3000"]  # Update the origin to your frontend server URL
}
CORS(app, resources={"/": api_v1_cors_config})  # Update this line

if __name__ == '__main__':
    app.run(port=5000)
