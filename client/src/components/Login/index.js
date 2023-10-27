import React, { useState } from 'react';
import './Login.css'; 

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Call backend API or authentication service 
    console.log(`Email: ${email}, Password: ${password}`);
  };

  return (
    <div className="login-container">
      <h2>Welcome Back!</h2>
      <p>Log in to continue to Local Live</p>
      <form onSubmit={handleSubmit} className="login-form">
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
          <button type="submit">Login</button>
        </div>
      </form>
      <div className="login-footer">
        <a href="#">Forgot Password?</a>
        {/* <a href="#">Sign Up</a> */} {/* Commented out the Sign Up link */}
      </div>
    </div>
  );
}

export default Login;
