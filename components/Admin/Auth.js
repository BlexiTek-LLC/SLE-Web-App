import React from 'react';
import styles from '../../styles/Admin.module.css'

function Auth() {
  return (
  <div className={styles.wrapper}>
      <form action='' className={styles.form}>
        <img src='/assets/admin/BlexiTekLogoTransparent.png' className={styles.avatar}/>
        <h2>Login</h2>
        <div className={styles.inputGroup}>
            <input type="text" name="loginUser" id="loginUser" required />
            <label for="loginUser">User Name</label>
        </div>
        <div className={styles.inputGroup}>
            <input type="password" name="loginPassword" id="loginPassword" required />
            <label for="loginPassword">Password</label>
        </div>
        <input type='submit' value='Login' className={styles.submit} />
        <a href='#forgot-password' className={styles.forgotPass}>Forgot Password?</a>
      </form>

      {/* <div id='forgot-password'>
        <form action='' className={styles.form}>
            <a href="#" className={styles.close}>&times;</a>
            <h2>Reset Password</h2>
            <div className={styles.inputGroup}>
                <input type="email" name="email" id="email" required />
                <label for="email">Email</label>
            </div>
            <input type="submit" value="Submit" className={styles.submit} />
        </form>
      </div> */}
  </div>
  )
}

export default Auth;
