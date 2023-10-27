import React from 'react';
import './Welcome.css';

const Welcome = () => {
    return (
        <div className="welcome-container">
            <h1>Welcome to Local Live</h1>
            <p>Join our community and discover local talents</p>
            <div className="welcome-buttons">
                <button>Log In</button>
                <button>Sign Up</button>
            </div>
        </div>
    );
}

export default Welcome;
