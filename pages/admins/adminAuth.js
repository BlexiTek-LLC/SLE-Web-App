import React, {useState, useEffect} from 'react';
import { useRouter } from 'next/router';

import { signInWithEmailAndPassword } from "firebase/auth";
import {auth} from '../../components/Utils/Configs/firebase'
import {onAuthStateChanged} from 'firebase/auth'

import Navbar from '../../components/Utils/Navbar'

import styles from '../../styles/Admin/Admin.module.css'

export default function adminAuth() {
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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

  const onSubmit = async (event) =>
  {
    signInWithEmailAndPassword(auth, email, password).then((userCredential)=>
    {
      //Signed In
      const user = userCredential.user;
      console.log(user)
      router.push('/admins/dashboard')
    }).catch((error) => 
    {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage)
    })

     event.preventDefault();
  }

  return (
    <div>
      <Navbar />
      <img className={styles.formImg} src='/assets/landingPage/bigSleLogo.png' />
      <form className={styles.formBox} onSubmit={onSubmit}>
        <input 
        className={styles.email}
        placeholder='Email'
        value={email}
        onChange={()=> setEmail(event.target.value)} />
        <br />
        <input 
        className={styles.password}
        placeholder='Password'
        value={password}
        onChange={() => setPassword(event.target.value)} />
        <br />
        <a className={styles.resetPass} href='/'><p>Forgot password?</p></a>
        <button className={styles.login} type='submit' >
          Log In
        </button>
      </form>
    </div>
  )
}


