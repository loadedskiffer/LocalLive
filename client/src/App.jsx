// Importing required modules and components
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Login from './components/Login';
import AudienceSignup from './components/Signup/Audience/AudienceSignup';
import VendorSignup from './components/Signup/Vendor/VendorSignup';
import Signup from './components/Signup/Signup.jsx';
import VenueProfile from './pages/VenueProfile';
import EventProfile from './pages/EventProfile';
import './App.css';

// Main App component that serves as the entry point for the application

function App() {
    return (
                // Using React Router for navigation
        <Router>
            <div className="App">
                {/* Navbar */}
                <div className="navbar">
                    <h2>Local Live</h2>
                    <nav>
                        <Link to="/">Home</Link>
                        <Link to="/venue">Venue Profile</Link>
                        <Link to="/event">Event Profile</Link>
                        <Link to="/login">Login</Link>
                        <Link to="/signup">Signup</Link>
                    </nav>
                </div>
                
                    // Defining the main routes for the application
                {/* Routes */}
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/venue" element={<VenueProfile />} />
                    <Route path="/event" element={<EventProfile />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/signup/audience" element={<AudienceSignup />} />
                    <Route path="/signup/vendor" element={<VendorSignup />} />
                </Routes>
            </div>
        </Router>
    );
}
// Exporting the App component to be used elsewhere in the application

export default App;
