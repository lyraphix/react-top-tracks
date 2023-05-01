import * as React from "react";
import { useState, useEffect } from 'react';
import styles from '@/styles/Home.module.css';
import {
  Drawer,
  Menu,
  MenuItem,
  TextField,
} from "@mui/material";
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
import Poster from "@/components/_poster";

export default function VibePicker({ handleCreatePlaylist, closeAllDrawers }) {

  const {
    phase,
    userTopData,
    filteredTracks,
    fetchRecommendedTracks,
    publicRatio,
    setPublicRatio,
    limit,
    setLimit,
  } = useVibePicker(); 

  const [limitedTracks, setLimitedTracks] = useState([]);

  const [trackDisplayList, setTrackDisplayList] = useState([]);


  const [userInput, setUserInput] = useState("");
  const [playlistName, setPlaylistName] = useState(userInput);
  const [anchorPoster, setAnchorPoster] = useState(null);



  useEffect(() => {
    const updatedTrackDisplayList = formatTracks(limitedTracks);
    setTrackDisplayList(updatedTrackDisplayList);
  }, [publicRatio, limitedTracks, limit]);
  
  const handlePublicRatioSliderChange = (event, newValue) => {
    setPublicRatio(newValue);
  };

  const handleLimitSliderChange = (event, newValue) => {
    setLimit(newValue);
  };

  const handleCreatePlaylistClick = () => {
    handleCreatePlaylist(playlistName, limitedTracks, userInput);
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

 
  const openPoster = (event) => {
    setAnchorPoster(event.currentTarget);
  };

  const closePoster = () => {
    setAnchorPoster(null);
  };


  useEffect(() => {
    setLimitedTracks(filteredTracks.slice(0, limit));
  }, [filteredTracks, limit]);
  
  const trackDisplayDictionary = trackDisplayList;


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
                <h3 className={styles.slidertext}>Building your Musaic...</h3>
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
                <div style={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <label className={styles.slidertext}>User Influence</label>
                    <Slider
                      value={publicRatio}
                      min={0}
                      max={100}
                      step={1}
                      onChange={handlePublicRatioSliderChange}
                      valueLabelDisplay="auto"
                      style={{ width: "200px", marginBottom: "20px" }}
                    />
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <label className={styles.slidertext}># of tracks</label>
                    <Slider
                      value={limit}
                      min={5}
                      max={Math.min(filteredTracks.length, 60)}  // Use the length of the filteredTracks array
                      step={1}
                      onChange={handleLimitSliderChange}
                      valueLabelDisplay="auto"
                      style={{ width: "200px", marginBottom: "20px" }}
                    />
                  </div>
                </div>
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
 
              </>
            )}
          </div>
        }/>
      }
      />
      <Drawer
          anchor="left"
          open={Boolean(anchorPoster)}
          sx={{ backgroundColor: "background" }}
        >
          <Poster items={userTopData} pass={closePoster}/>
        </Drawer>
    </div>
  );
}
