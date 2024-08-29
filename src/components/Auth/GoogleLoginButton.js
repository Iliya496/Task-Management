import React from 'react';
import { auth, googleProvider } from '../../firebase';

const GoogleLoginButton = () => {
  const handleLogin = async () => {
    try {
      await auth.signInWithPopup(googleProvider);
    } catch (error) {
      console.error(error.message);
    }
  };

  return <button onClick={handleLogin} my-3>Login with Google</button>;
};

export default GoogleLoginButton;
