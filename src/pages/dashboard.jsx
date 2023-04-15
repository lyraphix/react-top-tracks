import React, { useState, useEffect } from 'react';
import styles from '@/styles/Home.module.css'
import {
  Button,
  Drawer,
  Menu,
  MenuItem,
  TextField,
} from "@mui/material";
import Lobby from "./lobby";
import Menua from "@/components/active/_avatarmenu";
import MainButton from "@/components/active/_generalbutton";
import MenuaItems from "@/components/index/_menuaitems";
import Center from "@/components/active/_center";
import TrackList from "@/components/active/_scrolltracklist";
import useDashboard from "@/hooks/useDashboard";

export const formatTracks = (tracks) => {
  return tracks.map((track) => ({
    id: track.id,
    name: track.name,
    author: track.artist, 
    avatar: track.image_url, 
    url: track.url,
  }));
};

const Dashboard = ({ user, setUser }) => {

  const { playlists = [], image_url = "/landing/logo.png", username } = user || {};
  const [selectedPlaylist, setSelectedPlaylist] = useState(null);
  const [currentPlaylist, setCurrentPlaylist] = useState(null);
  const {
    anchorPlaylist,
    setPlaylist,
    searchTerm,
    setSearchTerm,
    handleSearchChange,
  } = useDashboard();

  const avatar = user?.image_url || "/landing/logo.png";
  const name = user?.username;
  
  const untitledArtwork = "/landing/logo.png";
  const home = "/dashboard/home.png";
  const friend = "/dashboard/friend.png";
  const vibepicker = "/dashboard/vibepicker.png";
  const vector = "/dashboard/vector.png";

  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
      setAnchorEl(null);
  };

  const openPlaylist = (event) => {
    setAnchorEl(event.currentTarget);
  };
  
  const closePlaylist = () => {
      setAnchorEl(null);
  };
  
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
    console.log("BYYO-1");
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
            {/* <MenuaItems source={untitledArtwork} /> */}
            <Button href="/"><img className={styles.signinlogo} src={untitledArtwork} style={{width:"30px", height:"30px"}}/></Button>
            {/* <MenuaItems source={home} /> */}
  
            <div>
              <img
                onClick={handleClick}
                className={styles.avatar}
                src={avatar}
                alt={name}
              />
              <h2 className={styles.name}>{name}</h2>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem>
              </Menu>
            </div>
  
            <MenuaItems source={friend} />
  
            <TextField
              className={styles.search}
              id="outlined-basic"
              label="Search"
              variant="outlined"
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </div>
  
          <div className={styles.content}>
            <Center>
              <img src={vibepicker} alt="vibepicker" />
              <h2>Playlists</h2>
            </Center>
  
            <div className={styles.tracks}>
              <TrackList
                friends={formatPlaylists(playlists)}
                onSelection={setCurrentPlaylist}
              />
            </div>
  
            <div className={styles.action}>
              <Drawer anchor={"right"} open={Boolean(anchorPlaylist)} onClose={closePlaylist}>
                <Lobby
                  defaultPlaylistName={"New Playlist"}
                  tracks={[]}
                  numSongs={5}
                  onCreate={handleCreatePlaylist}
                />
              </Drawer>
  
              {selectedPlaylist && (
                <TrackList
                  tracks={formatTracks(selectedPlaylist?.tracks || [])}
                  onEdit={(tracks) =>
                    handleUpdatePlaylist(
                      selectedPlaylist?.id,
                      selectedPlaylist?.name,
                      tracks
                    )
                  }
                  onTrackClick={(track) => window.open(track.url, "_blank")}
                />
              )}
              {/* <MainButton name="Create Playlist" loc={openPlaylist} /> */}
              <Button
                onClick={openPlaylist}
                variant="contained"
                color="primary"
                className={styles.button}
              >
                Create Playlist
              </Button>
            </div>
          </div>
        </div>
      </div>
    )
  );
}  

export default Dashboard;
