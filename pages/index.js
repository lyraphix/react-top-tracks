import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { getAuthorizeUrl } from '../utils/auth';

const Index = () => {
  const [accessToken, setAccessToken] = useState(null);
  const [topTracks, setTopTracks] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const token = sessionStorage.getItem('spotify_access_token');
    setAccessToken(token);

    const fetchTopTracks = async () => {
      try {
        const response = await fetch('https://api.spotify.com/v1/me/top/tracks?limit=5', {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });

        if (response.ok) {
          const data = await response.json();
          setTopTracks(data.items);
        } else {
          console.error('Failed to fetch top tracks:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching top tracks:', error);
      }
    };

    if (token) {
      fetchTopTracks();
    }
  }, [router.query]);

  const handleLogout = () => {
    localStorage.removeItem('spotify_access_token');
    setAccessToken(null);
    setTopTracks(null);
  };

  return (
    <div>
      <h1>Your top 5 tracks on Spotify</h1>
      {accessToken ? (
        <div>
          {topTracks ? (
            <ol>
              {topTracks.map((track) => (
                <li key={track.id}>{track.name} by {track.artists[0].name}</li>
              ))}
            </ol>
          ) : (
            <p>Loading your top tracks...</p>
          )}
          <button onClick={handleLogout}>Log out</button>
        </div>
      ) : (
        <button onClick={() => window.location.href = getAuthorizeUrl()}>Log in with Spotify</button>
      )}
    </div>
  );
};

export default Index;
