import React, { useState } from "react";
import styles from "./_scrolltracklist.module.css";

const TrackList = ({ playlists, tracks, searchTerm, onSelection }) => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (item) => {
    if (onSelection) {
      onSelection(item);
      setSelectedItem(item);
    }
  };

  const handlePlaylistClick = (playlist) => {
    window.open(playlist.url, "_blank");
  };

  const handleTrackClick = (track) => {
    window.open(track.url, "_blank");
  };

  const handleMouseEnter = (item) => {
    setSelectedItem(item);
  };

  const handleMouseLeave = () => {
    setSelectedItem(null);
  };

  const filteredPlaylists = playlists.filter((playlist) =>
    playlist.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredTracks = tracks.filter((track) =>
    track.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const renderPlaylist = (playlist) => (
    <div
      key={playlist.id}
      className={`${styles.each} ${
        selectedItem && selectedItem.id === playlist.id && styles.selected
      }`}
      onClick={() => handleItemClick(playlist)}
      onMouseEnter={() => handleMouseEnter(playlist)}
      onMouseLeave={() => handleMouseLeave()}
    >
      <img
        className={styles.image}
        src={playlist.avatar}
        alt={playlist.name}
      />
      <div className={styles.text}>
        <h3
          className={styles.nametext}
          onClick={() => handlePlaylistClick(playlist)}
        >
          {playlist.name}
        </h3>
        <h3 className={styles.authortext}>- {playlist.author}</h3>
      </div>
    </div>
  );

  const renderTrack = (track) => (
    <div
      key={track.id}
      className={`${styles.each} ${
        selectedItem && selectedItem.id === track.id && styles.selected
      }`}
      onClick={() => handleTrackClick(track)}
      onMouseEnter={() => handleMouseEnter(track)}
      onMouseLeave={() => handleMouseLeave()}
    >
      <img
        className={styles.image}
        src={track.avatar}
        alt={track.name}
      />
      <div className={styles.text}>
        <h3 className={styles.nametext}>{track.name}</h3>
        <h3 className={styles.authortext}>- {track.author}</h3>
      </div>
    </div>
  );

  return (
    <div className={styles.mainbox}>
      <ul>
        {filteredPlaylists.map((playlist) => renderPlaylist(playlist))}
        {filteredTracks.map((track) => renderTrack(track))}
      </ul>
    </div>
  );
};

export default TrackList;
