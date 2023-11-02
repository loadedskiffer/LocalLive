import React, { useState } from 'react';
import './ArtistSignup.css'; 

function ArtistSignup() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`Artist Email: ${email}, Password: ${password}`);
    };

    return (
        <div className="artist-signup-container">
            <h2>Artist Sign Up</h2>
            <form onSubmit={handleSubmit} className="artist-signup-form">
                <div className="input-field">
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="input-field">
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <div className="submit-field">
                    <button type="submit" className="artist-signup-button">Sign Up as Artist</button>
                </div>
            </form>
        </div>
    );
}

export default ArtistSignup;
