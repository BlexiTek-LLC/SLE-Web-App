import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../components/Utils/Configs/firebase';
// import styles from '../styles/Signup.module.css';
import Image from 'next/image';
import styles from '../styles/Form.module.css';
import left from './../public/assets/left.png';
import right from './../public/assets/right.png';
import Link from 'next/link';

const Signup = () => {
	const [ email, setEmail ] = useState('');
	const [ password, setPassword ] = useState('');
	const [ passwordConfirm, setPasswordConfirm ] = useState('');

	const [ displaySignup, setDisplaySignup ] = useState(false);
	const router = useRouter();
	useEffect(() => {
		setTimeout(() => {
			setDisplaySignup(true);
		}, 1000);
	}, []);

	const onSubmit = (event) => {
		if (password === passwordConfirm) {
			createUserWithEmailAndPassword(auth, email, password)
				.then((userCredential) => {
					// Signing up user
					const user = userCredential.user;
					router.push('/discover');
				})
				.catch((error) => {
					const errorCode = error.code;
					const errorMessage = error.message;
					// ..
				});
		} else {
			console.log('password dont match');
		}
		event.preventDefault();
	};

	return (
		<div className={styles.container}>
			<div className={styles.splitImageLeft}>
				<Image src={left} alt="Picture of the author" layout="fill" objectFit="contain" />
			</div>
			{displaySignup && (
				<div className={styles.center}>
					<div className="" style={{ color: 'white', fontSize: 65, fontWeight: 100, marginBottom: 40,}}>
						<h1>Create Account</h1>
					</div>

					<form onClick={onSubmit} className="w-full max-w-sm ">
						<input
							type="text"
							className={styles.email}
							placeholder="Email"
							value={email}
							onChange={() => setEmail(event.target.value)}
						/>
						<input
							type="password"
							className={styles.password}
							placeholder="Create Password"
							value={password}
							onChange={() => setPassword(event.target.value)}
						/>
						<input
							type="password"
							className={styles.passwordConfirm}
							placeholder="Confirm Password"
							value={passwordConfirm}
							onChange={() => setPasswordConfirm(event.target.value)}
						/>
						<button type="submit" className={styles.submitBttn}>
							Sign Up!
						</button>
					</form>
					<div className={styles.redirect}>
						Already have an account?{' '}
						<Link href="/" passHref>
							<a style={{ color: 'yellow' }}>Login</a>
						</Link>
					</div>
				</div>
			)}

			<div className={styles.splitImageRight}>
				<Image
					// loader={myLoader}
					src={right}
					alt=""
					layout="fill"
					objectFit="contain"
				/>
			</div>
		</div>
	);
};

export default Signup;
