// CreatePlaylistForm.js
import React from 'react';
import styles from './CreatePlaylistForm.module.css';
import Slider from '@mui/material/Slider';
import TrackDisplay from '../TrackDisplay';
import ShuffleButton from '../Buttons/ShuffleButton';
import Button from '@mui/material/Button';

const CreatePlaylistForm = ({
  topTracks,
  numSongs,
  playlistName,
  setPlaylistName,
  handleNumSongsChange,
  handleShuffle,
  handleCreatePlaylist,
}) => {
  const marks = [
    {
      value: 10,
      label: '10',
    },
    {
      value: 30,
      label: '30',
    },
    {
      value: 50,
      label: '50',
    },
  ];

  return (
    <div className={styles.createPlaylistForm}>
      <input
        type="text"
        value={playlistName}
        onChange={(e) => setPlaylistName(e.target.value)}
        placeholder="Enter playlist name"
        className={styles.playlistNameInput}
      />
      <div className={styles.sliderContainer}>
        <Slider
          value={numSongs}
          onChange={handleNumSongsChange}
          aria-labelledby="discrete-slider"
          valueLabelDisplay="auto"
          step={1}
          marks={marks}
          min={10}
          max={50}
        />
      </div>
      <div className={styles.tracksContainer}>
        {topTracks.slice(0, numSongs).map((track) => (
          <TrackDisplay key={track.id} track={track} />
        ))}
      </div>
      <ShuffleButton handleShuffle={handleShuffle} />
      <div className={styles.createPlaylistButtonContainer}>
        <Button
          variant="contained"
          onClick={() => {
            handleCreatePlaylist();
          }}
        >
          Create Playlist
        </Button>
      </div>
    </div>
  );
};

export default CreatePlaylistForm;
