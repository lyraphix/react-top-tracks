import React, { useState, useEffect } from 'react';
import {
  Button,
  Drawer,
  Grid,
  Menu,
  MenuItem,
  Link,
  TextField,
} from '@mui/material';
import MenuaItems from "@/components/index/_menuaitems";
import Center from '@/components/active/_center';
import CreateMusaicLobby from './CreateMusaicLobby';
import JoinMusaicLobby from './JoinMusaicLobby';
import Lobby from './lobby';
import MainButton from '@/components/active/_generalbutton';
import Menua from '@/components/active/_avatarmenu';
import styles from '@/styles/Home.module.css';
import TrackList from '@/components/active/_scrolltracklist';
import VibePicker from './vibePicker';
import useDashboard from '@/hooks/useDashboard';
import { Checkbox } from "@mui/material";

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

const Dashboard = ({ navigateToSignIn, navigateToLanding, user, setUser }) => {


  const [vibePickerOpen, setVibePickerOpen] = useState(false);
  const [createMusaicDrawerOpen, setCreateMusaicDrawerOpen] = useState(false);
  const [joinMusaicDrawerOpen, setJoinMusaicDrawerOpen] = useState(false);
  const [lobbyIdInput, setLobbyIdInput] = useState('');
  const spotify_yt = "/signin/spotify_yt.png";
  const handleLobbyIdInputChange = (event) => {
    setLobbyIdInput(event.target.value);
  };

  const openVibePicker = () => {
    setVibePickerOpen(true);
  };

  const closeVibePicker = () => {
    setVibePickerOpen(false);
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
      // Replace alert() with Material-UI Snackbar
    }
  };


  const [loadingPlaylist, setLoadingPlaylist] = useState(false);
  const { playlists = [], image_url = "/landing/logo.png", username } = user || {};
  const [selectedPlaylist, setSelectedPlaylist] = useState(null);


  const {
    createLobby,
    joinLobby,
    handleCreatePlaylist,
    searchTerm,
    setSearchTerm,
    handleSearchChange,
    anchorLobby,
    setAnchorLobby,
    copyToClipboard,
    musaicKey,
    setMusaicKey
  } = useDashboard(user, setSelectedPlaylist, setUser, closeJoinMusaicDrawer);

  const avatar = user?.image_url || "/landing/logo.png";
  const name = user?.username || "Guest";

  
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

  const [lobbyOpen, setLobbyOpen] = useState(false);




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
      openInSpotify: playlist.spotify_url, // Add this line
    }));
  };
  
  
  const handleCreatePlaylistAndClose = async (playlistName, filteredTracks) => {
    await handleCreatePlaylist(playlistName, filteredTracks);
    closeCreateMusaicDrawer();
  };


  const renderDrawers = () => {
    return (
      <>
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
          <JoinMusaicLobby user={user} joinLobby={joinLobby} closeLobby={closeJoinMusaicDrawer} />
        </Drawer>
        <Drawer
          anchor="left"
          open={vibePickerOpen}
          onClose={closeVibePicker}
          sx={{ backgroundColor: "background" }}
        >
          <VibePicker
            handleCreatePlaylist={handleCreatePlaylistAndClose}
            pass={closeVibePicker}
            closeAllDrawers={closeVibePicker}
          />
        </Drawer>
      </>
    );
  };
  

  return (
    user && (
      <div className={styles.all}>
        <div className={styles.dashboard} >
          <div className={styles.menu}>
              <Button href="/"><img style = {{height: "40px", width: "45px", alignSelf:"center", marginLeft:"10px", marginTop:"10px"}} src={untitledArtwork} /></Button>
              <MenuaItems source={spotify_yt} />
            <div>
              <img onClick={handleClick} className={styles.untitledartworkdash3} src={avatar} />
              <Menua function={handleClose} anchor={anchorEl} logout={handleLanding} user={user}/>
            </div>
          </div>
          <div
            className={styles.dashboardbox}
            style={{
              paddingTop: "60px",
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
                  <div>
                  {playlists.length > 0 && (
                      <MainButton coloringg="red" mtt="10px" name='Delete Playlists'/>
                    )}
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
                      renderAdditionalButton={(item) => (
                        <Link href={item.url} target="_blank" rel="noopener noreferrer" underline="none">
                          <Button size="small" variant="contained">Open in Spotify</Button>
                        </Link>
                      )}
                      
                    />

                    </div>
                    <div className={styles.trackList}>
                      {loadingPlaylist ? (
                        <div></div>
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
        {renderDrawers()} 
      </div>
    )
  );
};

export default Dashboard;
