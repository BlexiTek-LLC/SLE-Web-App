import React from 'react';

import { useRouter } from 'next/router';
import {signOut} from 'firebase/auth'
import {auth} from '../components/Utils/Configs/firebase'

import styles from '../styles/Discover.module.css'

export default function discover() 
{

  const router = useRouter();
  const loggedOut = () =>
    {
      signOut(auth).then(() =>
      {
        router.push('/Signup');
      })
    }

  return (
      <div>
          <a className={styles.signOut} onClick={loggedOut}> Sign out</a>
      </div>
  )
}
