import axios from 'axios';
import queryString from 'query-string';

const clientId = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID;
const clientSecret = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET;
const redirectUri = process.env.NEXT_PUBLIC_SPOTIFY_REDIRECT_URI;

export const getAuthorizeUrl = () => {
  const params = {
    client_id: clientId,
    response_type: 'code',
    redirect_uri: redirectUri,
    show_dialog: true, 
    scope: 'user-top-read playlist-modify-private playlist-modify-public user-read-email user-top-read user-read-recently-played user-read-private',
  };

  const authorizeUrl = `https://accounts.spotify.com/authorize?${queryString.stringify(params)}`;

  return authorizeUrl;
};

export const getAccessToken = async (code) => {
  const tokenEndpoint = 'https://accounts.spotify.com/api/token';

  const requestBody = {
    client_id: clientId,
    client_secret: clientSecret,
    grant_type: 'authorization_code',
    code,
    redirect_uri: redirectUri,
  };

  try {
    const response = await axios.post(tokenEndpoint, queryString.stringify(requestBody), {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });

    console.log('Token exchange response:', response.data); // Add this line

    const accessToken = response.data.access_token;

    // Fetch the user display name
    const userResponse = await axios.get('https://api.spotify.com/v1/me', {
      headers: {
        'Authorization': `Bearer ${accessToken}`,
      },
    });

    console.log('User response:', userResponse.data); // Add this line

    // Add the display name to the response data
    response.data.display_name = userResponse.data.display_name;

    return response.data;
  } catch (error) {
    console.error('Error during token exchange:', error);
    throw error;
  }
};
