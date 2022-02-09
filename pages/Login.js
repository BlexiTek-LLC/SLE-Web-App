import React from "react";
import styles from "../../styles/Admin/Signup.module.css";
import Link from "next/link";

const Login = () => {
  return (
    <div className={styles.container}>
      <div className="">
        <h1 style ={{ color: "white", fontSize: 45, fontWeight: 200,}}>Welcome Back!</h1>
      </div>

      <form className="w-full max-w-sm ">
        <input
          type="text"
          className={styles.email}
          placeholder="Email"
        />
        <input
          type="password"
          className={styles.password}
          placeholder="Create Password"
        />
        <button type="submit" className={styles.submitBttn}>
          Login
        </button>
      </form>
      <div className={styles.login}>
        Dont have account?! <Link href="/" passHref><a style={{color: "yellow"}}>Sign up</a></Link>
      </div>
    </div>
  );
};

export default Login;
