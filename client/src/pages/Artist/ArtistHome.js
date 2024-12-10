import React from 'react';
import { Link } from 'react-router-dom';
import bannerImage from '../../Pictures/concert1.jpg';
import '../../css/ArtistHome.css';

const ArtistHome = () => {
  return (
    <div>
      {/* Banner Section */}
      <div className="banner" style={{ backgroundImage: `url(${bannerImage})` }}>
                <h1 className="banner-text">Welcome to Artist Home</h1>
            </div>

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
