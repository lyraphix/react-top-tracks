import openai_async as openai

class PlaylistMakerGPT:

    def __init__(self, api_key):
        self.api_key = api_key
        openai.api_key = self.api_key

    async def get_artists_from_input(self, user_input, top_artists):
        # Get the artist list from ChatGPT
        messages = [
        {
            "role": "user",
            "content": f"Your output will be a list of artists names. Based on the meaning and vibe of this phrase '{user_input}', output a list of 3 artists on Spotify who you think best evoke the feeling expressed in the phrase. If an artist's name is included in the phrase, include that artist too."
        }
        ]
        response = await openai.ChatCompletion.create_async(model="gpt-3.5-turbo", messages=messages)
        artist_list_text_1 = response.choices[0].message['content'].strip()
        artist_text_lines_1 = artist_list_text_1.split('\n')
        artist_list_1 = [line.partition('. ')[-1].strip().rstrip('"') for line in artist_text_lines_1 if line]
        artist_list_1 = [line.partition('. ')[-1].strip().replace('"', '') for line in artist_text_lines_1 if line]
        artist_list_1 = [line.partition('. ')[-1].strip().replace('.', '') for line in artist_text_lines_1 if line]

        messages = [
            {
                "role": "user",
                "content": f"Your output will be a list of artists names. You will be given a list of artists and a phrase. Your response should be a re-ordered list of the artists, arranged based on how closely they match the feeling, energy, or spirit of the phrase. The 0-indexed artist in your resposne should be the most similar to the phrase.  Here is the phrase: '{user_input}', and here is the list: '{top_artists}'"
            }
        ]
        response = await openai.ChatCompletion.create_async(model="gpt-3.5-turbo", messages=messages)
        artist_list_text_2 = response.choices[0].message['content'].strip()
        artist_text_lines_2 = artist_list_text_2.split('\n')
        artist_list_2 = [line.partition('. ')[-1].strip().rstrip('"') for line in artist_text_lines_2 if line]
        artist_list_2 = [line.partition('. ')[-1].strip().replace('"', '') for line in artist_text_lines_2 if line]
        artist_list_2 = [line.partition('. ')[-1].strip().replace('.', '') for line in artist_text_lines_2 if line]

        artist_list = artist_list_2 + artist_list_1

        return [artist_list_2, artist_list_1]
