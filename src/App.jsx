import React from 'react'
import Navbar from './Components/navbar/Navbar.jsx'
import Hero from './Components/Hero/Hero.jsx'
import About from './Components/About/About.jsx'
import videoBg from './assets/videoBg.mp4'
const App = () => {
  return (
    <div className='container'>
      <video src={videoBg} autoPlay loop muted/>
      <Navbar/>
      <Hero/>
      <About/>
    </div>
  )
}

export default App