import React, { useState, useEffect } from 'react';

const DeletePlaylist = ({ playlists, accessToken, user, setUser, handleDeletePlaylists }) => {
  const [selectedPlaylists, setSelectedPlaylists] = useState([]);
  const [selectAll, setSelectAll] = useState(false);
  const [showDeleteComponent, setShowDeleteComponent] = useState(false);

  const handleCheckboxChange = (playlistId) => {
    if (selectedPlaylists.includes(playlistId)) {
      setSelectedPlaylists(selectedPlaylists.filter((id) => id !== playlistId));
    } else {
      setSelectedPlaylists([...selectedPlaylists, playlistId]);
    }
  };

  const toggleSelectAll = () => {
    if (selectAll) {
      setSelectedPlaylists([]);
    } else {
      setSelectedPlaylists(playlists.map((playlist) => playlist.id));
    }
    setSelectAll(!selectAll);
  };

  useEffect(() => {
    if (selectAll) {
      setSelectedPlaylists(playlists.map((playlist) => playlist.id));
    } else {
      setSelectedPlaylists([]);
    }
  }, [selectAll, playlists]);

  if (!showDeleteComponent) {
    return (
      <div>
        <button onClick={() => setShowDeleteComponent(true)}>Delete Playlists</button>
      </div>
    );
  } else {
    return (
      <div>
        <button onClick={() => setShowDeleteComponent(false)}>Close</button>
        <div> Select All </div>
        <input
          type="checkbox"
          checked={selectAll}
          onChange={toggleSelectAll}
        />
        <h3>Select Playlists to Delete</h3>
        {playlists.map((playlist) => (
          <div key={playlist.id}>
            <input
              type="checkbox"
              id={playlist.id}
              checked={selectedPlaylists.includes(playlist.id)}
              onChange={() => handleCheckboxChange(playlist.id)}
            />
            <label htmlFor={playlist.id}>{playlist.name}</label>
          </div>
        ))}
        <button onClick={() => {
          handleDeletePlaylists(selectedPlaylists, setSelectedPlaylists);
          setShowDeleteComponent(false);
        }}>Delete Selected Playlists</button>
      </div>
    );
  }
};

export default DeletePlaylist;
