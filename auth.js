// auth.js
import React, { createContext, useContext, useEffect, useState } from 'react';
import { auth } from './firebase';

const authContext = createContext();

export function ProvideAuth({ children }) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export const useAuth = () => {
  return useContext(authContext);
};

function useProvideAuth() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    return unsubscribe;
  }, []);

  const signInWithGoogle = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    try {
      const result = await auth.signInWithPopup(provider);
      setUser(result.user);
      return result.user;
    } catch (error) {
      console.error(error);
      return null;
    }
  };

  const signOut = async () => {
    try {
      await auth.signOut();
      setUser(null);
    } catch (error) {
      console.error(error);
    }
  };

  return {
    user,
    signInWithGoogle,
    signOut,
  };
}
