import React, { useState } from "react";
import "./style.scss";
import PropTypes from "prop-types";
import Profile from "../Profile/index.js";

// Event component to display event details and handle venue details

const Event = ({ event, onVenueClick, closeModal }) => {
  const [showVenueDetail, setShowVenueDetail] = useState(false);

    // Sample data for venue, replace with real data as needed

  const sampleVenueData = {
    name: "Sample Venue",
    location: "Sample Location",
    openHour: "Sample Open Hour",
    menu: "Sample Menu",
    review: "Sample Review",
  };
  // Function to handle venue click

  const handleVenueClick = () => {
    if (onVenueClick) {
      onVenueClick(event.venue);
    }
    setShowVenueDetail(true);
  };
  // Function to switch back to event details from venue details

  const handleBackToEvent = () => {
    setShowVenueDetail(false);
  };

  return (
    <div className="modal-overlay">
      <div className="EventModal" style={{ width: "80vw", height: "80vh" }}>
        {!showVenueDetail ? (
          <>
            <h2 style={clickableStyle} onClick={handleVenueClick}>
              {event.venue}
            </h2>
            <div>
              <h3>Artist: {event.artist}</h3>
              <p>Date: {event.date}</p>
              <p>Time: {event.time}</p>
              <p>Location: {event.address}</p>
              <p>RSVP</p>
            </div>
            <button onClick={handleVenueClick}>Check Out Venue</button>
            <button onClick={closeModal}>Close</button>
          </>
        ) : (
          <Profile
            venueName={event.venue}
            venueData={sampleVenueData}
            closeModal={handleBackToEvent}
          />
        )}
        {showVenueDetail && (
          <button className="back-to-event" onClick={handleBackToEvent}>
            Back to Event
          </button>
        )}
      </div>
    </div>
  );
};
// PropTypes for type checking

Event.propTypes = {
  event: PropTypes.shape({
    name: PropTypes.string,
    artist: PropTypes.string,
    date: PropTypes.string,
    time: PropTypes.string,
    address: PropTypes.string,
  }).isRequired,
  onVenueClick: PropTypes.func,
  closeModal: PropTypes.func.isRequired,
};
// Style for clickable elements

const clickableStyle = {
  cursor: "pointer",
  // backgroundColor: '#e0e0e0', 
};

export default Event;
