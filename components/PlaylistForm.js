import React from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

const PlaylistForm = ({
  playlistName,
  setPlaylistName,
  handleCreatePlaylist,
  numSongs,
  handleNumSongsChange,
  playlistNameInput, // Add this line
}) => {
  return (
    <div>
      <input
        ref={playlistNameInput} // Add this line
        type="text"
        value={playlistName}
        onChange={(e) => setPlaylistName(e.target.value)}
        placeholder="Enter playlist name"
      />
      <button onClick={handleCreatePlaylist}>Create Playlist</button>
      <div className="CHANGE STYLE LATER" style={{ width: '20ch' }}>
        <Slider
          min={5}
          max={50}
          defaultValue={10}
          value={numSongs}
          onChange={handleNumSongsChange}
        />
        <div>{numSongs} in playlist (min 5)</div>
      </div>
    </div>
  );
};

export default PlaylistForm;
