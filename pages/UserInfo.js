import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/Form.module.css';
import Image from 'next/image';
import left from './../public/assets/left.png';
import right from './../public/assets/right.png';

const UserInfo = () => {
	const router = useRouter();

	//!STATE
	const [ displaySelection, setDisplaySelection ] = useState('I am a...');
	const [ loanee, setLoanee ] = useState(false);
	const [ displayUserInfo, setDisplayUserInfo ] = useState(false);

	useEffect(() => {
		setTimeout(() => {
			setDisplayUserInfo(true);
		}, 1000);
	}, []);


	//! FUNCTIONS
	const selection = (e) => {
		e.preventDefault();
		console.log(e.target.value);
		//  I need to refactor this
		displaySelection ? setDisplaySelection('') : setDisplaySelection('I am a');
	};

	const whereToGo = (e) => {
		e.preventDefault();
		loanee == true ? router.push('/Loanee') : '';
	};

	return (
		<div className={styles.container}>
			<div className={styles.splitImageLeft}>
				<Image src={left} alt="" layout="fill" objectFit="contain" />
			</div>
			{displayUserInfo && (
				<div className={styles.center}>
					<h1 style={{ color: 'white', fontSize: 65, fontWeight: 100, marginBottom: 40, }}>Who are you?</h1>
					{/* <p className={styles.subheader}>Please enter your details</p> */}
					<form  onSubmit={whereToGo}>
						<div className={styles.name}>
							<label>Name:</label>
							<input type="text" name="firstName" id={styles.firstName} placeholder="First name" />
							<input type="text" name="lastName" id={styles.lastName} placeholder="Last name" />
						</div>
						<div className={styles.dob}>
							{/* <label>Date of Birth: </label> */}
							<input type="date" name="birth" id={styles.birth} />
						</div>
						<button onClick={selection} className={styles.selection} style={{ width: 500 }}>
							{displaySelection}
						</button>
						{/* Redoing this also */}
						{!displaySelection && (
							<select
								name="money"
								id="money"
								onChange={(e) => {
									e.target.value == 'Loanee' ? setLoanee(true) : setLoanee(false);
								}}
							>
								<option value="Donor">Donor</option>
								<option value="Loanee">Loanee</option>
							</select>
						)}
						<div className={styles.dob}>
							<label>Bio: </label>
							<br />
							<input type="text" name="bio" className={styles.bio} placeholder="I am..." />
						</div>
						<button className={styles.submitBttn}>Save</button>
					</form>
				</div>
			)}
			<div className={styles.splitImageRight}>
				<Image src={right} alt="" layout="fill" objectFit="contain" />
			</div>
		</div>
	);
};

export default UserInfo;
