import React, { useState } from "react";
import Map from '../../components/Map/map.js';
import EventList from '../../components/List/index.js';
import Event from '../../components/Event/index.js';
import './styles.css';

const Home = () => {
    const [showModal, setShowModal] = useState(false);
    const [selectedEvent, setSelectedEvent] = useState(null);
    const [selectedSection, setSelectedSection] = useState(null);

    const handleTitleClick = (section) => {
        setSelectedEvent(section.data[0]); 
        setSelectedSection(section.title);
        setShowModal(true);
    };

    const handleEventClick = (event) => {
        setSelectedEvent(event);
        setShowModal(true);
    };

    const handleVenueClick = (venue) => {
        console.log(`Venue clicked: ${venue}`);
        // Add logic to show the venue detail window
      };

    const closeModal = () => {
        setShowModal(false);
      };
    return (
        <div>
            <h1>Welcome to LocalLive</h1>
            <div className="page-container">
                <div className="map">
                    <Map />
                </div>
                {/* More content like top events, etc. can be added here */}
                <div className="event-list">
                    <EventList onTitleClick={handleTitleClick} onEventClick={handleEventClick} />
                    {showModal && <Event event={selectedEvent} section={selectedSection} closeModal={closeModal} />}
                    
                </div>
            </div>
        </div>
    );
}

export default Home;
