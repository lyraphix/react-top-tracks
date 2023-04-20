import openai

class PlaylistMakerGPT:

    def __init__(self, api_key):
        self.api_key = api_key
        openai.api_key = self.api_key

    def get_artists_from_input(self, user_input, top_artists):
        # Helper function to process artist list from response
        def process_artist_list(artist_list_text):
            artist_text_lines = artist_list_text.strip().split('\n')
            artist_list = [line.partition('. ')[-1].strip().rstrip('"').replace('"', '').replace('.', '') for line in artist_text_lines if line]
            return artist_list

        # Get the artist list from ChatGPT
        messages = [
        {
            "role": "user",
            "content": f"Based on the following input phrase, provide a list of 8 artists on Spotify who you think best evoke the feeling expressed in the phrase. If the phrase is too vague, use your best judgment and general knowledge to suggest artists that might fit. If an artist's name is included in the phrase, include that artist too. Input phrase: '{user_input}'"
        }
        ]
        response = openai.ChatCompletion.create(
            model="gpt-3.5-turbo",
            messages=messages,
            temperature=0.5,
            max_tokens=100
        )

        artist_list_1 = process_artist_list(response.choices[0].message['content'])

        messages = [
            {
                "role": "user",
                "content": f"Given a list of artists and an input phrase, return the 8 artists who most closely match the vibe, energy, and feeling of the phrase. If the phrase is too vague, use your best judgment and general knowledge to suggest artists that might fit. Here is the input phrase: '{user_input}', and here is the list of artists: '{', '.join(top_artists)}'"
            }
        ]
        response = openai.ChatCompletion.create(
            model="gpt-3.5-turbo",
            messages=messages,
            temperature=0.5,
            max_tokens=100
        )
        artist_list_2 = process_artist_list(response.choices[0].message['content'])

        return [artist_list_2, artist_list_1]
