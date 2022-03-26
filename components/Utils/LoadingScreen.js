import React from 'react'

import style from '../../styles/Utils.module.css'

function LoadingScreen() 
{
  return (
    <div className={style.container}>
        <img src='/assets/landingPage/bigSleLogo.png' className={style.loadingLogo}/>
        <p className={style.loadingPara}>Student Loan Experiment <br /> Let's Take This Up A Notch</p>
    </div>
  )
}

export default LoadingScreen