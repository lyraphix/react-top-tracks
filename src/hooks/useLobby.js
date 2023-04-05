// src/hooks/useLobby.js
import { useState } from 'react';

const useLobby = () => {
  const [isReady, setIsReady] = useState(false);

  const handleReady = () => {
    setIsReady(true);
  };

  return [isReady, handleReady];
};

export default useLobby;
