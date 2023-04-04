import React from 'react';
import playlistSelectorStyles from './PlaylistSelector.module.css';
import TrackDisplay from '../TrackDisplay';
import PlaylistDisplay from './PlaylistDisplay';

const PlaylistSelector = ({
  playlists,
  accessToken,
  user,
  handleDeletePlaylists,
  selectedPlaylist,
  setSelectedPlaylist,
  handlePlaylistClick,
}) => {
  return (
    <div className={playlistSelectorStyles.halfsize}>
      <div className={playlistSelectorStyles.title}>
        <div className={playlistSelectorStyles.friendmatch}>SELECT PLAYLIST</div>
      </div>
      <div className={playlistSelectorStyles.innerfilebox}>
        {playlists.map((playlist, index) => (
          <div key={playlist._id}>
            <PlaylistDisplay playlist={playlist} onClick={handlePlaylistClick} />
            {selectedPlaylist && selectedPlaylist._id === playlist._id && (
              <ul className={playlistSelectorStyles.trackList}>
                {playlist.tracks.map((track) => (
                  <TrackDisplay key={track.id} track={track} />
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlaylistSelector;
