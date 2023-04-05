import React from 'react';
import styles from './PlaylistDisplay.module.css';

const PlaylistDisplay = ({ playlist, onClick }) => {
  const defaultImageURL = '/dashboard/default_playlist_image.png';
  const imageURL = playlist && playlist.images && playlist.images.length > 0
    ? playlist.images[0].url
    : defaultImageURL;

  return (
    <div className={styles.playlistDisplay} onClick={onClick}>
      <img className={styles.playlistImage} src={imageURL} alt={`${playlist.name} playlist cover`} />
      <div className={styles.playlistInfo}>
        <div className={styles.playlistName}>{playlist.name}</div>
        <div className={styles.playlistTracks}>{playlist.tracks.total} tracks</div>
      </div>
    </div>
  );
};

export default PlaylistDisplay;
