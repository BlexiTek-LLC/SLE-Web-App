import React from 'react'

import styles from '../../styles/Signature.module.css'

function SignatureWallPage() 
{
  return (
    <div className={styles.tickerWrap}>
        <h1 className={styles.title}>Signature Wall</h1>
        <p className={styles.subTitle}>What's one thing you'd like to say to the Student Loan Industry?</p>
        <div className={styles.ticker}>
            <div className={styles.tickerItem}>
                <img className={styles.avatar} src='assets/admin/sleLogo.png' />
                <h5>John Doe</h5>
                <p>We need to something about loans</p>
            </div>

            <div className={styles.tickerItem}>
                <img className={styles.avatar} src='assets/admin/sleLogo.png' />
                <h5>John Doe</h5>
                <p>Vice mlkshk crucifix beard chillwave meditation hoodie asymmetrical Helvetica.</p>
            </div>

            <div className={styles.tickerItem}>
                <img className={styles.avatar} src='assets/admin/sleLogo.png' />
                <h5>John Doe</h5>
                <p>Ugh PBR&B kale chips Echo Park.</p>
            </div>

            <div className={styles.tickerItem}>
                <img className={styles.avatar} src='assets/admin/sleLogo.png' />
                <h5>John Doe</h5>
                <p>Gluten-free mumblecore chambray mixtape food truck.</p>
            </div>

            <div className={styles.tickerItem}>
                <img className={styles.avatar} src='assets/admin/sleLogo.png' />
                <h5>John Doe</h5>
                <p>Authentic bitters seitan pug single-origin coffee whatever.</p>
            </div>

            <div className={styles.tickerItem}>
                <img className={styles.avatar} src='assets/admin/sleLogo.png' />
                <h5>John Doe</h5>
                <p>Letterpress chambray brunch.</p>
            </div>

            <div className={styles.tickerItem}>
                <img className={styles.avatar} src='assets/admin/sleLogo.png' />
                <h5>John Doe</h5>
                <p>Vice mlkshk crucifix beard chillwave meditation hoodie asymmetrical Helvetica.</p>
            </div>

            <div className={styles.tickerItem}>
                <img className={styles.avatar} src='assets/admin/sleLogo.png' />
                <h5>John Doe</h5>
                <p>Ugh PBRB kale chips Echo Park.</p>
            </div>

            <div className={styles.tickerItem}>
                <img className={styles.avatar} src='assets/admin/sleLogo.png' />
                <h5>John Doe</h5>
                <p>Gluten-free mumblecore chambray mixtape food truck.</p>
            </div>

            <div className={styles.tickerItem}>
                <img className={styles.avatar} src='assets/admin/sleLogo.png' />
                <h5>John Doe</h5>
                <p>Authentic bitters seitan pug single-origin coffee whatever.</p>
            </div>
        </div>

        <button className={styles.button}>
            Sign the Wall
        </button>
    </div>
  )
}

export default SignatureWallPage