import React from 'react';
import { Link } from 'react-router-dom';

const ArtistHome = () => {
  return (
    <div>
      <h1>Artist Home</h1>

      {/* View Artist List Button */}
      <Link to="/artist-list">
        <button>View Artist List</button>
      </Link>

      {/* Create Event Button */}
      <Link to="/venue/create-event">
        <button>Create New Event</button>
      </Link>
    </div>
  );
};

export default ArtistHome;
