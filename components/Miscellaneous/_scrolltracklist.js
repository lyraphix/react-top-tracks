import React from "react";
//import styles from "./TrackList.module.css";
//make individual CSS for each component..
import styles from '@/styles/Home.module.css'

const TrackList = ({ tracks }) => {
  return (
    <div className={styles.tracklist}>
      <ul className={styles.tracklist__list}>
        {tracks.map((track) => (
          <li key={track.id} className={styles.tracklist__item}>
            <div className={styles.tracklist__item_title}>{track}</div>
            <div className={styles.tracklist__item_artist}>{track.artist}</div>
            <div className={styles.tracklist__item_duration}>{track.duration}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TrackList;
