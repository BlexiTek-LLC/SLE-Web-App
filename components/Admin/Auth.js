import React, {useState} from 'react';
import { useRouter } from 'next/router';
import { signInWithEmailAndPassword } from "firebase/auth";
import {auth} from '../Utils/Configs/firebase'

import styles from '../../styles/Admin/Admin.module.css'


function Auth() 
{
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const onSubmit = (event) =>
  {
    signInWithEmailAndPassword(auth, email, password).then((userCredential)=>
    {
      //Signed In
      const user = userCredential.user;
      console.log(user)
      router.push('/admins/dashboard')
    }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage)
    })

     event.preventDefault();
  }
  return (
  <div className={styles.wrapper}>
      <form action='' className={styles.form} onSubmit={onSubmit}>
        <a href='/'>
          <img src='/assets/admin/BlexiTekLogoTransparent.png' className={styles.avatar}/>
        </a>
        
        <h2>Login</h2>
        <div className={styles.inputGroup}>
            <input type="text" name="email" id="email" value={email}
            onChange={() => setEmail(event.target.value)} required />
            <label htmlFor="email">Email</label>
        </div>
        <div className={styles.inputGroup}>
            <input type="password" name="password" id="password" value={password} 
            onChange={() => setPassword(event.target.value)} required />
            <label htmlFor="password">Password</label>
        </div>
        <input type='submit' value='Login' className={styles.submit} />
      </form>
  </div>
  )
}

export default Auth;
