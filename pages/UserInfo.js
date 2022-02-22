import React, { useState, useEffect } from "react";
import styles from "../styles/Admin/UserInfo.module.css";
import Image from "next/image";
import Profile from "../public/assets/male.jpg";

const UserInfo = () => {
  const [displaySelection, setDisplaySelection] = useState("I am a...");

  const selection = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    //  I need to refactor this
    displaySelection ? setDisplaySelection("") : setDisplaySelection("I am a");
  };
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
        <form className={styles.form}>
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
            <select name="money" id="money">
              <option value="loanee">Loanee</option>
              <option value="Donor">Donor</option>
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
