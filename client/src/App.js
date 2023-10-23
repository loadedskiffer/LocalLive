import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home/index.js';
import Login from './components/Login/index.js';
import Signup from './components/Signup/index.js';
import VenueProfile from './pages/VenueProfile/index.js';
import Event from './components/Event/index.js';
import './App.css';

function App() {
    return (
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

                {/* Routes */}
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/venue" element={<VenueProfile />} />
                    <Route path="/event" element={<Event />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
