import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

const Profile = ({ venueName, closeModal }) => {
  const [selectedVenueDetails, setSelectedVenueDetails] = useState(null);
  //console.log("the selected venue in Profile is "+ venueName);
  useEffect(() => {
    const fetchVenueDetails = async () => {
      if (venueName) { // Check if venueName and its name property exist
        try {
          const response = await axios.get(`http://localhost:5000/venue/search/${encodeURIComponent(venueName)}`);
          if (response.status === 200) {
            setSelectedVenueDetails(response.data);
          } else {
            console.error('Failed to fetch venue details');
          }
        } catch (error) {
          console.error('Error fetching venue details:', error);
        }
      }
    };
  
    fetchVenueDetails();
  }, [venueName]);

  return (
    <div className="VenueDetailOverlay">
      <div className="VenueDetailModal">
        <span className="close" onClick={closeModal}>
          &times;
        </span>
        {selectedVenueDetails ? (
          <div>
            <h3>Venue Detail: {selectedVenueDetails.venue_name}</h3>
            <p>Location: {selectedVenueDetails.street_address}, {selectedVenueDetails.city}, {selectedVenueDetails.state}, {selectedVenueDetails.zipcode}</p>
            <p>Website: {selectedVenueDetails.venue_website}</p>
            <p>Hour: {selectedVenueDetails.hours}</p>
            <p>Phone: {selectedVenueDetails.phoneNumber}</p>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
      <div>
        <button onClick={closeModal}>Back</button>
      </div>
    </div>
  );
};

Profile.propTypes = {
  venueName: PropTypes.any.isRequired,
  closeModal: PropTypes.func.isRequired,
};

export default Profile;
