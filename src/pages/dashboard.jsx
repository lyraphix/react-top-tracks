import React, { useState, useEffect } from 'react';
import styles from '@/styles/Home.module.css'
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Drawer,
  Menu,
  MenuItem,
  TextField,
  Grid
} from "@mui/material";
import Lobby from "./lobby";
import VibePicker from "./vibePicker";
import Menua from "@/components/active/_avatarmenu";
import MainButton from "@/components/active/_generalbutton";
import MenuaItems from "@/components/index/_menuaitems";
import Center from "@/components/active/_center";
import TrackList from "@/components/active/_scrolltracklist";
import useDashboard from "@/hooks/useDashboard";
import CreateMusaicLobby from './CreateMusaicLobby';
import JoinMusaicLobby from './JoinMusaicLobby';

import { getDatabase, ref, set, push, child, update } from 'firebase/database';

export const formatTracks = (tracks) => {
  console.log(tracks)
  return tracks.map((track) => ({
    id: track.id,
    name: track.name,
    author: track.artist, 
    avatar: track.image_url, 
    url: track.url,
  }));
};

const Dashboard = ({navigateToSignIn, navigateToLanding, user, setUser }) => {

  const [musaicKey, setMusaicKey] = useState("");


  const [vibePickerOpen, setVibePickerOpen] = useState(false);

  const openVibePicker = () => {
    setVibePickerOpen(true);
  };
  
  const closeVibePicker = () => {
    setVibePickerOpen(false);
  };
  

  const [createMusaicDrawerOpen, setCreateMusaicDrawerOpen] = useState(false);
  const [joinMusaicDrawerOpen, setJoinMusaicDrawerOpen] = useState(false);
  const [lobbyIdInput, setLobbyIdInput] = useState('');

  const handleLobbyIdInputChange = (event) => {
    setLobbyIdInput(event.target.value);
  };

  const openCreateMusaicDrawer = () => {
    setCreateMusaicDrawerOpen(true);
  };

  const closeCreateMusaicDrawer = () => {
    setCreateMusaicDrawerOpen(false);
  };

  const openJoinMusaicDrawer = () => {
    setJoinMusaicDrawerOpen(true);
  };

  const closeJoinMusaicDrawer = () => {
    setJoinMusaicDrawerOpen(false);
  };

  const handleJoinLobbySubmit = () => {
    if (lobbyIdInput.trim() !== "") {
      joinLobby(lobbyIdInput.trim());
    } else {
      alert("Please enter a valid Musaic Key.");
    }
  };
  

  const [loadingPlaylist, setLoadingPlaylist] = useState(false);

  const { playlists = [], image_url = "/landing/logo.png", username } = user || {};
  console.log("Initial playlists: ", playlists)
  const [selectedPlaylist, setSelectedPlaylist] = useState(null);
  const {
    searchTerm,
    setSearchTerm,
    handleSearchChange,
    anchorLobby,
    setAnchorLobby,
  } = useDashboard();

  const avatar = user?.image_url || "/landing/logo.png";
  const name = user?.username;
  
  const untitledArtwork = "/landing/logo.png";
  const home = "/dashboard/home.png";
  const friend = "/dashboard/friend.png";
  const vibepicker = "/dashboard/vibepicker.png";
  const vector = "/dashboard/vector.png";
  
  const handleLanding = () => {
    navigateToLanding();
  };

  const handleLetsGo = () => {
        navigateToSignIn();
  };
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
      setAnchorEl(null);
  };
  const [anchorEl, setAnchorEl] = React.useState(null);

  const openLobby = (event) => {
    setAnchorLobby(event.currentTarget);
  };

  const closeLobby = () => {
    setAnchorLobby(null);
  };


  const createLobby = () => {
    const generatedMusaicKey = Math.random().toString(36).substr(2, 8).toUpperCase(); // Generates an 8-character alphanumeric Musaic Key
    setMusaicKey(generatedMusaicKey);
    
    const db = getDatabase();
    const newLobbyRef = push(child(ref(db), 'lobbies'));
    const lobbyId = newLobbyRef.key;
    const lobbyData = {
      id: lobbyId,
      musaicKey, // Save the Musaic Key in the lobby data
      users: {
        [user.user_id]: {
          id: user.user_id,
          ready: false,
          input: '',
        },
      },
    };
  
    set(newLobbyRef, lobbyData)
      .then(() => {
        console.log('Lobby created:', lobbyId);
        openCreateMusaicDrawer();
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
    const lobbiesRef = child(ref(db), 'lobbies');
  
    lobbiesRef.once('value', (snapshot) => {
      const lobbies = snapshot.val();
      const foundLobby = Object.values(lobbies).find((lobby) => lobby.musaicKey === musaicKey);
  
      if (foundLobby && !foundLobby.users[user.user_id]) {
        const lobbyRef = child(ref(db), `lobbies/${foundLobby.id}`);
        const userRef = child(lobbyRef, `users/${user.user_id}`);
        const userData = {
          id: user.user_id,
          ready: false,
          input: '',
        };
  
        set(userRef, userData)
          .then(() => {
            console.log('User joined lobby:', foundLobby.id);
            closeJoinMusaicDrawer();
            openLobby(); // Opens the lobby drawer
          })
          .catch((error) => {
            console.error('Error joining lobby:', error);
          });
      } else {
        console.error('Invalid Musaic Key:', musaicKey);
      }
    });
  };
  
  

  const handlePlaylistSelection = (playlist) => {
    console.log("Setting selected playlist:", playlist);
    setLoadingPlaylist(true);
    setSelectedPlaylist(playlist);
  };
  

  useEffect(() => {
    if (typeof window !== "undefined") {
      console.log(
        "User data from session storage:",
        JSON.parse(sessionStorage.getItem("user_data"))
      );
    }
  }, []);


  useEffect(() => {
    console.log("Selected playlist changed:", selectedPlaylist);
  }, [selectedPlaylist]);

  useEffect(() => {
    if (selectedPlaylist) {
      setLoadingPlaylist(false);
    }
  }, [selectedPlaylist]);

  const formatPlaylists = (playlists) => {
    console.log(playlists)
    return playlists.map((playlist) => ({
      ...playlist, 
      id: playlist.id,
      name: playlist.name,
      author: "8-Bits", // SAMPLE
      avatar: playlist.image_url || "/landing/logo.png",
      url: playlist.url,
    }));
  };
  
  const handleCreatePlaylistAndClose = async (playlistName, filteredTracks) => {
    await handleCreatePlaylist(playlistName, filteredTracks);
    closeCreateMusaicDrawer();
  };
  

  const handleCreatePlaylist = async (playlistName, filteredTracks) => {
    const accessToken = sessionStorage.getItem('spotify_access_token');
    if (filteredTracks.length > 0) {
      const selectedTracks = filteredTracks;
      const finalPlaylistName = playlistName;
      const userId = user.user_id;

      try {
        const response = await fetch('/api/create_playlist', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ token: accessToken, name: finalPlaylistName, tracks: selectedTracks, user_id: userId }),
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

  return (
    user && (
      <div className={styles.all}>
        <div className={styles.dashboard} >
          <div className={styles.menu}>
            {/* <MenuaItems source={untitledArtwork} />
            <MenuaItems source={home} /> */}
              <Button href="/"><img style = {{height: "40px", width: "45px", alignSelf:"center", marginLeft:"10px", marginTop:"10px"}} src={untitledArtwork} /></Button>
            <div>
              {/* This div needs debugging */}
              <img onClick={handleClick} className={styles.untitledartworkdash3} src={avatar} />
              <Menua function={handleClose} anchor={anchorEl} logout={handleLanding} />
            </div>
          </div>
          <div
            className={styles.dashboardbox}
            style={{
              paddingTop: "60px",
              // paddingBottom: "10vh",
            }}
          >
              <div
                className={styles.innerbox}
                style={{
                  width: "80vw",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginLeft: "3%",
                  marginBottom: "50px",
                }}
              >
                <div>
                  <div className={styles.landingdash} style={{ lineHeight:"50px" }}>
                    Hi, {name}
                  </div>
                  <div
                    className={styles.landingdash}
                    style={{
                      fontSize: "15px",
                      letterSpacing: "5px",
                      marginTop: "50px",
                      lineHeight:"20px"
                    }}
                  >
                    
                    You have created {playlists ? playlists.length : 0} playlists
                  </div>
                </div>
                <div>
                  <MainButton mrr="10px" loc={openCreateMusaicDrawer} name='Create a Musaic'/>
                  <MainButton loc={openJoinMusaicDrawer} name='Join a Musaic'/>
                </div>
              </div>
  
               <Center object={
               <div>
                  <input
                    className={styles.search}
                    type="text"
                    placeholder="Search Tracks"
                    value={searchTerm}
                    onChange={handleSearchChange}
                  />
                </div>}/>
              <div className={styles.tracksContainer}>
               {playlists && playlists.length > 0 ? (
                  <div style={{flexDirection:"row", display:"flex", justifyContent:"center"}}>
                    <div className={styles.trackList}>
                      <h3 style = {{fontWeight:"100", fontFamily:"Inter, sans-serif", letterSpacing:"1px", color:"#ced3fa",fontSize: "15px" }}>Your Playlists:</h3>
                      <TrackList
                        items={formatPlaylists(playlists)}
                        onSelection={handlePlaylistSelection}
                      />
                    </div>
                    <div className={styles.trackList}>
                      {loadingPlaylist ? (
                        <div>Loading...</div>
                      ) : selectedPlaylist ? (
                        <>
                          <h3 style = {{fontWeight:"100", fontFamily:"Inter, sans-serif", letterSpacing:"1px", color:"#ced3fa", fontSize: "15px"}}>{selectedPlaylist.name}</h3>
                          {(() => {
                            const items = formatTracks(selectedPlaylist?.tracks || []);
                            console.log("Rendering Selected Playlist TrackList with items:", items);
                            return <TrackList items={items} />;
                          })()}
                        </>
                      ) : (
                        <div style={{ width: "100%" }}>
                          <span className={styles.friendmatch}>
                            Please select a playlist to view its tracks.
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                ) : (
                  <span className={styles.friendmatch}>
                    No playlists available, why don't you make your first!
                  </span>
                )}
              </div>
          </div>
        </div>
        <Drawer anchor={"right"} open={Boolean(anchorLobby)} onClose={closeLobby}>
          <Lobby
            handleCreatePlaylist={handleCreatePlaylist}
            closeLobby={closeLobby}
          />
        </Drawer>
        <Drawer
          anchor="left"
          open={createMusaicDrawerOpen}
          onClose={closeCreateMusaicDrawer}
          sx={{ backgroundColor: "background" }}
        >
          <CreateMusaicLobby createLobby={createLobby} openVibePicker={openVibePicker} closeLobby={closeCreateMusaicDrawer} musaicKey={musaicKey} copyToClipboard={copyToClipboard} />
        </Drawer>
        <Drawer
          anchor="left"
          open={joinMusaicDrawerOpen}
          onClose={closeJoinMusaicDrawer}
          sx={{ backgroundColor: "background" }}
        >
          <JoinMusaicLobby closeLobby={closeJoinMusaicDrawer} />
        </Drawer>
        <Drawer
          anchor="left"
          open={vibePickerOpen}
          onClose={closeVibePicker}
          sx={{ backgroundColor: "background" }}
        >
          <VibePicker
            handleCreatePlaylist={handleCreatePlaylistAndClose} // This functionality should def be moved to closeALlDrawers but I'm a bad programmer send me to hell
            pass={closeVibePicker}
            closeAllDrawers={closeVibePicker}
          />
        </Drawer>
      </div>
    )
  );
};

export default Dashboard;
