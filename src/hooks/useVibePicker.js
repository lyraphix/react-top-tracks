import { useState } from 'react';


const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
};

const useVibePicker = () => {
  const [playlistName, setPlaylistName] = useState('');
  const [phase, setPhase] = useState('input');
  const [publicRatio, setPublicRatio] = useState(50); // Percentage of public tracks
  const [limit, setLimit] = useState(20); // The number of tracks to display in the filtered list

  const [publicTracks, setPublicTracks] = useState([]);
  const [userTracks, setUserTracks] = useState([]);
  const [filteredTracks, setFilteredTracks] = useState([]);

  const applyFilter = () => {
    // Calculate the number of public and user tracks based on the ratio and limit
    const numPublicTracks = Math.round((publicRatio / 100) * limit);
    const numUserTracks = limit - numPublicTracks;

    // Shuffle both lists and slice the required number of tracks
    shuffleArray(publicTracks);
    shuffleArray(userTracks);
    const selectedPublicTracks = publicTracks.slice(0, numPublicTracks);
    const selectedUserTracks = userTracks.slice(0, numUserTracks);

    // Combine the selected tracks and shuffle the resulting list
    const combinedTracks = [...selectedPublicTracks, ...selectedUserTracks];
    shuffleArray(combinedTracks);
    setFilteredTracks(combinedTracks);
  };



  const fetchRecommendedTracks = async (userInput) => {
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
      };
      console.log('Request body:', requestBody);
      const response = await fetch('/api/get_GPT_tracks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });

      if (!response.ok) {
        throw new Error(`Error fetching recommended tracks: ${response.status} ${response.statusText}`);
      }


      const data = await response.json();
      console.log(data);
      setPublicTracks((prevTracks) => [...prevTracks, ...data.public_tracks]);
      setUserTracks((prevTracks) => [...prevTracks, ...data.user_tracks]);
    
      setPhase('playlist');
    } catch (error) {
      console.error(error);
    }
  };
  


  // Other functions to handle playlist customization

  return {
    phase,
    filteredTracks,
    fetchRecommendedTracks,
    applyFilter,
    playlistName,
    setPlaylistName,
    publicRatio,
    setPublicRatio,
    limit,
    setLimit,
  };  
};

export default useVibePicker;
