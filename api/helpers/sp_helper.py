import sys
#import pandas as pd
import spotipy
import spotipy.util as util
import time
from collections import Counter
#import urllib.request
#from keys import client_id, client_secret, redirect_uri
#from get_features import get_track_ids, get_artist_features
#from PIL import Image
#from PIL import ImageFont
#from PIL import ImageDraw
#import chinese_converter
#import hanzidentifier
#import unicodedata
import os
#import io
#import urllib.request
#import ssl


def get_track_ids(time_frame):
    track_ids = []
    for song in time_frame['items']:
        track_ids.append(song['id'])
    return track_ids


def get_artist_features(id,sp):
    meta = sp.track(id)
    artist_id = meta['album']['artists'][0]['uri']
    artist = sp.artist(artist_id)
    url = artist['external_urls']['spotify']
    artist_genre = artist['genres']
    image = artist['images'][0]['url']
    name = artist['name']
    artist_info = [name, artist_genre, image, url]
    return artist_info


def get_token(username):
    token = util.prompt_for_user_token(username, "user-top-read", client_id= os.environ.get("NEXT_PUBLIC_SPOTIFY_CLIENT_ID"), 
                                                                    client_secret=os.environ.get("NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET"), 
                                                                    redirect_uri=os.environ.get("NEXT_PUBLIC_SPOTIFY_REDIRECT_URI") )
    return token


def wrapped(token):
    #print(token)
    if token:
        sp = spotipy.Spotify(auth=token)
        top_tracks_short = sp.current_user_top_tracks(limit=30, offset=0, time_range="medium_term")
    else:
        print("Can't get token")
    print('start')
    
    top_musics = []
    #top_tracks_short = sp.current_user_top_tracks(limit=50, offset=0, time_range="medium_term")
    tracks = []
    for music in top_tracks_short["items"]:
        print(music)
        music_name = music['name']
        artist_name = music['artists'][0]['name']
        album_name = music['album']['name']
        image = music['album']['images'][0]['url']
        top_musics.append(music_name)
        tracks.append([music_name,artist_name,album_name,image])
   
    #top_musics = pd.DataFrame(tracks, columns = ['name', 'artist', 'album', 'album_cover'])
    #top_musics = tracks[:5]
    print('top_music')
    # top artists
    track_ids = get_track_ids(top_tracks_short)
    artists =[]
    for i in track_ids:
        #time.sleep(.5)
        artist = get_artist_features(i,sp)
        artists.append(artist)
        
    artists_count = {}
    genres_count = {}
    for artist in artists:
        name = artist[0]
        image_url = artist[2]
        genres = artist[1]
        if name:
            artists_count[name] = {'count': artists_count.get(name, {'count': 0})['count'] + 1, 'image_url': image_url}
        for genre in genres:
            genres_count[genre] = genres_count.get(genre, 0) + 1

    # Get the top 5 artists and their image URLs
    top_artists = sorted(artists_count.items(), key=lambda item: item[1]['count'], reverse=True)#[:5]
    top_artists_list = [artist[0] for artist in top_artists]
    top_img_list = [artist[1]['image_url'] for artist in top_artists]

    # Get the top 5 artists and genres
    #top_artists = dict(sorted(artists_count.items(), key=lambda item: item[1], reverse=True)[:5])
    top_genres = dict(sorted(genres_count.items(), key=lambda item: item[1], reverse=True))#[:5]

    return top_artists_list, top_img_list, top_musics, list(top_genres.keys())

#username = '31qgqgqlgsdh55oyherljxiq6fqq' 
#token = get_token(username)
#token = 'BQATjdPPBGeYelXcM7cD-JuureIWvmzJ28PjRGp05Qh-6f1rdGLjQNhyaSooC78KZQDxx-agDpIF6KQ8iCqEQYhq4OwlGrNsymIyVKAz_yIvVv_g4Cm-6UOt_Tnl5d7v9qZHW2MmT348AQnP-YbiuoSP-WgigpsNUdzxBEPuTTs2XxMs3cQgJ1BTytRqXCpH'
##token2 = 'BQAwmaQF6fdXqouuDMuii9HY9we8444IAJWbmcotyJu2FwqvRcu_q6sg4q0hIP7-OBQpLzaPjH9rvsIaTRNVd1gb3x6TZwJ3wMlWlYgCr7v9LmpgQ98vmiyjAw064y7AFwYaRiscgycTXvgU_fWIPfMr6Bxz-MdzcjYKbscRKQvqe5EMO5deu8Y'
#intersection, merged_music, merged_artist = music_share(token, token2, username)
#write_poster(intersection, merged_music, merged_artist)
#write_poster(top_musics, top_artists, top_genres, top_genres_chart)
#wrapped(token2,username)