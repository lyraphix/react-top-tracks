import { useState } from 'react';


const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
};

const useVibePicker = () => {
  const [playlist, setPlaylist] = useState(null);
  const [playlistName, setPlaylistName] = useState('');
  const [phase, setPhase] = useState('input');
  const [fetchedTracks, setFetchedTracks] = useState([]);
  const [filteredTracks, setFilteredTracks] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const applyFilter = (numTracks) => {
    shuffleArray(fetchedTracks);
    setFilteredTracks(fetchedTracks.slice(0, numTracks));
  };

  const fetchRecommendedTracks = async (userInput, page = 1) => {
    try {
      // Get the user's access token and top artists from session storage
      const userData = JSON.parse(sessionStorage.getItem('user_data'));
      console.log('User data from sessionStorage:', userData);

      const accessToken = sessionStorage.getItem('spotify_access_token');
      const { top_artists: artists } = userData;

      // Prepare the request body
      const requestBody = {
        token: accessToken,
        input: userInput,
        artist_ids: artists,
        page,  // Add this line
      };

      const response = await fetch('/api/get_GPT_tracks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });

      if (!response.ok) {
        throw new Error('Error fetching recommended tracks');
      }

      const data = await response.json();
      console.log(data);
      setFetchedTracks((prevTracks) => [...prevTracks, ...data.tracks]);
      setFilteredTracks((prevTracks) => [...prevTracks, ...data.tracks]);
  
      setPhase('playlist');
    } catch (error) {
      console.error(error);
    }
  };
  

  const fetchNextPage = async () => {
    const nextPage = currentPage + 1;
    await fetchRecommendedTracks('', nextPage);
    setCurrentPage(nextPage);
  };

  const fetchPreviousPage = async () => {
    if (currentPage > 1) {
      const previousPage = currentPage - 1;
      await fetchRecommendedTracks('', previousPage);
      setCurrentPage(previousPage);
    }
  };

  // Other functions to handle playlist customization

  return {
    phase,
    playlist,
    fetchedTracks,
    filteredTracks,
    fetchRecommendedTracks,
    applyFilter,
    fetchNextPage, 
    fetchPreviousPage,  
    currentPage,
    playlistName,
    setPlaylistName,
  };  
};

export default useVibePicker;
