import React, { useState } from 'react';
import styles from './Dashboard2.module.css';
import DisplayBox1 from '../DisplayBox/DisplayBox1';
import PlaylistDisplay from '../Playlist/PlaylistDisplay';
import PlaylistTrackDisplayer from '../Playlist/PlaylistTrackDisplayer';
import Sidebar from '../Sidebar/Sidebar';
import CreatePlaylistForm from '../Playlist/CreatePlaylistForm';
import UserGreeting from '../UserGreeting';

import {
  Button,
  Drawer,
} from "@mui/material";

export default function Dashboard2({
  user,
  setUser,
  accessToken,
  topTracks,
  numSongs,
  playlistName,
  playlistNameInput,
  setPlaylistName,
  onToggleTracks,
  showTracksIndex,
  handleDeletePlaylists,
  handleCreatePlaylist,
  handleNumSongsChange,
  handleShuffle,
  handleLogout,
  creatingPlaylist,
  setCreatingPlaylist
}) {
  const [showCreatePlaylistForm, setShowCreatePlaylistForm] = useState(false);

  const [selectedPlaylist, setSelectedPlaylist] = useState(null);

  const untitledArtwork = "/landing/logo.png";
  const home = "/dashboard/home.png";
  const friend = "/dashboard/friend.png";
  const vibepicker = "/dashboard/vibepicker.png";
  const vector = "/dashboard/vector.png";
  const avatar = "/dashboard/Avatar.png";

  const handleCreatePlaylistClick = () => {
    setCreatingPlaylist(!creatingPlaylist);
  };

  const handlePlaylistClick = (playlist) => {
    setSelectedPlaylist(playlist);
  };

  const handleCreatePlaylistFormClose = () => {
    setShowCreatePlaylistForm(false);
  };


  const [anchorLobby, setLobby] = useState(null);
  const openLobby = (event) => {
    setLobby(event.currentTarget);
  };
  const closeLobby = () => {
    setLobby(null);
  };

  const deleteuser = () => {
    console.log("add these later")
  };

  return (
    <div className={styles.all}>
      <div className={styles.dashboard}>
        <Sidebar
          onOpenCreatePlaylistForm={handleCreatePlaylistClick}
          handleCreatePlaylist={handleCreatePlaylist}
          untitledArtwork={untitledArtwork} 
          home={home} 
          avatar={avatar}
        />
        <div className={styles.content}>
          <UserGreeting user={user} />
          <div className={styles.innerbox}>
            {!creatingPlaylist && (
              <DisplayBox1
                image={friend}
                iconStyle={styles.icon}
                title="Your Musaic Playlists"
              >
                <div className={styles.innerfilebox}>
                  {user.playlists.map((playlist) => (
                    <div key={playlist._id} className={styles.playlistDisplay}>
                      <PlaylistDisplay
                        playlist={playlist}
                        onClick={() => handlePlaylistClick(playlist)}
                      />
                    </div>
                  ))}
                </div>
              </DisplayBox1>
            )}
          </div>
          <div className={styles.innerbox2}>
            {!creatingPlaylist && (
              <DisplayBox1
                image={vibepicker}
                iconStyle={styles.icon}
                title={selectedPlaylist?.name || "Select a playlist"}
              >
                <PlaylistTrackDisplayer playlist={selectedPlaylist} />
              </DisplayBox1>
            )}
          </div>
        </div>
        {creatingPlaylist && (
          <CreatePlaylistForm
            topTracks={topTracks}
            numSongs={numSongs}
            playlistName={playlistName}
            playlistNameInput={playlistNameInput}
            setPlaylistName={setPlaylistName}
            handleNumSongsChange={handleNumSongsChange}
            handleShuffle={handleShuffle}
            handleCreatePlaylist={() => {
              handleCreatePlaylist();
              handleCreatePlaylistFormClose();
            }}
            creatingPlaylist = {creatingPlaylist}
            setCreatingPlaylist = {setCreatingPlaylist}
          />
        )}
      </div>
    </div>
  );  
};
