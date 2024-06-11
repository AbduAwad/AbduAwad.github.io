import React from 'react' // Import the main React library
import './Navbar.css' // Import the CSS file
import logo from '../../assets/image.png' // Import the logo image

const Navbar = () => {
  return (
    <nav className='container'>
      <div className='logo-container'>
        <img src={logo} alt="" className='logo' />
        <span className='name'>Abdulrahman Awad</span>
      </div>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Projects</li>
        <li>Work Experience</li>
        <li><button className='btn'>Contact</button></li>
      </ul>
    </nav>
  );
};

export default Navbar;
