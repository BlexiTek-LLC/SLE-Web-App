import Head from 'next/head'
import Image from 'next/image'
import React, {useState, useEffect} from 'react';

import LoadingScreen from '../components/Utils/LoadingScreen';
import Navbar from '../components/Utils/Navbar';
import { collection, addDoc, getDocs, getDoc } from "firebase/firestore"; 
import {db} from '../components/Utils/Configs/firebase';

import styles from '../styles/Home.module.css'
import { async } from '@firebase/util';

export default function Home() 
{
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [userPost, setUserPost] = useState('');
  const [uPost, setUpost] = useState([]);

  useEffect(
    () =>
    {
      setLoading(true)
      setEmail('')
      setTimeout(
        () =>
        {
          setLoading(false);
        }, 3000
      )
    }, []
  )

  
    const onSubmit = async(event) =>
    {
     event.preventDefault();
      try 
      {
        const docRef = await addDoc(collection(db, 'Subscribe'),
        {
          email,
          userPost
        })
        console.log("Document written with ID: ", docRef.id);
        location.reload();  
      } catch (error) 
      {
        console.error("Error adding document: ", e); 
      }
       
    }

    const getSubscribers =  () =>
    {
      const dbRef = collection(db, 'Subscribe');
      getDocs(dbRef).then((data) =>
      {
        setUpost(data.docs.map((item) =>
        {
          return { ...item.data(), id: item.id}
        }))
      })
    }

    useEffect(() =>
    {
      getSubscribers();
    }, [])



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

          <Navbar />
          <p className={styles.title}>Black Owned, NFT Community Combatting Student Loan Debt</p>
          <div className={styles.contentBox}>
            <div className={styles.leftBox}>
              <img src='/assets/landingPage/avatar.jpeg' className={styles.hAvatar}/>
              <img src='/assets/landingPage/nfts.png' className={styles.hNft} />
              <p className={styles.hSubtitle}>NFT MarketPlace Coming Soon...</p>
            </div>
            <div className={styles.rightBox}>
              <p className={styles.cta}>Say something to the student loan industry..<a href='/admins/adminAuth'>.</a></p>
              <div className={styles.signatureWall}>
                <form className={styles.subscribe}  action='/'>
                  <textarea
                   className={styles.post}
                   type='text'
                   placeholder='Say it here...'
                   value={userPost}
                   onChange={()=> setUserPost(event.target.value)}
                    />
                  <input
                   className={styles.email}
                   type='email'
                   placeholder='Email'
                   value={email}
                   onChange={() => setEmail(event.target.value)} />
                  <button  onClick={onSubmit} className={styles.btn}>
                    Submit
                  </button>
                </form>
                <div className={styles.postBox}>
                  {
                    uPost.map((post) =>
                    {
                      return(
                        <div className={styles.box}>
                          <img src='/assets/landingPage/sleLogo.ico' className={styles.postImg}/>
                          <p className={styles.userPosts}>{post.userPost}</p>
                        </div>
                      )
                    })
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      }
    </div>
  )
}
