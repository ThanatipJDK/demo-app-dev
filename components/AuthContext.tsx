// components/AuthContext.tsx

import React, { createContext, useState } from 'react';
import { useRouter } from 'next/router';
// let getToken: string | null = null;
type User = {
  username: string;
  password: string;
};

type AuthContextType = {
  user: User | null;
  login: (token:any) => void;
  logout: () => void;
};

export const AuthContext = createContext<AuthContextType>({
  user: null,
  login: () => {},
  logout: () => {}
});

export const AuthProvider = ({ children }:any) => {
  const router = useRouter()
  const [user, setUser] = useState<User | null>(null);

  const login = (data:User) => {
    // Replace with your authentication logic
    if (data) {
      setUser(data)
      localStorage.setItem("token", 'token asdadwedqwdqwedwqqwd')
    }
  };
  const logout = () => {
    // console.log('logout');
    // Replace with your authentication logic
    setUser(null)
    localStorage.clear()
    router.push('/')
  };

  return <AuthContext.Provider value={{ user, login, logout }}>{children}</AuthContext.Provider>;
};
