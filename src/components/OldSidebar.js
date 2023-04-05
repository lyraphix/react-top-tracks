import { useEffect } from 'react';
import DeletePlaylist from './Playlist/DeletePlaylist';

const OldSidebar = ({
  friends,
  playlists,
  showTracksIndex,
  onToggleTracks,
  handleDeletePlaylists, // Receive the function as a prop
  accessToken,
  user,
  setUser,
}) => {

  useEffect(() => {
    const updateSidebarData = () => {
      const userData = JSON.parse(sessionStorage.getItem('user_data'));
    };

    const handleStorageChange = (e) => {
        if (e.key === 'user_data') {
          updateSidebarData();
        }
    };

    window.addEventListener('storage', handleStorageChange);

    updateSidebarData();
    
    // Remove event listener when no longer using sidebar.
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  return (
    <div className="sidebar">
      <h2>Your Musaic Playlists</h2>
      <DeletePlaylist
        playlists={playlists}
        accessToken={accessToken}
        user={user}
        setUser={setUser}
        handleDeletePlaylists={handleDeletePlaylists}
      />
      {playlists.map((playlist, index) => (
          <div key={playlist._id}>
              <button onClick={() => onToggleTracks(index)}>
                  {showTracksIndex === index ? 'Hide Tracks' : 'Show Tracks'}
              </button>
              
              <a href={playlist.url} target="_blank" rel="noopener noreferrer">
                  {playlist.name}
              </a>

              {showTracksIndex === index && (
              <ul>
                  {playlist.tracks.map((track) => (
                      <li key={track.id}>
                          {track.name} - {track.artist}
                      </li>
                  ))}
              </ul>
              )}
          </div>
          ))}
    
      <h2>Friends</h2>
      <ul>
        {friends.map((friend) => (
          <li key={friend.id}>{friend.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default OldSidebar;
