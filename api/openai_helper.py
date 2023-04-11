
import random 
from mongodb_helper import MongodbHelper
from spotify_helper import playlistmaker
import openai

mdb = MongodbHelper()

class PlaylistMakerGPT:

    def __init__(self, api_key):
        self.api_key = api_key
        openai.api_key = self.api_key

    def get_playlist_from_gpt(self, user_input, top_artists):
        # Get the artist list from ChatGPT
        prompt = f"Your output will be a list of artists names. Based on the meaning and vibe of this phrase '{user_input}', rank the top 3 artists from this list '{top_artists}', that match the phrase the most. If an artist's name is included in the phrase, include the artist too."
        response = openai.Completion.create(engine="text-davinci-003", prompt=prompt, max_tokens=500, n=1, stop=None, temperature=0.7)
        artist_list_text_2 = response.choices[0].text.strip()
        artist_text_lines_2 = artist_list_text_2.split('\n')

        artist_list_2 = [line.partition('. ')[-1].strip().rstrip('"') for line in artist_text_lines_2 if line]
        artist_list_2 = [line.partition('. ')[-1].strip().replace('"', '') for line in artist_text_lines_2 if line]
        artist_list_2 = [line.partition('. ')[-1].strip().replace('.', '') for line in artist_text_lines_2 if line]

        prompt = f"Your output will be a list of 3 artists names only. Based on the meaning and vibe of this phrase '{user_input}' and these artists '{artist_list_2}' output a list of 3 artists you think are related to the phrase and artists provided. "
        response = openai.Completion.create(engine="text-davinci-003", prompt=prompt, max_tokens=500, n=1, stop=None, temperature=0.7)
        artist_list_text_1 = response.choices[0].text.strip()
        artist_text_lines_1 = artist_list_text_1.split('\n')
        artist_list_1 = [line.partition('. ')[-1].strip().rstrip('"') for line in artist_text_lines_1 if line]
        artist_list_1 = [line.partition('. ')[-1].strip().replace('"', '') for line in artist_text_lines_1 if line]
        artist_list_1 = [line.partition('. ')[-1].strip().replace('.', '') for line in artist_text_lines_1 if line]

        artist_list = artist_list_2 + artist_list_1

        return artist_list


    def get_tracks_from_artists(artist_list):

        track_ids_set = set()
        for artist_name in artist_list:
            print(f"Before processing artist: {artist_name}")

            if artist_name:
                # Get the first character of the artist's name (uppercase)
                first_char = artist_name[0].upper()
                results = sp.search(q=f"artist:{artist_name}", type="artist")
                if results['artists']['items']:
                    artist_id = results['artists']['items'][0]['id']
                # Check if the artist is in the corresponding collection
                if not mdb.is_artist_in_database(artist_name):
                    # Get top tracks and related tracks
                    print("artist not in DB")
                    top_tracks = sp.get_artist_top_100_tracks(artist_name)
                    print("got top tracks")
                    related_artists = sp.artist_related_artists(artist_id)['artists']
                    related_artist_ids = [artist['id'] for artist in related_artists[:1]]
                    related_tracks = []
                    for related_artist_id in related_artist_ids:
                        related_artist_tracks = sp.artist_top_tracks(related_artist_id, country='US')['tracks']
                        related_tracks.extend(related_artist_tracks[:10])
                        print("stored songs")

                    # Store the artist's top tracks and related tracks in the database
                    mdb.store_artist_tracks_in_database(artist_name, top_tracks, related_tracks)
                    print("stored all")

                # Get 10 random tracks from the artist's collection
                artist_tracks = list(mdb.artists_db[first_char].find_one({"name": artist_name}, {'_id': 0, 'top_tracks': 1, 'related_tracks': 1}).values())
                top_tracks, related_tracks = artist_tracks
                top_10 = top_tracks[:10]
                all_tracks = top_tracks[11:100] + related_tracks[:10]
                random.shuffle(all_tracks)
                selected_tracks = top_10 + all_tracks[:3]
                random.shuffle(selected_tracks)
                for track in selected_tracks[:10]:
                    track_id = track['id']
                    if track_id not in track_ids_set:
                        track_ids_set.add(track_id)

                print(f"After processing artist: {artist_name}")

        # Shuffle the track_ids list and return 20 random songs from it
        
        track_ids = list(track_ids_set)
        random.shuffle(track_ids)

        print("returning tracks ids")
        return track_ids[:100]