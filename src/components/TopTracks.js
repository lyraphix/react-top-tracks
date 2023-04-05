import React from 'react';

const TopTracks = ({ topTracks, numSongs }) => (
  <ol>
    {topTracks.slice(0, numSongs).map((track) => (
      <li key={track.id}>
        {track.name} by {track.artist[0]}
      </li>
    ))}
  </ol>
);

export default TopTracks;
