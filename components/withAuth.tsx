// withAuth.tsx

import { useRouter } from 'next/router';
import { ComponentType, useEffect } from 'react';
import useAuth from './useAuth';
// const withAuth = (Component: any) => {
const withAuth = (WrappedComponent: ComponentType<any>) => {
  const AuthenticatedComponent = (props: any) => {
    const { user } = useAuth();
    const router = useRouter();
    const token = localStorage?.getItem('token')
    useEffect(() => {
      console.log(user);
      
      if (!token) {
        router.replace('/login');
      }
    }, [user, router]);

    return token ? <WrappedComponent {...props} /> : null;
  };

  return AuthenticatedComponent;
  // const Auth = (props:any) => {
  //   const router = useRouter();
  //   const token = localStorage?.getItem('token')
    
  //   // const { user } = useAuth();
  //   // console.log(user);
    
  //   const isAuthenticated = token ? true : false; // replace with your authentication logic
    
    
  //   useEffect(() => {
  //     console.log(isAuthenticated);
  //     if (!isAuthenticated) {
  //       router.push('/');
  //     }
  //   }, [isAuthenticated, router]);

  //   if (isAuthenticated) {
  //     return <Component {...props} />;
  //   }

  //   return null;
  // };

  // return Auth;
};

export default withAuth;
