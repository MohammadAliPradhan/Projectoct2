import React from 'react'
import styles from '../style'
import { arrowUp } from '../assets'
import { Link } from 'react-router-dom'
import "../index.css"

const GetStarted = () => {
  return (
    
    <Link to ="/aboutus"><div className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}>
      <div className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}>
        <div className={`${styles.flexStart} flex-row`}>
        <Link to ="/aboutus"><p className='font-poppins font-medium text-[18px] leading-[23px] mr-2'>
            <span className='text-gradient' id='spanGetStarted'>Get</span>
          </p></Link>
          <Link to="aboutus"><img
            src={arrowUp}
            alt='arrow'
            className='w-[23px] h-[23px] object-contain'
          /></Link>
        </div>
        <Link to="/aboutus"><p className='font-poppins font-medium text-[18px] leading-[23px]'>
          <span className='text-gradient ' id='spanGetStarted'>Started</span>
        </p></Link>
      </div>
    </div></Link>
  )
}

export default GetStarted
