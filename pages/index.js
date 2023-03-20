import { useRouter } from 'next/router';
import React, { useState, useEffect, useRef } from 'react';
import 'rc-slider/assets/index.css';
import Sidebar from '../components/Sidebar';
import TopTracks from '../components/TopTracks';
import LogoutButton from '../components/LogoutButton';
import SignInComponent from '../components/SignInComponent';
import WelcomeHeader from '../components/WelcomeHeader';
import PlaylistForm from '../components/PlaylistForm';
import ShuffleButton from '../components/ShuffleButton';

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

  const handleShuffle = () => {
    if (topTracks) {
      const shuffledTracks = shuffleArray([...topTracks]);
      setTopTracks(shuffledTracks);
    }
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
    if (user && !topTracks) {
      const shuffledTracks = shuffleArray(user.tracks);
      setTopTracks(shuffledTracks);
    }
  }, [user]);
  

  return (
    <div>
      {user ? (
        <>
          {user.username ? (
            <WelcomeHeader username={user.username} />
          ) : (
            <div>Alternate Text</div>
          )}
          <Sidebar
            friends={user.friends}
            playlists={user.playlists}
            onToggleTracks={onToggleTracks}
            showTracksIndex={showTracksIndex}
          />
          {topTracks ? (
            <div>
              <PlaylistForm
                playlistName={playlistName}
                playlistNameInput={playlistNameInput}
                setPlaylistName={setPlaylistName}
                handleCreatePlaylist={handleCreatePlaylist}
                numSongs={numSongs}
                handleNumSongsChange={handleNumSongsChange}
              />
              <ShuffleButton handleShuffle={handleShuffle} />
              <TopTracks topTracks={topTracks} numSongs={numSongs} />
            </div>
          ) : (
            <p>Loading your top tracks...</p>
          )}
          <LogoutButton onLogout={handleLogout} />
        </>
      ) : (
        <SignInComponent />
      )}
    </div>
  );
};

export default Index;
