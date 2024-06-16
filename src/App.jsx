import React from 'react'
import Navbar from './Components/navbar/Navbar.jsx'
import Hero from './Components/Hero/Hero.jsx'
import About from './Components/About/About.jsx'
import videoBg from './assets/videoBg.mp4'
import MyProjects from './Components/MyProjects/MyProjects.jsx'

const App = () => {
  return (
    <div className='container'>
      <video src={videoBg} autoPlay loop muted/>
      <Navbar/>
      <Hero/>
      <About/>
      <MyProjects/>
    </div>
  )
}

export default App