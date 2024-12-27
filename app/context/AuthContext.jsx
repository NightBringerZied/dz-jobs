"use client"
import React, { createContext, useContext, useState } from 'react';
import { useRouter } from 'next/navigation';
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const router = useRouter();

  const login = async (credentials) => {
    try {
      const res = await fetch('https://dz-jobs-api-production.up.railway.app/v1/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(credentials),
      });

      if (!res.ok) {
        throw new Error('Login failed');
      }
      const data = await res.json();
      console.log(data.data);
      setUser(data.data);
      router.push('/candidates/profile')
    } catch (err) {
      console.log(err.message);
    }
  };
  const signup = async (credentials) => {
    try {
      const res = await fetch('https://dz-jobs-api-production.up.railway.app/v1/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(credentials),
      });
      
      if (!res.ok) { 
        console.log(res.json())
        throw new Error('Sign-up failed');
       
      }

      const data = await res.json();
      console.log(data.data);
      setUser(data); // Automatically log in the user
      if(data.data.role === 'candidate'){
             router.push('/candidates');}else{
             router.push('/recruters');
      }
    } catch (err) {
      console.log(err.message);
    }
  };


  const logout = () => setUser(null); // Reset user state

  return (
    <AuthContext.Provider value={{ user, login, logout,signup }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);