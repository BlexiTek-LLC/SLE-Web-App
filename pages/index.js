import Head from 'next/head'
import Image from 'next/image'
import LandingPage from '../components/Home/LandingPage'
import styles from '../styles/Home.module.css'
import Signup from './admins/Signup'
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>SLE App | Sign In</title>
        <meta name="description" content="SLE is a company built on value and innovation" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <LandingPage />
    </div>
  )
}
