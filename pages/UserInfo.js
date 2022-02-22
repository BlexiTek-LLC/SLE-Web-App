import React, { useState, useEffect } from "react";
import {useRouter} from "next/router";
import styles from "../styles/Admin/UserInfo.module.css";
import Image from "next/image";
import Profile from "../public/assets/male.jpg";


const UserInfo = () => {

  const router = useRouter()

  //!STATE
  const [displaySelection, setDisplaySelection] = useState("I am a...");
  const [loanee, setLoanee] = useState(false)
 

//! FUNCTIONS
  const selection = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    //  I need to refactor this
    displaySelection ? setDisplaySelection("") : setDisplaySelection("I am a");
  };

  const whereToGo = (e) => {
    e.preventDefault()
    loanee == true ? router.push("/Loanee") : ''
  }


  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.header}>Who are you?</h1>
        <p className={styles.subheader}>Please enter your details</p>
        <Image
          // loader={myLoader}
          src={Profile}
          alt="Picture of the author"
          width={200}
          height={200}
          className={styles.profileImage}
        />
        <form className={styles.form} onSubmit={whereToGo}>
          <div className={styles.name}>
            <label>Name:</label>
            <input
              type="text"
              name="firstName"
              id={styles.firstName}
              placeholder="First name"
            />
            <input
              type="text"
              name="lastName"
              id={styles.lastName}
              placeholder="Last name"
            />
          </div>
          <div className={styles.dob}>
            <label>Date of Birth: </label>
            <input type="date" name="birth" id={styles.birth} />
          </div>
          <button
            onClick={selection}
            className={styles.selection}
            style={{ width: 500 }}
          >
            {displaySelection}
          </button>
          {/* Redoing this also */}
          {!displaySelection && (
            <select name="money" id="money" onChange={(e) => {e.target.value == "Loanee" ? setLoanee(true): setLoanee(false)}}>
              <option value="Donor">Donor</option> 
              <option value="Loanee">Loanee</option>
            </select>
          )}
          <div className={styles.dob}>
            <label>Bio: </label>
            <br />
            <input
              type="text"
              name="bio"
              className={styles.bio}
              placeholder="I am..."
            />
          </div>
          <button className={styles.submitBttn}>Save</button>
        </form>
      </div>
    </div>
  );
};

export default UserInfo;
