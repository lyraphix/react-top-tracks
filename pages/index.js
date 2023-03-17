import { useRouter } from 'next/router';
import React, { useState, useEffect, useRef } from 'react';
import { getAuthorizeUrl, getAccessToken } from '../utils/auth';
import Slider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';


const Index = () => {
  const [accessToken, setAccessToken] = useState(null);
  const [topTracks, setTopTracks] = useState(null);
  const [playlistName, setPlaylistName] = useState('');
  const playlistNameInput = useRef(null);
  const [userDisplayName, setUserDisplayName] = useState(null);
  const [numSongs, setNumSongs] = useState(0);

  const handleNumSongsChange = (value) => {
    setNumSongs(value);
  };

  const router = useRouter();

  const fetchTopTracks = async () => {
    if (accessToken) {
      console.log("Sending token:", accessToken);
  
      try {
        const response = await fetch('/api/top_tracks', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ token: accessToken }),
        });
  
        if (response.ok) {
          console.log("Response received:", response);
          const data = await response.json();
          setTopTracks(data.tracks);
        } else {
          console.error('Failed to fetch top tracks:', response.statusText, 'Response:', response);
        }
      } catch (error) {
        console.error('Error fetching top tracks:', error);
      }
    }
  };
  
  
  const handleCreatePlaylist = async () => {
    if (topTracks.length > 0) {
      const selectedTracks = topTracks.slice(0, numSongs);
      const playlistName = playlistNameInput.current.value || `${userDisplayName}'s Musaic Playlist`;
  
      try {
        const response = await fetch('/api/create_playlist', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ token: accessToken, name: playlistName, tracks: selectedTracks }),
        });
  
        if (response.ok) {
          const data = await response.json();
          const externalUrl = data.external_url;
          window.open(externalUrl, '_blank');
        } else {
          console.error('Failed to create playlist:', response.statusText);
        }
      } catch (error) {
        console.error('Error creating playlist:', error);
      }
    } else {
      alert('Please select at least one track.');
    }
  };
  
  

  useEffect(() => {
    if (router.query.code && !sessionStorage.getItem('spotify_access_token')) {
      const fetchAccessToken = async () => {
        try {
          const tokenResponse = await getAccessToken(router.query.code);
          sessionStorage.setItem('spotify_access_token', tokenResponse.access_token);
          setAccessToken(tokenResponse.access_token);
          setUserDisplayName(tokenResponse.display_name);
        } catch (error) {
          console.error('Error fetching access token:', error);
        }
      };
  
      fetchAccessToken();
    } else {
      const token = sessionStorage.getItem('spotify_access_token');
      setAccessToken(token);
  
      if (token) {
        fetchTopTracks();
  
        if (!userDisplayName) {
          const fetchUserData = async () => {
            const response = await fetch('https://api.spotify.com/v1/me', {
              headers: {
                'Authorization': `Bearer ${accessToken}`,
              },
            });
  
            const userData = await response.json();
            setUserDisplayName(userData.display_name);
          };
  
          fetchUserData();
        }
      }
    }
  }, [router.query, accessToken, userDisplayName]);

  const handleLogout = () => {
    sessionStorage.removeItem('spotify_access_token');
    setAccessToken(null);
    setTopTracks(null);
  };

  return (
    <div>
      <h1>Your top 5 tracks on Spotify</h1>
      {accessToken ? (
        <div>
          {topTracks ? (
            <div>
            <ol>
              {topTracks.slice(0, numSongs).map((track) => (
                <li key={track.id}>{track.name} by {track.artist[0]}</li>
              ))}
            </ol>
              <input
                type="text"
                ref={playlistNameInput}
                value={playlistName}
                onChange={(e) => setPlaylistName(e.target.value)}
                placeholder="Enter playlist name"
              />

              <button onClick={handleCreatePlaylist}>Create Playlist</button>

              <div class='CHANGE STYLE LATER' style={{ width: '20ch' }}>
                <Slider
                  min={5}
                  max={50}
                  defaultValue={10}
                  value={numSongs}
                  onChange={handleNumSongsChange}
                />
              <div>{numSongs} in playlist (min 5)</div>
              </div>
            </div>          
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
