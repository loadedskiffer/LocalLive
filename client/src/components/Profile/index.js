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

export default function Profile({
    data: {
      name="none",
      bio = "",
      location = "",
      openHour="",
      menu="",
      review="",
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
          {/*<i className="photo" />*/}
          <h2>{name}</h2>
          
        </div>
        <div className={`details `}>
            <>
              <h2>Follow</h2>
              <div>
                <p>Location: {location}</p>
                <p>Open Hour: {openHour}</p>
                <p>See Our Menu{menu}</p>
                <p>See Our Review{review}</p>
              </div>
              <div>
                <p>{bio !== "" ? bio : "No description provided yet"}</p>
              </div>
              
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