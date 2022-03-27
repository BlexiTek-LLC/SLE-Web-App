import React from 'react'

import Navbar from '../components/Utils/Navbar'

import styles from '../styles/Coin.module.css'

function coin() 
{
  return (
    <div>
        <Navbar />
        <h1 className={styles.title}>Black Owned, NFT Community Combatting Student Loan Debt</h1>
        <div className={styles.box}>
            <h2 className={styles.subTitle}>SLE Coin Used To Buy From NFT MarketPlace</h2>
            <p className={styles.worth}>1 SLE Coin = 0.0000001 ETH</p>
            <p className={styles.date}>Available Soon</p>
        </div>
    </div>
  )
}

export default coin