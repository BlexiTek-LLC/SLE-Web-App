import React from 'react'

import Navbar from '../components/Utils/Navbar'

import styles from '../styles/About.module.css'

function about() 
{
  return (
    <div className={styles.container}>
        <Navbar />
        <p className={styles.title}>Black Owned, NFT Community Combatting Student Loan Debt</p>
        <div className={styles.row}>
            <div className={styles.leftBox}>
                <h2 className={styles.heading}>Who We Are</h2>
                <p className={styles.words}>Innovators, Game Changers, New kids on the block</p>
            </div>
            <div className={styles.rightBox}>
                <h2 className={styles.heading}>Our Mission</h2>
                <p className={styles.words}>Work smart, while working hard. Using the latest technology to <br /> solve issues that
                    plague our community, we gone have some fun with this.
                </p>
            </div>
            <h2 className={styles.subtitle}>The Team</h2>
            <div className={styles.tRow}>
                <div className={styles.tColumn}>
                    <img src='/assets/landingPage/bigSleLogo.png' className={styles.tAvatar}/>
                    <h3 className={styles.name}>Melvin</h3>
                    <h4 className={styles.location}>St. Louis</h4>
                </div>
                <div className={styles.tColumn}>
                    <img src='/assets/landingPage/bigSleLogo.png' className={styles.tAvatar}/>
                    <h3 className={styles.name}>Stephenna</h3>
                    <h4 className={styles.location}>Atlanta</h4>
                </div>
                <div className={styles.tColumn}>
                    <img src='/assets/landingPage/bigSleLogo.png' className={styles.tAvatar}/>
                    <h3 className={styles.name}>Kervin</h3>
                    <h4 className={styles.location}>Atlanta</h4>
                </div>
            </div>
        </div>
    </div>
  )
}

export default about