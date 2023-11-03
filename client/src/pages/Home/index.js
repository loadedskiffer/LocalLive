import React from 'react';
import Map from '../../components/Map/map.js';
import EventList from '../../components/List/index.js';
import './styles.css';
const Home = () => {
    return (
        <div>
            <h1>Welcome to LocalLive</h1>
            <div className="page-container">
                <div className="map">
                    <Map />
                </div>
                {/* More content like top events, etc. can be added here */}
                <div className="event-list">
                    <EventList />
                </div>
            </div>
        </div>
    );
}

export default Home;
