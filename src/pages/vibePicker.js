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
import GPTinput from "@/components/GPTinput";
import TrackList from "@/components/active/_scrolltracklist";
import Slider from "@mui/material/Slider";
import Button from "@mui/material/Button";
import Center from "@/components/active/_center";
import MainButton from "@/components/active/_generalbutton";
import { formatTracks } from "@/pages/dashboard";
import useVibePicker from "@/hooks/useVibePicker";

export default function VibePicker({ pass, handleCreatePlaylist, closeAllDrawers }) {

  const {
    phase,
    processingTracks,
    fetchedTracks,
    filteredTracks,
    fetchRecommendedTracks,
    applyFilter,
    publicRatio,
    setPublicRatio,
    limit,
    setLimit,
  } = useVibePicker(); 


  const textInput = useRef(null);
  const [userInput, setUserInput] = useState("");

  const handlePublicRatioSliderChange = (event, newValue) => {
    setPublicRatio(newValue);
    applyFilter();
  };

  const handleLimitSliderChange = (event, newValue) => {
    setLimit(newValue);
    applyFilter();
  };

  const [searchTerm, setSearchTerm] = useState('');
  const [playlistName, setPlaylistName] = useState(userInput);

  const handleCreatePlaylistClick = () => {
    console.log('Playlist name:', playlistName); // Add log to check playlist name
    console.log('Filtered tracks:', filteredTracks); // Add log to check filtered tracks
    handleCreatePlaylist(playlistName, filteredTracks);
    closeAllDrawers();
  };

  const handlePlaylistNameChange = (event) => {
    setPlaylistName(event.target.value);
  };

  const handleSliderChange = (event, newValue) => {
    applyFilter(newValue);
  };

  const handleInputChange = (event) => {
    setUserInput(event.target.value);
  };

  const handleReadyClick = () => {
    console.log('User input:', userInput); // Add log to check user input
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
            {phase === 'processing' && (
              <>
                <h3>Building your Musaic...</h3>
                <TrackList items={formatTracks(fetchedTracks)} />
              </>
            )}
            {phase === 'playlist' && (
              <>
                <Center 
                  object= {
                  <TextField
                    label="Playlist Name"
                    defaultValue={playlistName}
                    onChange={handlePlaylistNameChange}
                    style={{ marginBottom: "1rem" }}
                  />}
                  object1={
                    <div>
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
                        max={filteredTracks} // Use the combined length of userTracks and publicTracks
                        step={1}
                        onChange={handleLimitSliderChange}
                        valueLabelDisplay="auto"
                        style={{ width: "200px", marginBottom: "20px" }}
                      />;
                    </div>}
                  object2={<TrackList items={trackDisplayDictionary} />}
                  object3={<div style={{height:"30px"}}></div>}
                  object4={                
                    <MainButton
                    loc={() => handleCreatePlaylistClick()}
                    height="60px" width="100px"
                    name='Create Playlist'
                    >
                      Create Playlist
                    </MainButton>}
                  object5={<div style={{height:"20px"}}></div>}
                  object6={                
                    <MainButton
                    loc={() => handleCreatePlaylistClick()}
                    height="60px" width="100px"
                    name = 'Get Poster'
                    >
                      Get Poster
                    </MainButton>}
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
