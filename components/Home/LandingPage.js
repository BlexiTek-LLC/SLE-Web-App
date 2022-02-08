import React from "react";
import styles from "../../styles/Home.module.css";
import Link from "next/link";



export const LandingPage = () => {
  return (
    <div className={styles.lRow}>
      <div className={styles.lColumn}>
        <h1 className={styles.lTitle}>
          Student Loan Experimen<Link href="/admins/adminAuth">t</Link>
        </h1>
        <p className={styles.lPara}>
          Paying off Student Loans using NFT technology
        </p>
        <Link href='/admins/Login' passHref>
          <a className={styles.lSign}>Sign In</a>
        </Link>
      </div>
      <div className={styles.lColumn}>
        <img className={styles.lImg} src="/assets/landingPage/laptop.png" />
      </div>
    </div>
  );
};

export default LandingPage;
