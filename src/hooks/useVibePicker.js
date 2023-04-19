import { useState, useEffect, useCallback } from 'react';

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
};

const useVibePicker = () => {
  const [phase, setPhase] = useState('input');
  const [publicRatio, setPublicRatio] = useState(50); // Percentage of public tracks
  const [limit, setLimit] = useState(20); // The number of tracks to display in the filtered list

  const [publicTracks, setPublicTracks] = useState([]);
  const [userTracks, setUserTracks] = useState([]);
  const [processingTracks, setProcessingTracks] = useState([]);
  const [filteredTracks, setFilteredTracks] = useState([]);
  const [filterTrigger, setFilterTrigger] = useState(0);

  useEffect(() => {
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
  }, [filterTrigger, publicRatio, limit, publicTracks, userTracks]);
  
  const applyFilter = () => {
    setFilterTrigger((prev) => prev + 1);
  };

  useEffect(() => {
    if (phase === 'processing') {
      const shuffleInterval = setInterval(() => {
        // Shuffle both lists
        shuffleArray(publicTracks);
        shuffleArray(userTracks);

        // Apply the filter to update filteredTracks
        applyFilter();
      }, 3000);

      return () => clearInterval(shuffleInterval);
    }
  }, [phase, publicTracks, userTracks, applyFilter]);

  const fetchRecommendedTracks = async (userInput) => {
    try {
      const userData = JSON.parse(sessionStorage.getItem('user_data'));
      const accessToken = sessionStorage.getItem('spotify_access_token');
      const { top_artists: artists } = userData;
  
      const requestBody = {
        input: userInput,
        artist_ids: artists,
      };
  
      // Fetch GPT artists
      const gptResponse = await fetch('/api/get_GPT_artists', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });
  
      if (!gptResponse.ok) {
        throw new Error(`Error fetching GPT artists: ${gptResponse.status} ${gptResponse.statusText}`);
      }
  
      const gptData = await gptResponse.json();
      const { public_artists, user_artists } = gptData;
  
      setPhase('processing');
  
      // Function to fetch tracks in batches
      const fetchTracks = async (artists, isPublic) => {
        let tracks = [];
  
        for (const artist of artists) {
          if (tracks.length >= 30) {
            break;
          }
  
          const requestBody = {
            token: accessToken,
            artist: artist,
          };
  
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
          const fetchedTracks = data.tracks;
  
          if (fetchedTracks && fetchedTracks.length > 0) {
            const tracksToAdd = fetchedTracks.slice(0, 30 - tracks.length);
            tracks = [...tracks, ...tracksToAdd];

            // Update publicTracks or userTracks
            if (isPublic) {
              setPublicTracks((prevState) => [...prevState, ...tracksToAdd]);
            } else {
              setUserTracks((prevState) => [...prevState, ...tracksToAdd]);
            }

            // Update processingTracks immediately
            setProcessingTracks((prevState) => [...prevState, ...tracksToAdd]);
          }
        }

        return tracks;
      };
  
      // Fetch tracks from public_artists and user_artists
      const publicTracks = await fetchTracks(public_artists, true);
      const userTracks = await fetchTracks(user_artists, false);
  
      setPublicTracks(publicTracks);
      setUserTracks(userTracks);
  
      setPhase('playlist');
      setProcessingTracks([]);
  } catch (error) {
    console.error('Error fetching recommended tracks:', error.message);
  }
};
  
  
  // Other functions to handle playlist customization

  return {
    phase,
    processingTracks,
    filteredTracks,
    fetchRecommendedTracks,
    applyFilter,
    publicRatio,
    setPublicRatio,
    limit,
    setLimit,
  };
};

export default useVibePicker;