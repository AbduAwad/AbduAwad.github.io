import React from 'react'
import './Hero.css'
import videoBg from '../../assets/videoBg.mp4'
import rightArrow from '../../assets/right_arrow.png'
import Typewriter from 'typewriter-effect';

const Hero = () => {
  return (
    <div className='hero'>
        <video src={videoBg} autoPlay loop muted/>
        <div className='content'>
            <h1>Abdulrahman Awad</h1>
            <p>
                <Typewriter
                options={{
                    autoStart: true,
                    loop: true,
                    delay: 80,
                    strings: ["Welcome to my portfolio! 🚀 "],
                    
                }}
                />
            </p>
            {/* <button className='btn'>About<img src={rightArrow} alt=''></img></button> */}
        </div>
    </div>
  )
}

export default Hero