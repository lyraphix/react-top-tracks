import React, { useState } from "react";
import styles from "./_scrolltracklist.module.css";

const TrackList = ({ items, onSelection = () => {} }) => {
  console.log('onSelection:', onSelection);

  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (item) => {
    // console.log('handleItemClick:', item);
    if (onSelection) {
      onSelection(item);
      setSelectedItem(item);
    }
  };

  const handlePlaylistClick = (playlist) => {
    // console.log('handlePlaylistClick:', playlist);
    window.open(playlist.url, "_blank");
  };

  const handleTrackClick = (track) => {
    // console.log('handleTrackClick:', track);
    window.open(track.url, "_blank");
  };

  const handleMouseEnter = (item) => {
  //   console.log('handleMouseEnter item:', item);
    setSelectedItem(item);
  };
  
  const handleMouseLeave = () => {
    // console.log('handleMouseLeave');
    setSelectedItem(null);
  };
  


  const renderItem = (item) => (
    <div
      key={item.id}
      className={`${styles.each} ${
        selectedItem && selectedItem.id === item.id && styles.selected
      }`}
      onClick={() => handleItemClick(item)}
      onMouseEnter={() => handleMouseEnter(item)}
      onMouseLeave={() => handleMouseLeave()}
    >
      <img
        className={styles.image}
        src={item.avatar}
        alt={item.name}
      />
      <div className={styles.text}>
        <h3
          className={styles.nametext}
          onClick={() => window.open(item.url, "_blank")}
        >
          {item.name}
        </h3>
        <h3 className={styles.authortext}>- {item.author}</h3>
      </div>
    </div>
  );
  
  return (
    <div className={styles.mainbox}>
      <ul>
        {items.map((item) => renderItem(item))}
      </ul>
    </div>
  );
  
};

export default TrackList;
