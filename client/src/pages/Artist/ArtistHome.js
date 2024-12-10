import React from 'react';
import { Link } from 'react-router-dom';

const ArtistHome = () => {
  return (
    <div>
      <h1>Artist Home</h1>
      {/* Use Link to navigate to the artist list page */}
      <Link to="/artist-list">
        <button>View Artist List</button>
      </Link>
    </div>
  );
};

export default ArtistHome;
