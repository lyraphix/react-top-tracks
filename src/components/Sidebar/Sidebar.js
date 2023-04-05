// Sidebar.js

import React from 'react';
import styles from './Sidebar.module.css';
import Drawer from '@mui/material/Drawer';

const Sidebar = ({ onOpenCreatePlaylistForm, handleCreatePlaylist, untitledArtwork, home, avatar }) => {
  return (
    <Drawer variant="permanent" anchor="left">
      <div className={styles.sidebar}>
        <img className={styles.untitledartworkdash1} src={untitledArtwork} />
        <img className={styles.untitledartworkdash2} src={home} />
        <img className={styles.untitledartworkdash3} src={avatar} />
        <button
          className={styles.createPlaylistButton}
          onClick={() => {
            onOpenCreatePlaylistForm();
            handleCreatePlaylist();
          }}
        >
          Create Playlist
        </button>
      </div>
    </Drawer>
  );
};

export default Sidebar;
