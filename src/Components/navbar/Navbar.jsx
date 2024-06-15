import React from 'react' // Import the main React library
import './Navbar.css' // Import the CSS file
import logo from '../../assets/image.png' // Import the logo image
// import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='container'>
      <div className='logo-container'>
        <img src={logo} alt="" className='logo' />
        <span className='name'>Abdulrahman Awad Personal Portfolio</span>
      </div>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Projects</li>
        <li>Work Experience</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;