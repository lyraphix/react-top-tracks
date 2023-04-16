import openai

class PlaylistMakerGPT:

    def __init__(self, api_key):
        self.api_key = api_key
        openai.api_key = self.api_key

    def get_artists_from_input(self, user_input, top_artists):
        # Get the artist list from ChatGPT
        prompt = f"Your output will be a list of artists names. Based on the meaning and vibe of this phrase '{user_input}', rank the top 3 artists from this list '{top_artists}', that match the phrase the most. If an artist's name is included in the phrase, include the artist too."
        response = openai.Completion.create(engine="text-babbage-001", prompt=prompt, max_tokens=500, n=1, stop=None, temperature=0.7)
        print("Response 1:")
        print(response)
        artist_list_text_2 = response.choices[0].text.strip()
        artist_text_lines_2 = artist_list_text_2.split('\n')

        artist_list_2 = [line.partition('. ')[-1].strip().rstrip('"') for line in artist_text_lines_2 if line]
        artist_list_2 = [line.partition('. ')[-1].strip().replace('"', '') for line in artist_text_lines_2 if line]
        artist_list_2 = [line.partition('. ')[-1].strip().replace('.', '') for line in artist_text_lines_2 if line]

        prompt = f"Your output will be a list of 3 artists names only. Based on the meaning and vibe of this phrase '{user_input}' and these artists '{artist_list_2}' output a list of 3 artists you think are related to the phrase and artists provided. "
        response = openai.Completion.create(engine="text-babbage-001", prompt=prompt, max_tokens=500, n=1, stop=None, temperature=0.7)
        print("Response 2:")
        print(response)
        artist_list_text_1 = response.choices[0].text.strip()
        artist_text_lines_1 = artist_list_text_1.split('\n')
        artist_list_1 = [line.partition('. ')[-1].strip().rstrip('"') for line in artist_text_lines_1 if line]
        artist_list_1 = [line.partition('. ')[-1].strip().replace('"', '') for line in artist_text_lines_1 if line]
        artist_list_1 = [line.partition('. ')[-1].strip().replace('.', '') for line in artist_text_lines_1 if line]

        artist_list = artist_list_2 + artist_list_1

        return artist_list
