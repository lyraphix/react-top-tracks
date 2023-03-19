import { useRouter } from 'next/router';
import React, { useState, useEffect, useRef } from 'react';
import { getAuthorizeUrl, getAccessToken } from '../utils/auth';
import Slider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';
import Sidebar from '../components/Sidebar';


const Index = () => {
  const [accessToken, setAccessToken] = useState(null);
  const [topTracks, setTopTracks] = useState(null);
  const [playlistName, setPlaylistName] = useState('');
  const [userDisplayName, setUserDisplayName] = useState(null);
  const [numSongs, setNumSongs] = useState(10);
  const [userData, setUserData] = useState(null);

  const playlistNameInput = useRef(null);
  const router = useRouter();


  const handleNumSongsChange = (value) => {
    setNumSongs(value);
  };

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
  
  const shuffleArray = (array) => {
    let currentIndex = array.length;
    let temporaryValue, randomIndex;
  
    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  };
  
  const handleCreatePlaylist = async () => {
    if (topTracks.length > 0) {
      const selectedTracks = topTracks.slice(0, numSongs);
      const playlistName = playlistNameInput.current.value || `${userDisplayName}'s Musaic Playlist`;
      const userId = userData.user_id;
        
      try {
        const response = await fetch('/api/create_playlist', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ token: accessToken, name: playlistName, tracks: selectedTracks, user_id: userId }),
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
  
  const handleShuffle = () => {
    if (topTracks) {
      const shuffledTracks = shuffleArray([...topTracks]);
      setTopTracks(shuffledTracks);
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem('spotify_access_token');
    setAccessToken(null);
    setTopTracks(null);
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
    const storedUserData = sessionStorage.getItem('user_data');
    if (storedUserData) {
      setUserData(JSON.parse(storedUserData));
    }
  }, [router.query, accessToken, userDisplayName]);


  return (
    <div>
      <h1>Your top 5 tracks on Spotify</h1>
      {userData && <h2>Welcome, {userData.username}!</h2>}
      {accessToken ? (
        <div>
          {userData && (
            <Sidebar friends={userData.friends} playlists={userData.playlists} />
          )}
  
          {topTracks ? (
            <div>
              <input
                type="text"
                ref={playlistNameInput}
                value={playlistName}
                onChange={(e) => setPlaylistName(e.target.value)}
                placeholder="Enter playlist name"
              />

              <button onClick={handleCreatePlaylist}>Create Playlist</button>
              {topTracks && (
                <button onClick={handleShuffle}>Shuffle</button>
              )}
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

            <ol>
              {topTracks.slice(0, numSongs).map((track) => (
                <li key={track.id}>{track.name} by {track.artist[0]}</li>
              ))}
            </ol>

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
