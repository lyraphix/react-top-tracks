// MainComponent.js

import React, { useState } from 'react';
import SignInComponent from '../SignIn/SignInComponent';
import Landing from '../Landing/Landing';
import Dashboard from '../Dashboard/Dashboard';
import Dashboard2 from '../Dashboard/Dashboard2';

const MainComponent = ({
  user,
  setUser,
  accessToken,
  topTracks,
  numSongs,
  playlistName,
  playlistNameInput,
  setPlaylistName,
  onToggleTracks,
  showTracksIndex,
  handleDeletePlaylists,
  handleCreatePlaylist,
  handleNumSongsChange,
  handleShuffle,
  handleLogout,
  creatingPlaylist,
  setCreatingPlaylist
}) => {
  const [showSignIn, setShowSignIn] = useState(false);

  const handleLetsGoClick = () => {
    setShowSignIn(true);
  };

  return (
    <div>
      {accessToken || showSignIn ? (
        user ? (
          <Dashboard2
            user={user}
            setUser={setUser}
            accessToken={accessToken}
            topTracks={topTracks}
            numSongs={numSongs}
            playlistName={playlistName}
            playlistNameInput={playlistNameInput}
            setPlaylistName={setPlaylistName}
            onToggleTracks={onToggleTracks}
            showTracksIndex={showTracksIndex}
            handleDeletePlaylists={handleDeletePlaylists}
            handleCreatePlaylist={handleCreatePlaylist}
            handleNumSongsChange={handleNumSongsChange}
            handleShuffle={handleShuffle}
            handleLogout={handleLogout}
            creatingPlaylist={creatingPlaylist}
            setCreatingPlaylist={setCreatingPlaylist}
          />
        ) : (
          <SignInComponent />
        )
      ) : (
        <Landing setUser={setUser} setShowSignIn={handleLetsGoClick} />
      )}
    </div>
  );
};

export default MainComponent;
