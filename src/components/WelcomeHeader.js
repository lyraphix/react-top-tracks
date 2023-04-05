import React from 'react';

const WelcomeHeader = ({ username }) => {
  return <h2>Welcome, {String(username)}!</h2>;
};

export default WelcomeHeader;
