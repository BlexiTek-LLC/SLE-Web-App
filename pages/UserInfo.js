import React, { useState, useEffect } from "react";
import styles from "../styles/UserInfo.module.css"
import Image from "next/image";
import Profile from "../public/assets/male.jpg";

const UserInfo = () => {
  const [usersType, setUsersType] = useState("");
  


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
            <label>I am a... </label>
              <select className={styles.userType} name="money"  id="money" onChange={(e) => setUsersType(e.target.value)}>
                <option>Who Are You?</option>
                <option value="Loanee">Loanee</option>
                <option value="Donor">Donor</option>
              </select>
        </form>
      </div>
    </div>
  );
};

export default UserInfo;