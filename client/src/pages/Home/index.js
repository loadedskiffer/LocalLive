import React from 'react';
import Map from '../../components/Map/index.js';
import MyList from '../../components/List/index.js';
const Home = () => {
    return (
        <div>
            <h1>Welcome to LocalLive</h1>
            <Map />
            {/* More content like top events, etc. can be added here */}
            <MyList />
            
        </div>
    );
}

export default Home;
