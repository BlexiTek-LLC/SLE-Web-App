import React from "react";
import styles from "../styles/Admin/UserInfo.module.css";

const Loanee = () => {

    return(
        <form className={styles.form}>
            <div className={styles.loan}>
                <input
                type="text"
                name="firstName"
                id={styles.firstName}
                style={{color: "white", fontSize: 22}}
                placeholder="Who is my loan vendor?"
                />
            </div>
            <div className={styles.loan}>
                <input
                type="text"
                name="firstName"
                id={styles.firstName}
                placeholder="Student Loan Number"
                />
            </div>
            <div className={styles.loan}>
                <label style={{color: "white"}}>$</label>
                <input
                type="text"
                name="firstName"
                id={styles.firstName}
                placeholder="Loan Amount"
                />
            </div>
            <div className={styles.loan}>
                <input
                type="text"
                name="firstName"
                id={styles.firstName}
                placeholder="University"
                />
            </div>
            <button className={styles.submitBttn}>Save</button>
        </form>
    )

}

export default Loanee