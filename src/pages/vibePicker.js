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
import TrackList from "@/components/active/_scrolltracklist";

export default function VibePicker(props) {
  const textInput = useRef(null);
  const [userInput, setUserInput] = useState("");
  const { phase, playlist, fetchedTracks, filteredTracks, fetchRecommendedTracks, applyFilter } = useVibePicker();
  const [searchTerm, setSearchTerm] = useState('');

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorPlaylist, setPlaylist] = useState(null);

  const handleInputChange = (event) => {
    setUserInput(event.target.value);
  };

  const handleReadyClick = () => {
    fetchRecommendedTracks(userInput);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleReadyClick();
    }
  };

  const formatTracks = (tracks) => {
    return tracks.map((track, index) => ({
      id: index + 1,
      name: track.name,
      avatar: track.image_url,
      author: track.artistName,
    }));
  };

  const trackDisplayDictionary = formatTracks(filteredTracks);

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
                <TrackList friends={trackDisplayDictionary} searchTerm={searchTerm} />
              </>
            )}
          </div>
        }
      />
    </div>
  );
}
