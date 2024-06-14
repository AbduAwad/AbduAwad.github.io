import React from 'react'
import './Hero.css'
import Typewriter from 'typewriter-effect'

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';

const Hero = () => {
  return (
    <div className='hero'>
        <div className='content'>
            <h1>Abdulrahman Awad</h1>
            <p>
                <Typewriter
                options={{
                    autoStart: true,
                    loop: true,
                    delay: 60,
                    strings: ["Hi, Welcome to my Software Engineering Portfolio 🚀!"],
                    pauseFor: 6000,
                }}
                />
            </p>
            <div className='social-icons'>
              <a href='https://www.linkedin.com/in/abdulrahmansawad'>
                <div className = 'linkedin'>
                  <LinkedInIcon />
                </div>
              </a>
              <div className = 'github'>
                <a href='https://github.com/AbduAwad'> 
                  <GitHubIcon />
                </a>
              </div>
              <div className = 'email'>
                <a href = 'mailto: abdulrahmansawad@gmail.com'>
                 <EmailIcon />
                </a>
              </div>
                <a href='https://www.instagram.com/_abduawad'>
                  <div className = 'instagram'>
                    <InstagramIcon />
                  </div>
                </a>
            </div>
        </div>
    </div>
  )
}

export default Hero