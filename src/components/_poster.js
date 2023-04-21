import React, { useState } from "react";
import PropTypes from "prop-types";
import { Button, Link } from "@mui/material";
import styles from "@/components/_poster.module.css";
import MainBox from "@/components/active/_mainbox";
import MainButton from "./active/_generalbutton";
import Center from "./active/_center";

const Poster = ({ items, onSelection = () => { }, renderAdditionalButton, pass }) => {
  console.log('onSelection:', onSelection);

  const [selectedItem, setSelectedItem] = useState(null);
  const [isHovering, setIsHovering] = useState(false);

  const handleItemClick = (item) => {
    // console.log('handleItemClick:', item);
    if (onSelection) {
      onSelection(item);
      setSelectedItem(item);
    }
  };

  const handleMouseEnter = (item) => {
    // console.log('handleMouseEnter item:', item);
    setIsHovering(true);
    setSelectedItem(item);
  };

  const handleMouseLeave = () => {
    // console.log('handleMouseLeave');
    setIsHovering(false);
    setSelectedItem(null);
  };

  const renderItem = (item) => (
    <div
      key={item.id}
      className={`${styles.item} ${selectedItem && selectedItem.id === item.id && styles.selected
        }`}
      onClick={() => handleItemClick(item)}
      onMouseEnter={() => handleMouseEnter(item)}
      onMouseLeave={() => handleMouseLeave()}
    >
      <img className={styles.image} src={item.top_image} alt={item.top_musics} />
      <div className={styles.text}>
        <h3
          className={styles.nametext}
          onClick={() => window.open(item.top_image, "_blank")}
        >
          {isHovering ? item.top_musics : item.top_musics.slice(0, 40)}
        </h3>
        <h3 className={styles.authortext}>
          - {isHovering ? item.top_artists : item.top_artists.slice(0, 40)}
        </h3>
      </div>
      {renderAdditionalButton && renderAdditionalButton(item)}
    </div>
  );

  return (
    <MainBox object1={
      <>
        <div className={styles.mainbox2}>
          <h3 className={styles.maintext}>Daily Wraps!</h3>
          
        </div>

        <div className={styles.mainbox}>

          <div className={styles.indent}>
            <ul>
              {items.map((item) => renderItem(item))}
            </ul> 
            <Center object={<MainButton name='Go Back' loc={pass}/>} />
          </div>
        </div>
      </>
    } />

  );
};

export default Poster;
