// withAuth.tsx

import { useRouter } from 'next/router';
import { useEffect } from 'react';
import useAuth from './useAuth';
const withAuth = (Component:any) => {
  const Auth = (props:any) => {
    const router = useRouter();
    const token = localStorage?.getItem('token')
    // const { user } = useAuth();
    // console.log(user);
    
    const isAuthenticated = token ? true : false; // replace with your authentication logic
    
    
    useEffect(() => {
      console.log(isAuthenticated);
      if (!isAuthenticated) {
        router.push('/');
      }
    }, [isAuthenticated, router]);

    if (isAuthenticated) {
      return <Component {...props} />;
    }

    return null;
  };

  return Auth;
};

export default withAuth;
