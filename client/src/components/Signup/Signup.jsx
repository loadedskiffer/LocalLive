import React from 'react';
import './Signup.css';
import { Link } from 'react-router-dom'; 

function Signup() {
    return (
        <div className="signup-selection-container">
            <h2>Join Local Live</h2>
            <p>Choose your role and sign up to get started</p>
            <div className="signup-options">
                <Link to="/signup/vendor" className="vendor-signup-btn">Vendor Sign Up</Link>
                <Link to="/signup/audience" className="audience-signup-btn">Audience Sign Up</Link>
            </div>
        </div>
    );
}

export default Signup;
