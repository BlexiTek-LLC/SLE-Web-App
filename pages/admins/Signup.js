import React, { useState } from "react";
import styles from "../../styles/Admin/Signup.module.css";
import Link from "next/link";

const Signup = () => {
  return (
    <div className={styles.container}>
      <div className="" style={{ color: "white", fontSize: 45 }}>
        <h1>Create Account</h1>
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
        <input
          type="password"
          className={styles.passwordConfirm}
          placeholder="Confirm Password"
        />
        <button type="submit" className={styles.submitBttn}>
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
