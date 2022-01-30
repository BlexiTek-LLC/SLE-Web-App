import React from 'react';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import {onAuthStateChanged, signOut} from 'firebase/auth'
import {auth} from '../../components/Utils/Configs/firebase'

import styles from '../../styles/Admin/Dashboard.module.css'

export default function dashboard() {
  const router = useRouter();

  useEffect(() =>
  {
      onAuthStateChanged(auth, (user) =>
      {
        if(user)
        {
          const uid = user.id;
        }
        else
        {
          router.push('/admins/adminAuth');
        }
      })
  }, [])

    

    const loggedOut = () =>
    {
      signOut(auth).then(() =>
      {
        router.push('/admins/adminAuth');
      })
    }

  return (
    <div>
        <button className={styles.logOut} onClick={loggedOut}>
          Sign out
        </button>
    </div>
  )
}
