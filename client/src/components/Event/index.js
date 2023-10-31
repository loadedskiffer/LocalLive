import React, { useEffect, useState } from "react";
import "./style.scss";
import PropTypes from "prop-types";
/*
const Event = ({ eventDetails }) => {
    return (
        <div>
            //Display Event Details 
            <h3>{eventDetails.name}</h3>
            <p>{eventDetails.date}</p>
            <p>{eventDetails.venue}</p>
        </div>
    );
}

export default Event;
*/

export default function Event({
    data: {
      name="none",
      posts,
      isOnline = false,
      bio = "",
      location = "",
      technologies = [],
      creationDate,
      onViewChange,
    },
  }) {
    const [isBioVisible, setIsBioVisible] = useState(true);
  
    const handleBioVisibility = () => {
      setIsBioVisible(!isBioVisible);
      if (typeof onViewChange === "function") {
        onViewChange(!isBioVisible);
      }
    };
  
    return (
      <div className="ProfileCard">
        <div className="avatar">
          <h2>View Event</h2>
          
        </div>
        <div className={`details`}>
          <>
            <h3>{name}</h3>
            <h3>Artist</h3>
            <p>Date</p>
            <p>Time</p>
            <p>Address</p>
            <p>RSVP</p>            
          </>
        </div>
      </div>
    );
  }

  Event.propTypes = {
    data: PropTypes.shape({
      name: PropTypes.string.isRequired,
      posts: PropTypes.number.isRequired,
      isOnline: PropTypes.bool,
      bio: PropTypes.string,
      location: PropTypes.string,
      technologies: PropTypes.arrayOf(PropTypes.string),
      creationDate: PropTypes.string.isRequired,
      onViewChange: PropTypes.func,
    }).isRequired,
  };