// components/useAuth.tsx

import { useContext } from 'react';
import { AuthContext } from './AuthContext';

const useAuth = () => {
  const { user, login, logout } = useContext(AuthContext);

  return { user, login, logout };
};

export default useAuth;
