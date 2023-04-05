import os
from pymongo import MongoClient

from api.track import Track
from api.playlist import Playlist
from api.user import User


password = os.environ.get("MONGODB_PWD")
username = os.environ.get("MONGODB_USERNAME")

connection_string = f"mongodb+srv://{username}:{password}@spotifymatched.2u1gxhe.mongodb.net/?retryWrites=true&w=majority"
client = MongoClient(connection_string)

db = client['musaic']  # Use the database named 'spotify_matched'
users_collection = db['users']  # Use the collection named 'users'
artists_db = db['artists']

def get_collection_name(artist_name):
    first_letter = artist_name[0].upper()
    return f"{first_letter}"

def is_artist_in_database(artist_name):
    collection_name = get_collection_name(artist_name)
    artist = artists_db[collection_name].find_one({"name": artist_name})
    return artist is not None

def store_artist_tracks_in_database(artist_name, top_tracks, related_tracks):
    collection_name = get_collection_name(artist_name)
    artist_data = {
        "name": artist_name,
        "top_tracks": [{"id": track["id"], "name": track["name"], "artist": artist_name} for track in top_tracks],
        "related_tracks": [{"id": track["id"], "name": track["name"], "artist": track["artists"][0]["name"]} for track in related_tracks],
    }
    artists_db[collection_name].insert_one(artist_data)

def add_user_to_db(user: User):
    users_collection = db["users"]
    user_data = user.to_dict()
    users_collection.insert_one(user_data)

def add_track_to_db(track: Track):
    tracks_collection = db["tracks"]
    track_data = track.to_dict()
    tracks_collection.insert_one(track_data)

def add_playlist_to_db(playlist: Playlist):
    playlists_collection = db["playlists"]
    playlist_data = playlist.to_dict()
    playlists_collection.insert_one(playlist_data)


def format_user_data(user_id, username, top_tracks, artists=None, playlists=None, friends=None, friend_requests=None):
    return User(
        user_id=user_id,
        username=username,
        top_tracks=top_tracks,
        artists=artists,
        playlists=playlists,
        friends=friends,
        friend_requests=friend_requests
    ).to_dict()


def user_exists(user_id):
    users_collection = client['musaic']['users']
    return users_collection.find_one({"user_id": user_id}) is not None

def get_user(user_id):
    users_collection = client['musaic']['users']
    return users_collection.find_one({"user_id": user_id})

def create_user(user_data):
    # Create a user in the 'users' collection
    print("User created")
    users_collection = client['musaic']['users']
    users_collection.insert_one(user_data)

def update_user(user_id, updates):
    # Update a user's information
    users_collection = client['musaic']['users']
    users_collection.update_one({"user_id": user_id}, updates)

def remove_playlist_from_user(user_id, playlist_id):
    users = users_collection

    result = users.update_one(
        {"user_id": user_id},
        {"$pull": {"playlists": {"id": playlist_id}}}  # Change "playlist_id" to "id"
    )

    return result.modified_count





def delete_user(user_id):
    # Delete a user from the database
    pass  # Implement this function


def add_friend(user_id, friend_id):
    # Add a friend to a user's friend list
    pass  # Implement this function
