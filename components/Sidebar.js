import React from 'react';

const Sidebar = ({ friends, playlists }) => {
  return (
    <div className="sidebar">
      <h2>Friends</h2>
      <ul>
        {friends.map((friend) => (
          <li key={friend.user_id}>{friend.username}</li>
        ))}
      </ul>
      <h2>Playlists</h2>
      <ul>
        {playlists.map((playlist) => (
          <li key={playlist.id}>{playlist.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
