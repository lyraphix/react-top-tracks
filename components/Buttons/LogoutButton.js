import React from 'react';

const LogoutButton = ({ onLogout }) => {
  const handleLogout = () => {
    sessionStorage.removeItem('spotify_access_token');
    sessionStorage.removeItem('user_data');
    onLogout();
  };

  return <button onClick={handleLogout}>Logout</button>;
};

export default LogoutButton;
