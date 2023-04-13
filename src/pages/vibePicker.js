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
import Slider from "@mui/material/Slider";
import Button from "@mui/material/Button";
import Center from "@/components/active/_center";

export default function VibePicker({ user, setUser, pass, handleCreatePlaylist }) {
  const textInput = useRef(null);
  const [userInput, setUserInput] = useState("");
  const { phase, playlist, fetchedTracks, filteredTracks, fetchRecommendedTracks, applyFilter } = useVibePicker();
  const [searchTerm, setSearchTerm] = useState('');

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorPlaylist, setPlaylist] = useState(null);

  const [playlistName, setPlaylistName] = useState(userInput);
  const [numTracks, setNumTracks] = useState(20);

  const trackListStyle = {
    width: "50%",
    margin: "0 auto",
  };
  

  const handlePlaylistNameChange = (event) => {
    setPlaylistName(event.target.value);
  };

  const handleSliderChange = (event, newValue) => {
    setNumTracks(newValue);
    applyFilter(newValue);
  };

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
      author: track.artist,
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
            pass={pass}
          />
        }
        object2={
          <Center object = {
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
              <Center 
                object= {
                <TextField
                  label="Playlist Name"
                  value={playlistName}
                  onChange={handlePlaylistNameChange}
                  style={{ marginBottom: "1rem" }}
                />}
                object1={
                  <Slider
                  value={numTracks}
                  min={1}
                  max={fetchedTracks.length}
                  step={1}
                  onChange={handleSliderChange}
                  valueLabelDisplay="auto"
                  style={{ marginBottom: "1rem" }}
                />}
                object2={<TrackList friends={trackDisplayDictionary} searchTerm={searchTerm} style={trackListStyle} />}
                object3={                
                  <Button
                  variant="contained"
                  color="primary"
                  onClick={() => handleCreatePlaylist(playlistName, filteredTracks)}
                  style={{ marginTop: "1rem" }}
                >
                  Create Playlist
                </Button>}
              />
              </>
            )}
          </div>
          }/>
        }
      />
    </div>
  );
}
