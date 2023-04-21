
import { useState, useEffect } from 'react';

const useVibePicker = () => {
  const [phase, setPhase] = useState('input');
  const [publicRatio, setPublicRatio] = useState(50);
  const [limit, setLimit] = useState(20);

  const [publicTracks, setPublicTracks] = useState([]);
  const [userTracks, setUserTracks] = useState([]);
  const [filteredTracks, setFilteredTracks] = useState([]);
  const [userTopData, setUserTopData] = useState([]);
  
  useEffect(() => {
    if (publicTracks.length > 0 && userTracks.length > 0) {
      const userTracksPercentage = publicRatio / 100;
      const publicTracksPercentage = 1 - userTracksPercentage;

      const maxPossibleUserTracks = Math.min(
        Math.round(publicTracks.length * userTracksPercentage / publicTracksPercentage),
        userTracks.length
      );
      const maxPossiblePublicTracks = Math.min(
        Math.round(userTracks.length * publicTracksPercentage / userTracksPercentage),
        publicTracks.length
      );

      const selectedUserTracks = userTracks.slice(0, maxPossibleUserTracks);
      const selectedPublicTracks = publicTracks.slice(0, maxPossiblePublicTracks);

      // Combine and shuffle the selected tracks
      const selectedTracks = shuffleArray([...selectedPublicTracks, ...selectedUserTracks]);
  
      setFilteredTracks(selectedTracks);
      setPhase("playlist");
    }
  }, [publicTracks, userTracks, publicRatio, limit]);
  
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const fetchRecommendedTracks = async (userInput) => {
    try {
      setPhase('processing');

      const userData = JSON.parse(sessionStorage.getItem('user_data'));
      const accessToken = sessionStorage.getItem('spotify_access_token');
      const { top_artists: artists } = userData;
      const { user_id : user_id } = userData;

      console.log('User data:', userData);
      console.log('Spotify access token:', accessToken);
  
  
      const requestBody = {
        input: userInput,
        artist_ids: artists,
        user_id: user_id
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
      console.log('GPT artists:', gptData);
      const { public_artists, user_artists } = gptData;
  
      console.log('1. Before filtering artists');
      // Filter out empty artist names
      const filteredPublicArtists = public_artists.filter(artist => artist !== '');
      const filteredUserArtists = user_artists.filter(artist => artist !== '');
  
      console.log('2. After filtering artists');

      const response2 = await fetch('/api/get_posters', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });

      console.log('response2:', response2);

      const data2 = await response2.json();
      console.log('data2:', data2);

  
      // Function to fetch tracks in batches
      const fetchTracks = async (artists, isPublic) => {
        console.log("1. beginning");
        let tracks = [];
      
        for (const artist of artists) {
          const requestBody = {
            token: accessToken,
            artist: artist,
          };

          const response = await fetch("/api/get_GPT_tracks", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(requestBody),
          });
      
          if (!response.ok) {
            throw new Error(`Error fetching recommended tracks: ${response.status} ${response.statusText}`);
          }
      
          const data = await response.json();
          const fetchedTracks = data.tracks;
      
          if (fetchedTracks && fetchedTracks.length > 0) {
            const tracksToAdd = fetchedTracks.slice(0, 60 - tracks.length);

            tracks = [...tracks, ...tracksToAdd];
          }
          else {
            console.log("fetchedTracks is not defined yet or has a length of 0")
          }
        }
        console.log("4. End of fetchTracks loop");


        console.log(isPublic)
        console.log(tracks)
        return tracks;
      };
      
  
      console.log('5. Before fetching tracks');
    
      const publicFetchedTracks = await fetchTracks(filteredPublicArtists, true);
      console.log('5.5, before fetching user tracks')
      const userFetchedTracks = await fetchTracks(filteredUserArtists, false);
      
      

      setPublicTracks(publicFetchedTracks);
      setUserTracks(userFetchedTracks);
      setUserTopData(data2);

    } catch (error) {
      console.error('Error fetching recommended tracks:', error.message);
    }
  };
  
  
  
  // Other functions to handle playlist customization

  return {
    phase,
    userTopData,
    filteredTracks,
    fetchRecommendedTracks,
    publicRatio,
    setPublicRatio,
    limit,
    setLimit,
  };
};

export default useVibePicker;
