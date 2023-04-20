import openai

class PlaylistMakerGPT:

    def __init__(self, api_key):
        self.api_key = api_key
        openai.api_key = self.api_key

    def get_artists_from_input(self, user_input, top_artists):
        # Helper function to process artist list from response
        def process_artist_list(artist_list_text):
            artist_list = artist_list_text.strip().split(', ')
            artist_list = [artist.strip().rstrip('"').replace('"', '').replace('.', '') for artist in artist_list if artist and artist.strip()]
            return artist_list

        # Get the artist list from ChatGPT
        prompt = f"Based on the following input phrase, provide a comma separated list consisting of nothing but the names of 8 artists on Spotify, who you think best evoke the feeling expressed in the phrase. If the phrase is too vague, use your best judgment and general knowledge to suggest artists that might fit. You must return a list of artists. If an artist's name is included in the phrase, include that artist too. Input phrase: '{user_input}'"
        response = openai.Completion.create(engine="text-davinci-003", prompt=prompt, max_tokens=500, n=1, stop=None, temperature=0.25)

        artist_list_1 = process_artist_list(response.choices[0].text)

        prompt = f"Based on the following input phrase and list of artists, provide a comma separated list consisting of nothing but the names of 8 artists from the list who you think best evoke the feeling expressed in the phrase. If the phrase is too vague, use your best judgment and general knowledge to suggest artists that might fit. You must return a list of artists. If an artist's name is included in the phrase, include that artist too. Input phrase: '{user_input}', and here is the list of artists:'{', '.join(top_artists)}'"
        response = openai.Completion.create(engine="text-davinci-003", prompt=prompt, max_tokens=500, n=1, stop=None, temperature=0.25)
        artist_list_2 = process_artist_list(response.choices[0].text)

        return [artist_list_2, artist_list_1]
