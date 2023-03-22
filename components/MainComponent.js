import React from 'react';
import WelcomeHeader from './WelcomeHeader';
import Sidebar from './Sidebar';
import TopTracks from './TopTracks';
import LogoutButton from './LogoutButton';
import SignInComponent from './SignInComponent';
import PlaylistForm from './PlaylistForm';
import ShuffleButton from './ShuffleButton';

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
}) => {
  return (
    <div>
      {user ? (
        <>
          {user.username ? (
            <WelcomeHeader username={user.username} />
          ) : (
            <div>Alternate Text</div>
          )}
          <Sidebar
            friends={user.friends}
            playlists={user.playlists}
            onToggleTracks={onToggleTracks}
            showTracksIndex={showTracksIndex}
            handleDeletePlaylists={handleDeletePlaylists}
            accessToken={accessToken}
            user={user}
            setUser={setUser}
          />
          {topTracks ? (
            <div>
              <PlaylistForm
                playlistName={playlistName}
                playlistNameInput={playlistNameInput}
                setPlaylistName={setPlaylistName}
                handleCreatePlaylist={handleCreatePlaylist}
                numSongs={numSongs}
                handleNumSongsChange={handleNumSongsChange}
              />

              <ShuffleButton handleShuffle={handleShuffle} />
              <TopTracks topTracks={topTracks} numSongs={numSongs} />
            </div>
          ) : (
            <p>Loading your top tracks...</p>
          )}
          <LogoutButton onLogout={handleLogout} />
        </>
      ) : (
        <SignInComponent />
      )}
    </div>
  );
};

export default MainComponent;
