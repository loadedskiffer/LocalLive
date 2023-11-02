import React, { useState } from 'react';
import './AudienceSignup.css';

function AudienceSignup() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [zipCode, setZipCode] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            alert("Passwords don't match!");
            return;
        }

        // Call backend API or authentication service
        console.log(`Email: ${email}, Password: ${password}, Zip Code: ${zipCode}`);
    };

    return (
        <div className="audience-signup-container">
            <h2>Audience Sign Up</h2>
            <p>Join as an audience and discover local talents</p>
            <form onSubmit={handleSubmit} className="audience-signup-form">
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
                <div className="input-field">
                    <label>Confirm Password:</label>
                    <input
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />
                </div>
                <div className="input-field">
                    <label>Zip Code:</label>
                    <input
                        type="text"
                        value={zipCode}
                        onChange={(e) => setZipCode(e.target.value)}
                        required
                    />
                </div>
                <div className="submit-field">
                    <button type="submit">Sign Up as Audience</button>
                </div>
            </form>
        </div>
    );
}

export default AudienceSignup;
