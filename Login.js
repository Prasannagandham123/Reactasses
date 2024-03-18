// Login.js
import React from 'react';
import { useAuth } from './auth';

function Login() {
  const { signInWithGoogle } = useAuth();

  const handleSignIn = async () => {
    await signInWithGoogle();
  };

  return (
    <div>
      <h2>Login</h2>
      <button onClick={handleSignIn}>Sign in with Google</button>
    </div>
  );
}

export default Login;
