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


  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
      setAnchorEl(null);
  };
  const [anchorEl, setAnchorEl] = React.useState(null);

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
                <MenuaItems source={untitledArtwork} />
                <MenuaItems source={home}/>

                <div>
                    <img onClick={openPlaylist} className={styles.untitledartworkdash3} src={avatar} />
                    <Menua function={closePlaylist} anchor={anchorEl} />
                </div>

            </div>
            <div className={styles.dashboardbox} style = {{
                    paddingTop: "20vh",
                    paddingBottom: "10vh"
                }}>
                <div className={styles.innerbox}>
                <div className={styles.landingdash} style={{marginLeft: "3%"}}>Hi, Y/N</div>
                <div className={styles.innerbox} style = {{width:"80vw", flexDirection:"row", justifyContent:"space-between", marginLeft:"3%"}}>
                <div className={styles.landingdash} style={{ fontSize: "15px", letterSpacing: "5px", marginTop: "50px" }}>You have created {playlists ? playlists.length : 0} playlists</div>
                <MainButton name="Create playlist" loc={setPlaylist} height="50px" width="200px" />
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
                          <>
                            <div className={styles.tracks}>
                              <TrackList
                                items={formatPlaylists(playlists)}
                                onSelection={setCurrentPlaylist}
                              />
                            </div>

                            {selectedPlaylist && (
                              <TrackList
                                items={formatTracks(selectedPlaylist?.tracks || [])}
                              />
                            )}
                          </>
                        ) : (
                          <span className = { styles.friendmatch }> No playlists available, why don't you make your first! </span>
                        )}
                      </div>
                    } />
                </div>

            </div>

        </div>

        <Drawer anchor={"right"} open={Boolean(anchorPlaylist)} onClose={closePlaylist}>
          <Lobby
            handleCreatePlaylist={handleCreatePlaylist}
            onClose={closePlaylist}
          />
        </Drawer>

    </div>
)
)
}
export default Dashboard;