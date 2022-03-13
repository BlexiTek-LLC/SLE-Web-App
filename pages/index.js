import Head from 'next/head'
import Image from 'next/image'
import AboutPage from '../components/Home/AboutPage'
import LandingPage from '../components/Home/LandingPage'
import styles from '../styles/Home.module.css'
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>SLE | Home</title>
        <meta name="description" content="SLE is a company built on value and innovation" />
        <link rel="icon" href="/assets/admin/sleLogo.png" />
      </Head>

      <LandingPage />
      <AboutPage />
    </div>
  )
}
