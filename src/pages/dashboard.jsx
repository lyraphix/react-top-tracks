import * as React from "react";
import styles from "@/styles/Home.module.css";
import {
  Button,
  Drawer,
  Menu,
  MenuItem,
  TextField,
} from "@mui/material";
import { useState, useEffect } from "react";
import Lobby from "./lobby";
import Menua from "@/components/active/_avatarmenu";
import MainButton from "@/components/active/_generalbutton";
import MenuaItems from "@/components/index/_menuaitems";
import Center from "@/components/active/_center";
import TrackList from "@/components/active/_scrolltracklist";
import useDashboard from "@/hooks/useDashboard";

const Dashboard = ({ user, setUser, onCreatePlaylist }) => {
  const [selectedPlaylist, setSelectedPlaylist] = useState(null);
  const [currentPlaylist, setCurrentPlaylist] = useState(null);
  const { playlists, createPlaylist, updatePlaylist } = useDashboard(user);

  //const avatar = user.image_url || "/landing/logo.png";
  //const name = user.username;
  const avatar ="/dashboard/Avatar.png";
  const name = "go";
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
 
  const [anchorPlaylist, setPlaylist] = useState(null);
  const openPlaylist = (event) => {
    setPlaylist(event.currentTarget);
  };
  const closePlaylist = () => {
    setPlaylist(null);
  };

  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleCreatePlaylist = async (playlistName, tracks, numSongs) => {
    try {
      const accessToken = sessionStorage.getItem("spotify_access_token");

      const requestBody = {
        token: accessToken,
        name: playlistName,
        tracks,
        numSongs,
        user_id: user.user_id,
      };

      const createdPlaylist = await createPlaylist(requestBody);
      setSelectedPlaylist(createdPlaylist);
    } catch (error) {
      console.error(error);
    }
  };

  const handleUpdatePlaylist = async (playlistId, playlistName, tracks) => {
    try {
      const accessToken = sessionStorage.getItem("spotify_access_token");

      const requestBody = {
        token: accessToken,
        name: playlistName,
        tracks,
        user_id: user.user_id,
      };

      const updatedPlaylist = await updatePlaylist(playlistId, requestBody);
      setSelectedPlaylist(updatedPlaylist);
    } catch (error) {
      console.error(error);
    }
  };

  const formatPlaylists = (playlists) => {
    return playlists.map((playlist, index) => ({
      id: index + 1,
      name: playlist.name,
      avatar: playlist.image_url || "/landing/logo.png",
      author: user.username,
    }));
  };

  const formatTracks = (tracks) => {
    return tracks.map((track, index) => ({
      id: index + 1,
      name: track.name,
      avatar: track.image_url || "/landing/logo.png",
      author: track.artist,
    }));
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