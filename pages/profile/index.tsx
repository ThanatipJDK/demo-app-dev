import React, { useEffect } from 'react'
import withAuth from '@/components/withAuth';
const Profile = () => {
  useEffect(() => {
    console.log('profile page');
    
  }, [])
  
  return (
    <div>Profile</div>
  )
}

export default withAuth(Profile)