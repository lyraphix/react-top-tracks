import React, { useState, useEffect } from 'react';
import styles from '@/styles/Home.module.css'
import {
  Button,
  Drawer,
  Menu,
  MenuItem,
  TextField,
  Grid
} from "@mui/material";
import Lobby from "./lobby";
import Menua from "@/components/active/_avatarmenu";
import MainButton from "@/components/active/_generalbutton";
import MenuaItems from "@/components/index/_menuaitems";
import Center from "@/components/active/_center";
import TrackList from "@/components/active/_scrolltracklist";
import useDashboard from "@/hooks/useDashboard";




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

const Dashboard = ({ user, setUser }) => {

  const [loadingPlaylist, setLoadingPlaylist] = useState(false);

  const { playlists = [], image_url = "/landing/logo.png", username } = user || {};
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
  

  const handlePlaylistSelection = (playlist) => {
    setLoadingPlaylist(true);
    setSelectedPlaylist(playlist);
  };


  useEffect(() => {
    if (selectedPlaylist) {
      setLoadingPlaylist(false);
    }
  }, [selectedPlaylist]);

  const formatPlaylists = (playlists) => {
    console.log(playlists)
    return playlists.map((playlist) => ({
      id: playlist.id,
      name: playlist.name,
      author: "8-Bits", // SAMPLE
      avatar: playlist.image_url || "/landing/logo.png",
      url: playlist.url,
    }));
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
        <div className={styles.dashboard}>
            <div className={styles.menu}>
                <MenuaItems source={untitledArtwork} />
                <MenuaItems source={home}/>

                <div>
                    {/* This div needs debugging */}
                    <img onClick={handleClick} className={styles.untitledartworkdash3} src={avatar} />
                    <Menua function={handleClose} anchor={anchorEl} />
                </div>

            </div>
            <div className={styles.dashboardbox} style = {{
                    paddingTop: "20vh",
                    paddingBottom: "10vh"
                }}>
                <div className={styles.innerbox}>
                <div className={styles.landingdash} style={{marginLeft: "3%"}}>Hi, {name}</div>
                <div className={styles.innerbox} style = {{width:"80vw", flexDirection:"row", justifyContent:"space-between", marginLeft:"3%"}}>
                <div className={styles.landingdash} style={{ fontSize: "15px", letterSpacing: "5px", marginTop: "50px" }}>You have created {playlists ? playlists.length : 0} playlists</div>
                <MainButton name="Create playlist" loc={openLobby} height="50px" width="200px" />
                </div>
                    
                <div >
                    <input className={styles.search}
                        type="text"
                        placeholder="Search Tracks"
                        value={searchTerm}
                        onChange={handleSearchChange}
                    />
                </div>
                    
                <Center object={
                  <div className={styles.tracksContainer}>
                    {playlists && playlists.length > 0 ? (
                      <div className={styles.trackListsContainer}>
                        <Grid container spacing={2} className={styles.container}>
                          <Grid item xs={12} md={6}>
                            <div className={styles.tracks}>
                              <h3>Your Playlists:</h3>
                              <TrackList
                                items={formatPlaylists(playlists)}
                                onSelection={handlePlaylistSelection}
                              />
                            </div>
                          </Grid>
                          <Grid item xs={12} md={6}>
                            {loadingPlaylist ? (
                              <div>Loading...</div>
                            ) : selectedPlaylist ? (
                              <div className={styles.tracks}>
                                <h3>{selectedPlaylist.name}</h3>
                                <TrackList items={formatTracks(selectedPlaylist?.tracks || [])} />
                              </div>
                            ) : (
                              <span className={styles.friendmatch}>
                                Please select a playlist to view its tracks.
                              </span>
                            )}
                          </Grid>
                        </Grid>
                      </div>
                    ) : (
                      <span className={styles.friendmatch}>No playlists available, why don't you make your first!</span>
                    )}
                  </div>
                } />
                </div>

            </div>

        </div>
        <Drawer anchor={"right"} open={Boolean(anchorLobby)} onClose={closeLobby}>
          <Lobby
            handleCreatePlaylist={handleCreatePlaylist}
            pass={closeLobby}
          />
        </Drawer>
    </div>
)
)
}
export default Dashboard;
