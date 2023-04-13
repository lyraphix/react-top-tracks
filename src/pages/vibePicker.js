import * as React from "react";
import styles from '@/styles/Home.module.css';
import {
  Drawer,
  Menu,
  MenuItem,
  TextField,
} from "@mui/material";
import { useState, useEffect, useRef } from 'react';
import Banner from "@/components/active/_bannerandsub";
import MainBox from "@/components/active/_mainbox";
import useVibePicker from "@/hooks/useVibePicker";
import GPTinput from "@/components/GPTinput";

export default function VibePicker(props) {
  const textInput = useRef(null);
  const [userInput, setUserInput] = useState("");
  const { phase, playlist, fetchRecommendedTracks } = useVibePicker();


  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorPlaylist, setPlaylist] = useState(null);

  const handleTextChange = (event) => {
    setUserInput(event.target.value);
  };

  const handleReadyClick = () => {
    fetchRecommendedTracks(userInput);
  };

  const handleInputChange = (event) => {
    setUserInput(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleReadyClick();
    }
  };

  return (
    <div className={styles.all} style={{ backgroundColor: "#282634" }}>
      <MainBox
        object1={
          <Banner
            main="VIBE PICKER"
            sub="CREATE YOUR MUSIC:"
            more="TRY IT TODAY"
            pass={props.pass}
          />
        }
        object2={
          <div
            className={styles.dashboardbox}
            style={{
              flexDirection: "column",
              marginTop: "30px",
              justifyContent: "flex-start",
            }}
          >
            {phase === 'input' && (
              <GPTinput
                
                textInput={textInput}
                userInput={userInput}
                handleInputChange={handleInputChange}
                handleSubmit={handleReadyClick}
                handleKeyPress={handleKeyPress}
              />
            )}
            {phase === 'playlist' && (
              <>
                {/* Render playlist tracks and customization UI here */}
              </>
            )}
          </div>
        }
      />
    </div>
  );
}
