import { useState } from 'react';
import { getDatabase, ref, child, set, push, onValue, off } from "firebase/database";

const useDashboard = (user, setSelectedPlaylist, setUser, closeJoinMusaicDrawer) => {
  const [anchorLobby, setAnchorLobby] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [musaicKey, setMusaicKey] = useState(''); // Added this line
  const [lobbyOpen, setLobbyOpen] = useState(false); // Added this line

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };


  const createLobby = () => {
    const accessToken = sessionStorage.getItem('spotify_access_token');
    console.log('Function called')
    const generatedMusaicKey = Math.random().toString(36).substr(2, 8).toUpperCase(); // Generates an 8-character alphanumeric Musaic Key
    setMusaicKey(generatedMusaicKey);
    
    const db = getDatabase();
    console.log('db made')
    const newLobbyRef = push(child(ref(db), 'lobbies'));
    const lobbyId = newLobbyRef.key;
    console.log('lobbyID done')
    console.log(user)
    console.log('of course a user exists, right?')
    const lobbyData = {
      id: lobbyId,
      musaicKey: generatedMusaicKey, 
      users: {
        [user.user_id]: {
          id: user.user_id,
          ready: false,
          input: '',
          token: accessToken,
        },
      },
    };
    
    console.log('Lobby data')
    console.log(lobbyData)
    set(newLobbyRef, lobbyData)
      .then(() => {
        console.log('Lobby created:', lobbyId);
        setMusaicKey(generatedMusaicKey);
        setLobbyOpen(true);
      })
      .catch((error) => {
        console.error('Error creating lobby:', error);
      });
  };
  
  const copyToClipboard = () => {
    navigator.clipboard.writeText(musaicKey)
      .then(() => {
        console.log('Musaic Key copied to clipboard:', musaicKey);
      })
      .catch((error) => {
        console.error('Error copying Musaic Key to clipboard:', error);
      });
  };
  
  const joinLobby = (musaicKey) => {
    const db = getDatabase();
    const lobbiesRef = ref(db, 'lobbies');
  
    const onValueCallback = onValue(lobbiesRef, (snapshot) => {
      const lobbies = snapshot.val();
      const foundLobby = Object.values(lobbies).find((lobby) => lobby.musaicKey === musaicKey);
  
      if (foundLobby) {
        const lobbyRef = ref(db, `lobbies/${foundLobby.id}`);
        const userRef = ref(lobbyRef, `users/${user.user_id}`);
  
        if (!foundLobby.users[user.user_id]) {
          const userData = {
            id: user.user_id,
            ready: false,
            input: '',
          };
    
          set(userRef, userData)
            .then(() => {
              console.log('User joined lobby:', foundLobby.id);
              closeJoinMusaicDrawer();
              setLobbyOpen(true);
            })
            .catch((error) => {
              console.error('Error joining lobby:', error);
            });
        } else {
          console.log('User already in lobby:', foundLobby.id);
          closeJoinMusaicDrawer();
          setLobbyOpen(true);
        }
      } else {
        console.error('Invalid Musaic Key:', musaicKey);
      }
  
      // Remove the listener once we got the value
      console.log('Join lobby called with Musaic Key:', musaicKey);
      off(lobbiesRef, 'value', onValueCallback);
    });
  };
  
  

  const handleCreatePlaylist = async (playlistName, filteredTracks, description) => {
    const accessToken = sessionStorage.getItem('spotify_access_token');
    if (filteredTracks.length > 0) {
      const selectedTracks = filteredTracks;
      const finalPlaylistName = playlistName;
      const userId = user.user_id;
      const finalDescription = description

      try {
        const response = await fetch('/api/create_playlist', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ token: accessToken, name: finalPlaylistName, tracks: selectedTracks, user_id: userId, description: finalDescription }),
        });

        if (response.ok) {
          const data = await response.json();
          const externalUrl = data.external_url;
          const createdPlaylist = data.playlist;

          // Add the created playlist to the user's playlists in session storage
          const currentUserData = JSON.parse(sessionStorage.getItem('user_data'));
          currentUserData.playlists.push(createdPlaylist);
          sessionStorage.setItem('user_data', JSON.stringify(currentUserData));

          // Update user state to trigger a re-render of the sidebar
          setSelectedPlaylist(createdPlaylist)
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


  return {
    anchorLobby,
    setAnchorLobby,
    searchTerm,
    setSearchTerm,
    handleSearchChange,
    createLobby,
    joinLobby,
    handleCreatePlaylist,
    copyToClipboard,
    musaicKey,
    setMusaicKey
  };
};

export default useDashboard;