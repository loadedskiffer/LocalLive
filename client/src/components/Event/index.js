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
          <h2>{name}</h2>
          <i className="photo" />
          <span>{posts} posts</span>
        </div>
        <div className={`details ${isBioVisible ? "bio" : "technologies"}`}>
          {isBioVisible ? (
            <>
              <h3>Bio</h3>
              <p>{bio !== "" ? bio : "No bio provided yet"}</p>
              <div>
                <button onClick={handleBioVisibility}>View Skills</button>
                <p className="joined">Joined: {creationDate}</p>
              </div>
            </>
          ) : (
            <>
              <h3>Technologies</h3>
              {technologies.length > 0 && (
                <ul>
                  {technologies.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              )}
              <div>
                <button onClick={handleBioVisibility}>View Bio</button>
                {!!location && <p className="location">Location: {location}</p>}
              </div>
            </>
          )}
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