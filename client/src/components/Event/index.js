import React, { useState } from "react";
import "./style.scss";
import PropTypes from "prop-types";
import Profile from "../Profile/index.js";
const Event = ({ event, onVenueClick, closeModal }) => {
  const [showVenueDetail, setShowVenueDetail] = useState(false);
  const sampleVenueData = {
    name: "Sample Venue",
    location: "Sample Location",
    openHour: "Sample Open Hour",
    menu: "Sample Menu",
    review: "Sample Review",
  };

  const handleVenueClick = () => {
    if (onVenueClick) {
      onVenueClick(event.venue);
    }
    setShowVenueDetail(true);
  };

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

const clickableStyle = {
  cursor: "pointer",
  // backgroundColor: '#e0e0e0', // Change this color to the desired hover color
};

export default Event;
