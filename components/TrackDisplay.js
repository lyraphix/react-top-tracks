import React from 'react';
import styles from './TrackDisplay.module.css';

const TrackDisplay = ({ track }) => {
  const defaultImageURL = '/dashboard/default_track_image.png'; // Replace with your default track image URL
  const imageURL = track && track.album && track.album.images && track.album.images.length > 0
    ? track.album.images[0].url
    : defaultImageURL;

  return (
    <div className={styles.trackDisplay}>
      <img className={styles.trackImage} src={imageURL} alt={`${track.name} album cover`} />
      <div className={styles.trackInfo}>
        <div className={styles.trackName}>{track.name}</div>
        <div className={styles.trackArtist}>{track.artist}</div>
      </div>
    </div>
  );
};


export default TrackDisplay;
