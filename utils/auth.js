import axios from 'axios';
import queryString from 'query-string';

const clientId = process.env.SPOTIFY_CLIENT_ID;
const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;
const redirectUri = process.env.SPOTIFY_REDIRECT_URI;

export const getAuthorizeUrl = () => {
  const params = {
    client_id: clientId,
    response_type: 'code',
    redirect_uri: redirectUri,
    show_dialog: true, 
    scope: 'user-top-read playlist-modify-private playlist-modify-public user-read-email user-read-recently-played user-read-private',
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
  
      return response.data;
    } catch (error) {
      console.error('Error during token exchange:', error);
      throw error;
    }
  };
  
