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
import EventForm from './components/EventForm';
import SearchPage from './components/SearchPage'; // Import the SearchPage component
import './App.css';
import ReviewsPage from './components/Review';

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
                        <Link to="/event">Create Event</Link>
                        <Link to="/login">Login</Link>
                        <Link to="/signup">Signup</Link>
                        <Link to="/review">Review</Link>
                        <Link to="/search">Search</Link> 
                    </nav>
                </div>
                
                {/* Defining the main routes for the application */} 
                {/* Routes */}
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/venue/:venueName" component={VenueProfile} />
                    <Route path="/event" element={<EventForm />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/review" element={<ReviewsPage />} />
                    <Route path="/signup" element={<Signup />}>
			          <Route path="audience" element={<AudienceSignup />} />
			          <Route path="vendor" element={<VendorSignup />} />
			        </Route>
			        <Route path="/event/:eventId" element={<EventProfile />} />
			        <Route path="/search" element={<SearchPage />} /> 
                </Routes>
            </div>
        </Router>
    );
}

// Exporting the App component to be used elsewhere in the application
export default App;
