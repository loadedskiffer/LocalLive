import React, { useState, useEffect } from 'react';
import { Button, Spinner } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import EventContainer from "../../components/EventContainer";
import '../../css/ArtistEvents.css';
import { useGetEventsMutation } from '../../slices/usersApiSlice';
import { useSelector } from 'react-redux';
import bannerImage from '../../Pictures/concert1.jpg';

const ArtistEvents = () => {
  const [allEvents, setAllEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [getEvents] = useGetEventsMutation();

  const { userInfo } = useSelector((state) => state.auth); // Access artist info from Redux
  const artistId = userInfo._id; // The artist's ID to filter their events

  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await getEvents().unwrap();
      setAllEvents(res);
      setError(null); // Reset error on success
    } catch (err) {
      console.error('Failed to fetch events:', err);
      setError('Failed to load events. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [getEvents]);

  // Filter events based on artistId
  const artistEvents = allEvents.filter(event => event.artist === artistId);

  return (
    <div>
      {/* Banner Section */}
      <div className="banner" style={{ backgroundImage: `url(${bannerImage})` }}>
        <h1 className="banner-text">Your Events</h1>
      </div>

      {/* Button to Create New Event */}
      <LinkContainer to="/venue/create-event">
        <Button className="create-event-btn">
          Create New Event
        </Button>
      </LinkContainer>

      {/* Event Wrapper */}
      <div className="eventWrapper">
        {/* Artist's Events */}
        <div className="left-container">
          <div className="header-container">
            <h2>Your Upcoming Events</h2>
          </div>

          {loading ? (
            <div className="spinner-container">
              <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            </div>
          ) : error ? (
            <div>
              <p>{error}</p>
              <Button onClick={fetchData} variant="danger">Retry</Button>
            </div>
          ) : (
            <EventContainer events={artistEvents} />
          )}
        </div>
      </div>
    </div>
  );
};

export default ArtistEvents;
