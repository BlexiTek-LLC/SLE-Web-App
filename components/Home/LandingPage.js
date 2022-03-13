import React, {useState} from "react";
import Modal, { defaultStyles } from "react-modal";

import styles from "../../styles/Home.module.css";

import { collection, addDoc } from "firebase/firestore"; 
import {db} from '../Utils/Configs/firebase';


export const LandingPage = () => 
{

  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () =>
  {
    setIsOpen(!isOpen);
  }

  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [birth, setBirth] = useState('');

  async function onSubmit(event)
  {
      try
      {
        const docRef = await addDoc(collection(db, 'newsletter'),
        {
          firstname,
          lastname,
          email,
          birth
        })

        console.log("Document written with ID: ", docRef.id);
      }catch(e)
      {
        console.error("Error adding document: ", e);
      }
    event.preventDefault();
  }
  
  return (
    <div className={styles.heroBox}>

        <div className={styles.nav}>
            
            
            <div className={styles.menu}>
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">App</a></li>
              <li><a href="#">Marketplace</a></li>
              <li><a href="#">Contact</a></li>
            </div>
        </div>
        <div className={styles.hColumn}>
          <h1 className={styles.hTitle}>
            Join the community
          </h1>
          <h2 className={styles.hSubTitle}>
            change the future
          </h2>
          
          <button className={styles.hButton} onClick={toggleModal}>
            Subscribe Now!
          </button>
        </div>

        <div className={styles.hColumn2}>
          <img className={styles.hSocial} src="https://i.ibb.co/Gntd47P/social.png" />
        </div>


        <Modal className={styles.hPopForm}
        isOpen={isOpen}
        onRequestClose={toggleModal}
        overlayClassName={styles.formOverlay}
        closeTimeoutMS={500}>
          <form className={styles.formBox} onClick={onSubmit}>
            <h3>Newsletter Subscribe</h3>
            <img src="/favicon.ico" className={styles.hClose} onClick={toggleModal}/>

            <br />

            <div className={styles.formContent}>
                <input type='text' 
                placeholder='First name' 
                name='firstname' 
                value={firstname} 
                onChange={(e) => setFirstname(event.target.value)} 
                required
                 />

                <input type='text' 
                placeholder='Last name' 
                name='lastname' 
                value={lastname} 
                onChange={(e) => setLastname(event.target.value)} 
                required
                 />

                 <br />

                 <input type='text' 
                placeholder='Email' 
                name='email' 
                value={email} 
                onChange={(e) => setEmail(event.target.value)} 
                required
                 />

                <input type='text' 
                placeholder='Birthday' 
                name='dob' 
                value={birth} 
                onChange={(e) => setBirth(event.target.value)} 
                required
                 />
                 
            </div>

            <br />

            <button type="submit" className={styles.hSubmit}>Submit</button>
          </form>
        </Modal>
    </div>
  );
};

export default LandingPage;
