import React from 'react'

import styles from '../../styles/About.module.css'

function AboutPage() 
{
  return (
    <div className={styles.Row}>
        <div className={styles.column}>
            <img className={styles.logo} src='assets/landingPage/bigSleLogo.png' />
        </div>
        <div className={styles.column2}>
            <h1>We are <span>Next Gen (Millennial)</span> solution</h1>
            <p>We empower our community using latest technology</p>
            <button>
                Learn More
            </button>
        </div>
    </div>
  )
}

export default AboutPage