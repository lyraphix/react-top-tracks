import React from 'react';

const Genres = ({ topGenres }) => (
<div>
    <h2>Top Genres</h2>
    <ul>
        {topGenres.map((genre) => (
        <li key={genre}>{genre}</li>
        ))}
    </ul>
</div>
  
);

export default Genres;