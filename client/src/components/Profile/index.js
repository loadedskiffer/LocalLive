import React, { useEffect, useState } from "react";
import "./style.scss";
import PropTypes from "prop-types";
import EventList from '../../components/List/index.js';

/*
Profile: Show venue information including name, location, open hour, menue, review */
export default function Profile({
    data: {
      name="none",
      bio = "",
      location = "",
      openHour="",
      menu="",
      review="",
    },
  }) {
  
    return (
      <div className="PageContainer">
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
        <div className="event-list">
            <h2>Posted Events</h2>
            <EventList />
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