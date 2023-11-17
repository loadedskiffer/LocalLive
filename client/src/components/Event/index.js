import React, { useState } from 'react';
import './style.scss';
import PropTypes from 'prop-types';
import Profile from '../Profile/index.js';

const Event = ({ event, onVenueClick, closeModal }) => {
  const [showVenueDetail, setShowVenueDetail] = useState(false);
  const [venueData, setVenueData] = useState(null);

  const handleVenueClick = () => {
    if (onVenueClick) {
      onVenueClick(event.venueName);
    }
    setShowVenueDetail(true);
    fetchVenueDetails(); // Fetch venue details when venue is clicked
  };

  const fetchVenueDetails = async () => {
    try {
      const response = await fetch(`http://localhost:5000/venue/${event.venueName}`);
      if (response.ok) {
        const data = await response.json();
        const venueDetails = {
          ...data,
          parking_and_admission_info: event.parking_and_admission_info,
        };
        setVenueData(venueDetails); // Update venue data state with fetched details including parking info
      } else {
        console.error('Venue information not found in the database');
        setVenueData(null); // Set venue data state to null indicating information not found
      }
    } catch (error) {
      console.error('Error fetching venue details:', error);
    }
  };
  const handleBackToEvent = () => {
    setShowVenueDetail(false);
  };

  return (
    <div className="modal-overlay">
      <div className="EventModal" style={{ width: '80vw', height: '80vh' }}>
        {!showVenueDetail ? (
          <>
            <h2 style={clickableStyle} onClick={handleVenueClick}>
              {event.venueName}
            </h2>
            <div>
              <h3>Artist: {event.artistName}</h3>
              <p>Date: {new Date(event.date).toDateString()}</p>
              <p>Time: {event.duration}</p>
              <p>Note: {event.parking_and_admission_info}</p>
            </div>
            <button onClick={handleVenueClick}>Check Out Venue</button>
            <button onClick={closeModal}>Close</button>
          </>
        ) : (
          <>
            {venueData ? (
              <Profile venueName={event.venueName} venueData={venueData} closeModal={handleBackToEvent} />
            ) : (
              <div className="venue-info-not-found">
                <h2>Venue information not found. Please check back later.</h2>
                <button onClick={closeModal}>Close</button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

Event.propTypes = {
  event: PropTypes.shape({
    venueName: PropTypes.string,
    artistName: PropTypes.string,
    date: PropTypes.string,
    duration: PropTypes.string,
    parking_and_admission_info:PropTypes.string,
  }).isRequired,
  onVenueClick: PropTypes.func,
  closeModal: PropTypes.func.isRequired,
};

const clickableStyle = {
  cursor: 'pointer',
};

export default Event;
