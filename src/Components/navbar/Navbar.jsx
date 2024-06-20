import React from 'react' // Import the main React library
import './Navbar.css' // Import the CSS file
import logo from '../../assets/image.png' // Import the logo image
import AnchorLink from 'react-anchor-link-smooth-scroll'
import menu_open from '../../assets/menu_open.png'
import menu_close from '../../assets/menu_close.png'
const Navbar = () => {

  const [menu, setMenu] = React.useState(false);
  const menuRef = React.useRef();

  const toggleMenu = () => {
    setMenu(!menu);
    if (!menu) {
      menuRef.current.style.right = "0"; // Close the menu if it's open
    } else {
      menuRef.current.style.right = "-160px"; // Open the menu if it's closed
    }
  }

  return (
    <nav className='nav-container'>
      <div className="navbar">
        <img src={menu_open} onClick={toggleMenu}/>
        <ul className='nav-menu' style={{ right: menu ? "0" : "-160px" }}>
          <img src={menu_close} onClick={toggleMenu} ref={menuRef} />
          <li>
            <AnchorLink className='anchor-link' offset={50} href="#home" onClick={() => setMenu(false)}>Home</AnchorLink>
          </li>
          <li>
            <AnchorLink className='anchor-link' offset={50} href="#about" onClick={() => setMenu(false)}>About</AnchorLink>
          </li>
          <li>
            <AnchorLink className='anchor-link' offset={50} href="#projects" onClick={() => setMenu(false)}>Projects</AnchorLink>
          </li>
          <li>
            <AnchorLink className='anchor-link' offset={50} href="#work" onClick={() => setMenu(false)}>Experience</AnchorLink>
          </li>
          <li>
            <a href ='public/Abdulrahman_Awad_Resume.pdf' className='anchor-link' download>Resume</a>
          </li>
          <li>
            <AnchorLink className='anchor-link' offset={50} href="#contact" onClick={() => setMenu(false)}>Contact</AnchorLink>
          </li>
  
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;