import React from 'react'
import './Contact.css'

import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Contact = () => {
  return (
    <div className="contact">
        <div className="contact-title">
            <h1>Get In Touch</h1>
        </div>
        <div className="contact-section">
            <div className="contact-left">
                <h1>Connect With Me</h1>
                <p>I am a Software Engineer currently looking for software engineering internship oppertunities! 
                    If you know any of any positions available, have any questions, or just want to get in touch, 
                    feel free to send me an email at <a href="mailto:abdulrahmansawad@gmail.com">abdulrahmansawad@gmail.com</a>
                </p>
                <div className="contact-details">
                    <div className="contact-detail">
                        <EmailIcon />
                        <p>abdulrahmansawad@gmail.com</p>
                    </div>
                    <div className="contact-detail">
                        <PhoneIcon />
                        <p>+1-613-410-8305</p>
                    </div>
                    <div className="contact-detail">
                        <LocationOnIcon />
                        <p>Ottawa, Ontario, Canada</p>
                    </div>
                </div>
            </div>
            <div className="contact-right">
                <label htmlFor="">Your Name</label>
                <input type="text" placeholder="Enter your name" name='name'/>
                <label htmlFor="">Your Email</label>
                <input type="email" placeholder="Enter your email" name='email'/>
                <label htmlFor="">Your Message</label>
                <textarea name="message" rows="8" placeholder="Enter your message"></textarea>
                <button type='submit' className='contact-submit'>Submit Message</button>
            </div>    
        </div>
    </div>
  )
}

export default Contact