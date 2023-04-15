import { useState } from 'react';

const useDashboard = () => {
  const [anchorLobby, setAnchorLobby] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return {
    anchorLobby,
    setAnchorLobby,
    searchTerm,
    setSearchTerm,
    handleSearchChange,
  };
};

export default useDashboard;
