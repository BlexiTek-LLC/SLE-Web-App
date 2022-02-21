import React, { useState } from "react";
import { useRouter } from 'next/router';
import {createUserWithEmailAndPassword} from 'firebase/auth'
import { auth } from "../components/Utils/Configs/firebase";

import styles from "../styles/Signup.module.css"
import Link from "next/link";

const Signup = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const router = useRouter();

  const onSubmit = (event) =>
  {
    if(password === passwordConfirm)
    {
      createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => 
      {
        // Signing up user
        const user = userCredential.user;
        router.push('/discover')
      })
      .catch((error) => 
      {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
    }else
    {
      console.log("password dont match")
    }
    event.preventDefault();
  }

  return (
    <div className={styles.container}>
      <div className="" style={{ color: "white", fontSize: 45 }}>
        <h1>Create Account</h1>
      </div>

      <form onClick={onSubmit} className="w-full max-w-sm ">
        <input
          type="text"
          className={styles.email}
          placeholder="Email"
          value={email}
          onChange={() => setEmail(event.target.value)}
        />
        <input
          type="password"
          className={styles.password}
          placeholder="Create Password"
          value={password}
          onChange={() => setPassword(event.target.value)}
        />
        <input
          type="password"
          className={styles.passwordConfirm}
          placeholder="Confirm Password"
          value={passwordConfirm}
          onChange={() => setPasswordConfirm(event.target.value)}
        />
        <button type="submit" 
        className={styles.submitBttn}>
          Sign Up!
        </button>
      </form>
      <div className={styles.login}>
        Already have an account? <Link href="/" passHref><a style={{color: "yellow"}}>Login</a></Link>
      </div>
    </div>

  );
};

export default Signup;
