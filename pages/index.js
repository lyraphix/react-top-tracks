import { useRouter } from 'next/router';

import React, { useState, useEffect, useRef } from 'react';

import 'rc-slider/assets/index.css';

import Sidebar from '../components/Sidebar';

import TopTracks from '../components/TopTracks';

import LogoutButton from '../components/LogoutButton';

import SignInComponent from '../components/SignInComponent';

import WelcomeHeader from '../components/WelcomeHeader';

import PlaylistForm from '../components/PlaylistForm';

import Genres from '../components/Genres';

import ShuffleButton from '../components/ShuffleButton';
import MainComponent from '../components/MainComponent';

const Index = ({ Component, pageProps, user, setUser }) => {

  const [accessToken, setAccessToken] = useState(null);

  const [topTracks, setTopTracks] = useState(null);

  const [playlistName, setPlaylistName] = useState('');

  const [numSongs, setNumSongs] = useState(10);

  const [showTracksIndex, setShowTracksIndex] = useState(null);

  const [userInput, setUserInput] = useState('');

  const [gptTracks, setGPTTracks] = useState(null);

  const [topGenres, setTopGenres] = useState(null);


  const textInput = useRef(null);
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

  

  const handleDeletePlaylists = async (selectedPlaylists, setSelectedPlaylists) => {

    const updatedUserPlaylists = user.playlists.filter((playlist) => !selectedPlaylists.includes(playlist.id));


    // Update user state and session storage

    const updatedUser = { ...user, playlists: updatedUserPlaylists };

    setUser(updatedUser);

    sessionStorage.setItem('user_data', JSON.stringify(updatedUser));


    // Delete playlists from Spotify and MongoDB

    for (const playlistId of selectedPlaylists) {

      try {

        // Unfollow the playlist on Spotify

        const response = await fetch(`https://api.spotify.com/v1/playlists/${playlistId}/followers`, {

          method: 'DELETE',

          headers: {

            'Authorization': `Bearer ${accessToken}`,

          },

        });


        if (!response.ok) {

          console.error('Failed to unfollow playlist on Spotify:', response.statusText);

          return;

        }


        // Remove playlist from the MongoDB database

        await fetch('/api/delete_playlist', {

          method: 'POST',

          headers: {

            'Content-Type': 'application/json',

          },

          body: JSON.stringify({ playlistId: playlistId, user_id: user.user_id }),  // Change user.id to user.user_id

        });

        

      } catch (error) {

        console.error('Error deleting playlist:', error);

      }

    }


    // Reset the selected playlists

    setSelectedPlaylists([]);

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

  //after user presses submit button, calls GPT function
  const handleSubmit = (event) => {
    event.preventDefault();
    handlePlaylistFromGPT();
  }

  //user also has the option to press enter after inputting phrase, alternative to submit button
  const handleKeyPress = (event) => {
    if(event.key === 'Enter') {
      handlePlaylistFromGPT()
    }
  }

  //updates value of "user input"
  const handleInputChange = (event) => {
    setUserInput(event.target.value);
  }

  const handleTopGenres = async () => {
      try {
        const response = await fetch('/api/handleGenres', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json', 'token' : accessToken
          },
          body: JSON.stringify({ token: accessToken }),
        });

        if (response.ok) {
          const data = await response.json();
          setTopGenres(data.genres);
          console.log(data.genres);
          console.log('successfully fetched top genres');
        } else {
          console.error('Failed to fetch top genres:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching top genres:', error);
      }
    
  };

  const handlePlaylistFromGPT = async () => {
    try {
      const response = await fetch('/api/get_GPT_tracks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({token: accessToken, input: userInput}),
      });

      if (response.ok) {
        const data = await response.json();
        const externalUrl = data.external_url;
        const createdGPTPlaylist = data.playlist;
        const currentUserData = JSON.parse(sessionStorage.getItem('user_data'));
        currentUserData.playlists.push(createdGPTPlaylist);
        sessionStorage.setItem('user_data', JSON.stringify(currentUserData));
        setUser(currentUserData);

        console.log(createdTracks)
      } else {
          console.error('Failed to create playlist:', response.statusText);
      }

    } catch {error} {
        console.error('Error creating playlist:', error);
    }
  };

  const handleLogout = () => {

    sessionStorage.removeItem('spotify_access_token');

    sessionStorage.removeItem('user_data');

    setUser(null);

    setTopTracks(null);

    setAccessToken(null);

    setTopGenres(null);

    setGPTTracks(null);

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
      handleTopGenres();
      setTopTracks(shuffledTracks);

    }

  }, [user]);

  


  return (
    <MainComponent
      user={user}
      setUser={setUser}
      accessToken={accessToken}
      topTracks={topTracks}
      topGenres={topGenres}
      numSongs={numSongs}
      playlistName={playlistName}
      playlistNameInput={playlistNameInput}
      textInput={textInput}
      userInput={userInput}
      setPlaylistName={setPlaylistName}
      onToggleTracks={onToggleTracks}
      showTracksIndex={showTracksIndex}
      handleDeletePlaylists={handleDeletePlaylists}
      handleCreatePlaylist={handleCreatePlaylist}
      handleNumSongsChange={handleNumSongsChange}
      handleShuffle={handleShuffle}
      handleLogout={handleLogout}
      handleInputChange={handleInputChange}
      handleSubmit={handleSubmit}
      handleKeyPress={handleKeyPress}
    />
  );

};


export default Index;