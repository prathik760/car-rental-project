import React, { useState } from 'react';
import './LoginModal.css';
import { useAuth } from '../AuthContext/Authcontext';

const LoginPopup = ({ onClose }) => {
  const { login } = useAuth();
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

   const url = isSignUp
  ? 'https://car-rental-ah1c.onrender.com/api/user/register'
  : 'https://car-rental-ah1c.onrender.com/api/user/login';

    const payload = isSignUp ? { name, email, password } : { email, password };

    try {
      const res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (res.ok) {
        login({ user: data.user, token: data.token });
        
        onClose();
      } else {
        alert(data.message || 'Failed');
      }
    } catch (err) {
      alert('Network error');
    }
  };

  return (
    <div className="login-popup-overlay">
      <div className="login-popup-box">
        <button className="login-popup-close" onClick={onClose}>×</button>
        <h2 className="login-popup-title">
          {isSignUp ? 'Create Account' : 'Login Required'}
        </h2>
        <form className="login-popup-form" onSubmit={handleSubmit}>
          {isSignUp && (
            <input
              type="text"
              placeholder="Full Name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          )}
          <input
            type="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="login-popup-btn">
            {isSignUp ? 'Sign Up' : 'Login'}
          </button>
        </form>
        <p className="login-popup-toggle">
          {isSignUp ? 'Already have an account?' : "Don't have an account?"}{' '}
          <span onClick={() => setIsSignUp(!isSignUp)}>
            {isSignUp ? 'Login' : 'Sign Up'}
          </span>
        </p>
      </div>
    </div>
  );
};

export default LoginPopup;
