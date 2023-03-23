// components/AuthContext.tsx

import React, { createContext, useState } from 'react';
import { useRouter } from 'next/router';
// let getToken: string | null = null;
type User = {
  id: string;
  name: string;
};

type AuthContextType = {
  user: string|null;
  login: (token:string) => void;
  logout: () => void;
};

export const AuthContext = createContext<AuthContextType>({
  user: null,
  login: () => {},
  logout: () => {}
});

export const AuthProvider = ({ children }:any) => {
  const router = useRouter()
  const [user, setUser] = useState<any>(null);

  const login = (token: string) => {
    // Replace with your authentication logic
    if (token) {
      setUser(token)
      localStorage.setItem("token", 'token asdadwedqwdqwedwqqwd')
    }
  };
  const logout = () => {
    console.log('logout');
    // Replace with your authentication logic
  
  };

  return <AuthContext.Provider value={{ user, login, logout }}>{children}</AuthContext.Provider>;
};
