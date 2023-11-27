import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

const Profile = ({ venueData, closeModal }) => {
  const [selectedVenueDetails, setSelectedVenueDetails] = useState(null);

  useEffect(() => {
    const fetchVenueDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/venue/search/${encodeURIComponent(venueData.name)}`);
        if (response.status === 200) {
          console.log("result:"+response.data);
          setSelectedVenueDetails(response.data);
        } else {
          console.error('Failed to fetch venue details');
        }
      } catch (error) {
        console.error('Error fetching venue details:', error);
      }
    };

    if (venueData) {
      fetchVenueDetails();
    }
  }, [venueData]);

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
            {/* Display other venue details */}
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

Profile.propTypes = {
  venueData: PropTypes.object.isRequired,
  closeModal: PropTypes.func.isRequired,
};

export default Profile;
