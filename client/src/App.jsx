// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Login from './components/Login';
import AudienceSignup from './components/Signup/Audience/AudienceSignup';
import VendorSignup from './components/Signup/Vendor/VendorSignup';
import ArtistSignup from './components/Signup/Artist/ArtistSignup'; 
import Signup from './components/Signup/Signup';
import VenueProfile from './pages/VenueProfile';
import EventProfile from './pages/EventProfile';
import EventForm from './components/EventForm';
import './App.css';

function App() {
    return (
        <Router>
            <div className="App">
                <div className="navbar">
                    <h2>Local Live</h2>
                    <nav>
                        <Link to="/">Home</Link>
                        <Link to="/venue">Venue Profile</Link>
                        <Link to="/event">Create Event</Link>
                        <Link to="/login">Login</Link>
                        <Link to="/signup">Signup</Link>
                    </nav>
                </div>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/venue" element={<VenueProfile />} />
                    <Route path="/event" element={<EventForm />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/signup/audience" element={<AudienceSignup />} />
                    <Route path="/signup/vendor" element={<VendorSignup />} />
                    <Route path="/signup/artist" element={<ArtistSignup />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
