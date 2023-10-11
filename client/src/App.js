import React from 'react';
import Home from './pages/Home';
import VenueProfile from './pages/VenueProfile';

function App() {
    return (
        <div className="App">
            {/* Sample Navigation */}
            <a href="/">Home</a> | <a href="/venue">Venue Profile</a>
            
            {/* Based on routing, display pages. 
                 For now, just showing Home and VenueProfile as an example.
                 You'd ideally use react-router-dom for actual navigation. */}
            <Home />
            {/* <VenueProfile /> */}
        </div>
    );
}

export default App;
