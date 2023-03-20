import { useRouter } from 'next/router';
import React, { useState, useEffect, useRef } from 'react';
import Slider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';
import Sidebar from '../components/Sidebar';
import TopTracks from '../components/TopTracks';
import LogoutButton from '../components/LogoutButton';
import { shuffleArray } from '../utils/helpers';
import { getAuthorizeUrl } from '../utils/auth';

const Index = ({ user, setUser }) => {
  const [accessToken, setAccessToken] = useState(null);
  const [topTracks, setTopTracks] = useState(null);
  const [playlistName, setPlaylistName] = useState('');
  const [numSongs, setNumSongs] = useState(10);
  const [showTracksIndex, setShowTracksIndex] = useState(null);

  const playlistNameInput = useRef(null);
  const router = useRouter();

  const onToggleTracks = (index) => {
    if (showTracksIndex === index) {
      setShowTracksIndex(null);
    } else {
      setShowTracksIndex(index);
    }
  };

  const handleNumSongsChange = (value) => {
    setNumSongs(value);
  };

  const generateUniquePlaylistName = (defaultName) => {
    let newName = defaultName;
    let counter = 1;
  
    const existingNames = user.playlists.map((playlist) => playlist.name);
  
    while (existingNames.includes(newName)) {
      counter += 1;
      newName = `${defaultName} ${counter}`;
    }
  
    return newName;
  };
  

  const handleCreatePlaylist = async () => {
    if (topTracks.length > 0) {
      const selectedTracks = topTracks.slice(0, numSongs);
      const defaultPlaylistName = `${user.username}'s Musaic Playlist`;
      const playlistName = playlistNameInput.current.value || generateUniquePlaylistName(defaultPlaylistName);
      const userId = user.user_id;

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
          const createdPlaylist = data.playlist;

          console.log(createdPlaylist)

          // Add the created playlist to the user's playlists in session storage
          const currentUserData = JSON.parse(sessionStorage.getItem('user_data'));
          currentUserData.playlists.push(createdPlaylist);
          sessionStorage.setItem('user_data', JSON.stringify(currentUserData));

          // Update user state to trigger a re-render of the sidebar
          setUser(currentUserData);
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
    sessionStorage.removeItem('user_data');
    setUser(null);
    setTopTracks(null);
    setAccessToken(null);
    console.log('User data after logout:', sessionStorage.getItem('user_data'));
  };

  // handle setting token and user data
  useEffect(() => {
    const token = sessionStorage.getItem('spotify_access_token');
    setAccessToken(token);

    const storedUserData = sessionStorage.getItem('user_data');
    if (storedUserData) {
      const parsedUserData = JSON.parse(storedUserData);
      console.log(parsedUserData);
      setUser(parsedUserData);
    }
  }, [router.query, accessToken]);
  
  // set topTracks when user changes
  useEffect(() => {
    if (user) {
      const shuffledTracks = shuffleArray(user.tracks);
      setTopTracks(shuffledTracks);
    }
  }, [user]);
  

  return (
    <div>
      <h1>Your top tracks, powered by Musaic</h1>
      {user && <h2>Welcome, {user.username}!</h2>}
      {user ? (
        <div>
          {user && (
            <Sidebar
              friends={user.friends}
              playlists={user.playlists}
              onToggleTracks={onToggleTracks}
              showTracksIndex={showTracksIndex}
            />
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

              <button onClick={handleShuffle}>Shuffle</button>

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
              <TopTracks topTracks={topTracks} numSongs={numSongs} />
            </div>
          ) : (
            <p>Loading your top tracks...</p>
          )}
          <LogoutButton onLogout={handleLogout} />
        </div>
      ) : (
        <button onClick={() => window.location.href = getAuthorizeUrl()}>Log in with Spotify</button>
      )}
    </div>
  );
};

export default Index;
