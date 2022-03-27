import React from 'react'

import Navbar from '../components/Utils/Navbar'

import styles from '../styles/Process.module.css'

function process() 
{
  return (
    <div>
        <Navbar />
        <h1 className={styles.title}>Black Owned, NFT Community Combatting Student Loan Debt</h1>
        <h2 className={styles.subTitle}>How It Works</h2>
        <div className={styles.row1}>
          <div className={styles.column1}>
              <h3 className={styles.stepTitle}>Step 1</h3>
              <p className={styles.step}>Create your account</p>
          </div>
          <div className={styles.column1}>
              <h3 className={styles.stepTitle}>Step 2</h3>
              <p className={styles.step}>upload your Non-Fungible Token</p>
          </div>
          <div className={styles.column1}>
              <h3 className={styles.stepTitle}>Step 3</h3>
              <p className={styles.step}>Place for Sale or Auction for SLE Coins</p>
          </div>
        </div>

        <div className={styles.row2}>
          <div className={styles.column2}>
              <h3 className={styles.stepTitle}>Step 4</h3>
              <p className={styles.step}>Pay your Student Loan Vendors in SLE Coins</p>
          </div>
          <div className={styles.column2}>
              <h3 className={styles.stepTitle}>Step 5</h3>
              <p className={styles.step}>Earn Forever Royalties</p>
          </div>
        </div>
    </div>
  )
}

export default process