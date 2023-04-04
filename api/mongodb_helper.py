import os
from pymongo import MongoClient

from api.user import User


password = os.environ.get("MONGODB_PWD")
username = os.environ.get("MONGODB_USERNAME")

connection_string = f"mongodb+srv://{username}:{password}@spotifymatched.2u1gxhe.mongodb.net/?retryWrites=true&w=majority"
client = MongoClient(connection_string)

db = client['musaic']  # Use the database named 'spotify_matched'
users_collection = db['users']  # Use the collection named 'users'


def format_user_data(user_id, username, top_tracks, playlists=None, friends=None, friend_requests=None):
    user = User(user_id, username, top_tracks, playlists, friends, friend_requests)
    return user.to_dict()

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
