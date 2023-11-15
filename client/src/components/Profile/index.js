import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import EventList from '../../components/List/index.js';
//import "./style.scss";
const fetchVenueData = async (venueName) => {
  // Simulating fetching data from an API
  const response = await fetch(`https://api.example.com/venues/${venueName}`);
  const data = await response.json();
  return data;
};

const Profile = ({ venueData, closeModal }) => {
  //const [venueData, setVenueData] = useState(null);
  /** 
  if (!venueData) {
    return <div>Loading...</div>;
  }*/

  return (
    <div className="VenueDetailOverlay">
      <div className="VenueDetailModal">
      <span className="close" onClick={closeModal}>
          &times;
        </span>
        {/*<h3>Venue Detail: {venueData.name}</h3>*/}
        {venueData.name}
        <p>Location: {venueData.location}</p>
        <p>Open Hour: {venueData.openHour}</p>
        <p>See Our Menu{venueData.menu}</p>
        <p>See Our Review{venueData.review}</p>

        {/* 
        <div className="PageContainer">
          <div className="ProfileCard">
            <div className="avatar">
              <h2>{venueData.name}</h2>
            </div>
            <div className={`details`}>
              <>
                <h2>Follow</h2>
                <div>
                  <p>Location: {venueData.location}</p>
                  <p>Open Hour: {venueData.openHour}</p>
                  <p>See Our Menu{venueData.menu}</p>
                  <p>See Our Review{venueData.review}</p>
                </div>
                <div>
                  <p>{venueData.bio !== '' ? venueData.bio : 'No description provided yet'}</p>
                </div>
              </>
            </div>
          </div>
          {/** 
          <div className="event-list">
            <h2>Posted Events</h2>
            <EventList />
          </div>
        </div> 
      */}
      </div>
    </div>
  );
};

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  bio: PropTypes.string,
  location: PropTypes.string,
  openHour: PropTypes.string,
  menu: PropTypes.string,
  review: PropTypes.string,
  closeModal: PropTypes.func.isRequired,
};

export default Profile;
