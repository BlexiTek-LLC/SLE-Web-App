import React from 'react'

import style from '../../styles/Utils.module.css'

function LoadingScreen() 
{
  return (
    <div className={style.container}>
        <span className={style.back}>
            <span>L</span>
            <span>o</span>
            <span>a</span>
            <span>d</span>
            <span>i</span>
            <span>n</span>
            <span>g</span>
        </span>
    </div>
  )
}

export default LoadingScreen