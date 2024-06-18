import React from 'react';
import './Footer.css';

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
  return (
    <div className="footer">
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">© 2024 Abdulrahman Awad</p>
        <div className="social-icons">
          <a href="https://www.linkedin.com/in/abdulrahmansawad" className="social-icon linkedin">
            <LinkedInIcon />
          </a>
          <a href="https://github.com/AbduAwad" className="social-icon github">
            <GitHubIcon />
          </a>
          <a href="mailto:abdulrahmansawad@gmail.com" className="social-icon email">
            <EmailIcon />
          </a>
          <a href="https://www.instagram.com/_abduawad" className="social-icon instagram">
            <InstagramIcon />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
