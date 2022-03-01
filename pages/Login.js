import React, { useState, useEffect } from 'react';
// import styles from '../styles/Signup.module.css';
import styles from '../styles/Form.module.css';
import Link from 'next/link';
import Image from 'next/image';
import left from './../public/assets/left.png';
import right from './../public/assets/right.png';
// import Slide from 'react-reveal/Slide';

const Login = () => {
	const [ displayLogin, setDisplayLogin ] = useState(false);

  useEffect(() => {
    setTimeout(() => {setDisplayLogin(true)}, 1000)
  }, [])

	return (
		<div className={styles.container}>
			<div className={styles.splitImageLeft}>
				<Image src={left} alt="Picture of the author" layout="fill" objectFit="contain" />
			</div>

			{displayLogin && (
				<div className={styles.center}>
					<div className={styles.form}>
						<div className="">
							<h1 style={{ color: 'white', fontSize: 65, fontWeight: 100, marginBottom: 40, }}>Welcome Back!</h1>
						</div>

						<form className="w-full max-w-sm ">
							<input type="text" className={styles.email} placeholder="Email" />
							<input type="password" className={styles.password} placeholder="Password" />
							<button type="submit" className={styles.submitBttn}>
								Login
							</button>
						</form>
						<div className={styles.redirect}>
							Dont have account? 
							<Link href="/" passHref>
								<a style={{ color: 'yellow', fontWeight: 200, }}> SIGN UP</a>
							</Link>
						</div>
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

export default Login;
