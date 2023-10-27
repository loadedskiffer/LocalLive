import React, { useState } from 'react';
import './VendorSignup.css';

function VendorSignup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords don't match!");
      return;
    }

    // Call backend API or authentication service
    console.log(`Email: ${email}, Password: ${password}`);
  };

  return (
    <div className="vendor-signup-container">
      <h2>Vendor Sign Up</h2>
      <p>Join as a vendor and showcase your talents</p>
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
        <div className="submit-field">
          <button type="submit">Sign Up as Vendor</button>
        </div>
      </form>
    </div>
  );
}

export default VendorSignup;
