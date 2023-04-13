import { useState } from 'react';

const useDashboard = () => {
  const [selectedPlaylist, setSelectedPlaylist] = useState(null);
  const [anchorPlaylist, setPlaylist] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const formatPlaylists = (playlists) => {
    return playlists.map((playlist, index) => ({
      id: index + 1,
      name: playlist.name,
      avatar: playlist.image_url || "/landing/logo.png",
      author: userData.username,
    }));
  };

  const formatTracks = (tracks) => {
    return tracks.map((track, index) => ({
      id: index + 1,
      name: track.name,
      avatar: track.image_url || "/landing/logo.png",
      author: track.artist,
    }));
  };

  const handleCreatePlaylist = async (playlistName, fetchedTracks, numTracks) => {
    try {
      const userData = JSON.parse(sessionStorage.getItem("user_data"));
      const accessToken = sessionStorage.getItem("spotify_access_token");

      const requestBody = {
        token: accessToken,
        name: playlistName,
        tracks: fetchedTracks,
        numSongs: numTracks,
        user_id: userData.user_id,
      };

      const response = await fetch("/api/create_playlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      });

      if (!response.ok) {
        throw new Error("Error creating playlist");
      }

      const data = await response.json();
      const createdPlaylist = data.playlist;
      userData.playlists.push(createdPlaylist);
      sessionStorage.setItem("user_data", JSON.stringify(userData));
      setUser(userData);

      setSelectedPlaylist(createdPlaylist);

      const formattedTracks = formatTracks(createdPlaylist.tracks);
    } catch (error) {
      console.error(error);
    }
  };

  return {
    selectedPlaylist,
    setSelectedPlaylist,
    anchorPlaylist,
    setPlaylist,
    searchTerm,
    setSearchTerm,
    handleSearchChange,
    formatPlaylists,
    formatTracks,
    handleCreatePlaylist,
  };
};

export default useDashboard;
