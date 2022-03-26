import Head from 'next/head'
import Image from 'next/image'
import React, {useState, useEffect} from 'react';

import AboutPage from '../components/Home/AboutPage'
import LandingPage from '../components/Home/LandingPage'
import SignatureWallPage from '../components/Home/SignatureWallPage'
import LoadingScreen from '../components/Utils/LoadingScreen';

import styles from '../styles/Home.module.css'

export default function Home() 
{
  const [loading, setLoading] = useState(false);

  useEffect(
    () =>
    {
      setLoading(true)
      setTimeout(
        () =>
        {
          setLoading(false);
        }, 3000
      )
    }, []
  )
  return (
    <div className={styles.container}>
      {
        loading ?
        <LoadingScreen />
          :
        <div>
          <Head>
            <title>SLE | Home</title>
            <meta name="description" content="SLE is a company built on value and innovation" />
            <link rel="icon" href="/assets/admin/sleLogo.png" />
          </Head>

          <LandingPage />
          <AboutPage />
          <SignatureWallPage />
        </div>
      }
    </div>
  )
}
