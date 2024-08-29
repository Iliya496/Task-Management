// src/components/Auth/Login.js
import React, { useState } from 'react';
import { auth } from '../../firebase';
import GoogleLoginButton from './GoogleLoginButton';
import axios from 'axios';

const Login = ({ history }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await axios.post('/api/auth/login', { email, password });
      localStorage.setItem('token', result.data.token);
      history.push('/');
    } catch (error) {
      console.error('Login failed', error);
    }
  };

  return (
    <div className="auth-form">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
      <GoogleLoginButton />
    </div>
  );
};

export default Login;
