import React from 'react';
import styles from '../../styles/Home.module.css'

export const LandingPage = () => {
    return (
      <div className={styles.lRow}>
        <div className={styles.lColumn}>
          <h1 className={styles.lTitle}>Student Loan Experimen<a href='/adminAuth'>t</a></h1>
          <p className={styles.lPara}>Paying off Student Loans using NFT technology</p>
          <a href='/'
          className={styles.lSign}>
            Sign In
          </a>
        </div>
        <div className={styles.lColumn}>
        <img className={styles.lImg} src='/assets/landingPage/laptop.png' />
        </div>
      </div>
    );
  };

  export default LandingPage;