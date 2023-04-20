import * as React from "react";
import styles from '@/styles/Home.module.css';
import {
  TextField,
} from "@mui/material";
import { useState } from 'react';
import Banner from "@/components/active/_bannerandsub";
import MainBox from "@/components/active/_mainbox";
import GPTinput from "@/components/GPTinput";
import TrackList from "@/components/active/_scrolltracklistlong";
import Slider from "@mui/material/Slider";
import MainButton from "@/components/active/_generalbutton";
import useVibePicker from "@/hooks/useVibePicker";
import Spinner from "@/components/_loadingscreen";
import Center from "@/components/active/_center";
import { formatTracks } from "./dashboard";

export default function VibePicker({ handleCreatePlaylist, closeAllDrawers }) {

  const {
    phase,
    filteredTracks,
    fetchRecommendedTracks,
    publicRatio,
    setPublicRatio,
    limit,
    setLimit,
  } = useVibePicker(); 

  const [userInput, setUserInput] = useState("");
  const [playlistName, setPlaylistName] = useState(userInput);

  const handlePublicRatioSliderChange = (event, newValue) => {
    setPublicRatio(newValue);
  };

  const handleLimitSliderChange = (event, newValue) => {
    setLimit(newValue);
  };

  const handleCreatePlaylistClick = () => {
    handleCreatePlaylist(playlistName, filteredTracks);
    closeAllDrawers();
  };

  const handlePlaylistNameChange = (event) => {
    setPlaylistName(event.target.value);
  };

  const handleInputChange = (event) => {
    setUserInput(event.target.value);
  };

  const handleReadyClick = () => {
    setPlaylistName(userInput);
    fetchRecommendedTracks(userInput);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleReadyClick();
    }
  };

  const trackDisplayDictionary = formatTracks(filteredTracks);

  return (
    <div className={styles.all} style={{ backgroundColor: "#282634", overflow:"hidden", height:"100vh" }}>
      <MainBox
        object1={
          <Banner
            main="VIBE PICKER"
            sub="CREATE YOUR MUSIC:"
            more="TRY IT TODAY"
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
                userInput={userInput}
                handleInputChange={handleInputChange}
                handleSubmit={handleReadyClick}
                handleKeyPress={handleKeyPress}
              />
            )}
            {phase === 'processing' && (
              <>
                <h3>Building your Musaic...</h3>
                <Spinner/>
              </>
            )}
            {phase === 'playlist' && (
              <>
                <TextField
                  label="Playlist Name"
                  defaultValue={playlistName}
                  onChange={handlePlaylistNameChange}
                  style={{ marginBottom: "1rem" }}
                />
                <Slider
                  value={publicRatio}
                  min={0}
                  max={100}
                  step={1}
                  onChange={handlePublicRatioSliderChange}
                  valueLabelDisplay="auto"
                  style={{ width: "200px", marginBottom: "20px" }}
                />
                <Slider
                  value={limit}
                  min={1}
                  max={filteredTracks.length} // Use the length of the filteredTracks array
                  step={1}
                  onChange={handleLimitSliderChange}
                  valueLabelDisplay="auto"
                  style={{ width: "200px", marginBottom: "20px" }}
                />
                <TrackList items={trackDisplayDictionary} />
                <div style={{height:"30px"}}></div>
                <MainButton
                  loc={() => handleCreatePlaylistClick()}
                  height="60px" width="100px"
                  name='Create Playlist'
                >
                  Create Playlist
                </MainButton>
                <div style={{height:"20px"}}></div>
                <MainButton
                  loc={() => handleCreatePlaylistClick()}
                  height="60px" width="100px"
                  name = 'Get Poster'
                >
                  Get Poster
                </MainButton>
              </>
            )}
          </div>
        }/>
      }
      />
    </div>
  );
}
