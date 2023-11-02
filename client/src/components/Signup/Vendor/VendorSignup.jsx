import React, { useState } from 'react';
import './VendorSignup.css';

function VendorSignup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [venueName, setVenueName] = useState('');
  const [streetAddress, setStreetAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zipCode, setZipCode] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords don't match!");
      return;
    }

    // Call backend API or authentication service
    console.log(`Email: ${email}, Password: ${password}, Venue Name: ${venueName}, Address: ${streetAddress}, ${city}, ${state} ${zipCode}`);
  };

  return (
    <div className="vendor-signup-container">
      <h2>Vendor Sign Up</h2>
      <p>Join as a vendor and showcase your venue</p>
      <form onSubmit={handleSubmit} className="vendor-signup-form">
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
  
        {/* Centered Venue Name */}
        <div className="input-field venue-name-center">
          <label>Venue Name:</label>
          <input
            type="text"
            value={venueName}
            onChange={(e) => setVenueName(e.target.value)}
            required
          />
        </div>
  
        <div className="input-field address-field">
          <label>Street Address:</label>
          <input
            type="text"
            value={streetAddress}
            onChange={(e) => setStreetAddress(e.target.value)}
            required
          />
          <label>City:</label>
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
          />
        </div>
        <div className="input-field address-field">
          <label>State:</label>
          <input
            type="text"
            value={state}
            onChange={(e) => setState(e.target.value)}
            required
          />
          <label>Zip Code:</label>
          <input
            type="text"
            value={zipCode}
            onChange={(e) => setZipCode(e.target.value)}
            required
          />
        </div>
        <div className="submit-field">
          <button type="submit">Sign Up as Vendor</button>
        </div>
      </form>
    </div>
  );
  
}

export default VendorSignup;
