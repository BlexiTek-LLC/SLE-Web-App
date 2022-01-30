import React from 'react';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Auth from '../../components/Admin/Auth'
import {onAuthStateChanged} from 'firebase/auth'
import {auth} from '../../components/Utils/Configs/firebase'

export default function adminAuth() {
  const router = useRouter();

  useEffect(() =>
  {
      onAuthStateChanged(auth, (user) =>
      {
        if(user)
        {
          const uid = user.id;
          router.push('/admins/dashboard');
        }
        else
        {
          router.push('/admins/adminAuth');
        }
      })
  }, [])
  return (
    <div>
      <Auth />
    </div>
  )
}


