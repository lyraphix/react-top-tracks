import { useState } from 'react';

const useDashboard = () => {
  const [anchorPlaylist, setPlaylist] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return {
    anchorPlaylist,
    setPlaylist,
    searchTerm,
    setSearchTerm,
    handleSearchChange,
  };
};

export default useDashboard;
