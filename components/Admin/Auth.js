import React from 'react';
import styles from '../../styles/Admin.module.css'

function Auth() {
  return (
  <div className={styles.wrapper}>
      <form action='' className={styles.form}>
        <a href='/'>
          <img src='/assets/admin/BlexiTekLogoTransparent.png' className={styles.avatar}/>
        </a>
        
        <h2>Login</h2>
        <div className={styles.inputGroup}>
            <input type="text" name="loginUser" id="loginUser" required />
            <label for="loginUser">Email</label>
        </div>
        <div className={styles.inputGroup}>
            <input type="password" name="loginPassword" id="loginPassword" required />
            <label for="loginPassword">Password</label>
        </div>
        <input type='submit' value='Login' className={styles.submit} />
      </form>
  </div>
  )
}

export default Auth;
