import React from 'react' // Import the main React library
import './Navbar.css' // Import the CSS file
import logo from '../../assets/image.png' // Import the logo image
// import { Link } from 'react-router-dom';
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Navbar = () => {

  const [menu, setMenu] = React.useState("home");

  return (
    <nav className='container'>
      <div className='logo-container'>
        <img src={logo} alt="" className='logo' />
        <span className='name'>Abdulrahman Awad Personal Portfolio</span>
      </div>
      <div className="navbar">
        <ul className='nav-menu'>
          <li><AnchorLink className='anchor-link' href="#home"><p onClick={()=>setMenu("home")}>Home</p></AnchorLink>{menu==="home"} </li>
          <li><AnchorLink className='anchor-link' offset = {50} href="#about"><p onClick={()=>setMenu("about")}>About</p></AnchorLink>{menu==="about"}</li>
          <li><AnchorLink className='anchor-link' offset = {50} href="#projects"><p onClick={()=>setMenu("projects")}>Projects</p></AnchorLink>{menu==="projects"}</li>
          <li><AnchorLink className='anchor-link' offset = {50} href="#work"><p onClick={()=>setMenu("work")}>Work Experience</p></AnchorLink>{menu==="work"}</li>
          <li><AnchorLink className='anchor-link' offset = {50} href="#contact"><p onClick={()=>setMenu("contact")}>Contact</p></AnchorLink>{menu==="contact"}</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;