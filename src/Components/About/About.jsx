import React from 'react'
import './About.css'
import aboutImg from '../../assets/compImg.png'
const About = () => {
  return (
    
    <div className='about'>
        <div className='about-title'>
            <h1>About Me</h1>
        </div>
        <div className='about-sections'>
            <div className='about-right'>
                <div className='about-para'>
                    <p>
                        Hello! I'm Abdulrahman Awad, a dedicated and passionate software developer based in Ottawa, Ontario. 
                        Currently pursuing a Bachelor of Computer Science Honours with a minor in mathematics at Carleton University, 
                        I am specializing in A.I and Machine Learning and look to delve deeper into the field of Artificial Intellegence 
                        and Machine Learning through real world applications. Below are my most used languages.
                    </p>
                </div>
                <div className='about-skills'>
                    <div className='about-skill'><p>Python</p><hr style={{width:"90%"}}/></div>
                    <div className='about-skill'><p>Java</p><hr style={{width:"70%"}}/></div>
                    <div className='about-skill'><p>JavaScript</p><hr style={{width:"80%"}}/></div>
                    <div className='about-skill'><p>C/C++</p><hr style={{width:"70%"}}/></div>
                </div>
            </div>
        </div>
        <div className="about-acheivments">
            <div className="about-acheivement">
                <h1>5+</h1>
                <p>YEARS PROGRAMMING EXPERIENCE</p>
            </div>
            <hr />
            <div className="about-acheivement">
                <h1>50+</h1>
                <p>PROJECTS</p>
            </div>
            <hr />
            <div className="about-acheivement">
                <h1>1+</h1>
                <p>YEARS WORK EXPERIENCE</p>
            </div>
        </div>
    </div>
  )
}

export default About