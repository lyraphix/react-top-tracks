import React from 'react';
import TrackDisplay from '../TrackDisplay';
import styles from './PlaylistTrackDisplayer.module.css';

const PlaylistTrackDisplayer = ({ playlist }) => {
  if (!playlist) {
    return <div className={styles.noPlaylistSelected}>No playlist selected</div>;
  }

  return (
    <div className={styles.halfsize}>
      <div className={styles.title}>
        <div className={styles.friendmatch}>Select a playlist</div>
      </div>
      <div className={styles.innerfilebox}>
        {playlist.tracks.map((track) => (
          <TrackDisplay key={track.id} track={track} />
        ))}
      </div>
    </div>
  );
};

export default PlaylistTrackDisplayer;
