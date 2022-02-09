import React, { useState} from "react";
import { useRouter } from 'next/router';
import {auth} from '../components/Utils/Configs/firebase'
import { signInWithEmailAndPassword } from "firebase/auth";
import styles from "../styles/Signup.module.css";
import Link from "next/link";

const Login = () => 
{
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const Submit = (event) =>
  {
      signInWithEmailAndPassword(auth, email, password)
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
      event.preventDefault();
}
  

  return (
    <div className={styles.container}>
      <div className="">
        <h1 style ={{ color: "white", fontSize: 45, fontWeight: 200,}}>Welcome Back!</h1>
      </div>

      <form className="w-full max-w-sm " onClick={Submit}>
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
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className={styles.submitBttn}>
          Login
        </button>
      </form>
      <div className={styles.login}>
        Dont have account?! <Link href="/Signup" passHref><a style={{color: "yellow"}}>Sign up</a></Link>
      </div>
    </div>
  );
};

export default Login
