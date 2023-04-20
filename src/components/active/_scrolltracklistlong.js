import React, { useState } from "react";
import PropTypes from "prop-types";
import { Button, Link } from "@mui/material";
import styles from "./_scrolltracklistlong.module.css";
import EmptyListPlaceholder from "@/components/EmptyListPlaceholder"; // Import a component to display when the list is empty


const TrackList = ({ items, onSelection = () => {}, renderAdditionalButton }) => {
  if (!items || items.length === 0) {
    return <EmptyListPlaceholder />; // Render a placeholder component when the list is empty
  }
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (item) => {
    if (onSelection) {
      onSelection(item);
      setSelectedItem(item);
    }
  };

  const renderItem = (item) => (
    <div
      key={item.id}
      className={`${styles.item} ${
        selectedItem && selectedItem.id === item.id && styles.selected
      }`}
      onClick={() => handleItemClick(item)}
    >
      <img className={styles.image} src={item.avatar} alt={item.name} />
      <div className={styles.text}>
        <h3
          className={styles.nametext}
          onClick={() => window.open(item.url, "_blank")}
        >
          {item.name}
        </h3>
        <h3 className={styles.authortext}>- {item.author}</h3>
      </div>
      {renderAdditionalButton && renderAdditionalButton(item)}
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

TrackList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  onSelection: PropTypes.func,
  renderAdditionalButton: PropTypes.func,
};

TrackList.defaultProps = {
  onSelection: () => {},
  renderAdditionalButton: null,
};

export default TrackList;
