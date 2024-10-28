import './App.css'
import ParallaxOne from './components/ParallaxOne'
import ParallaxTwo from './components/parallaxTwo'
import ParallaxThree from './components/ParallaxThree'
import TajMahal from './components/TajMahal'
import KeralaBoat from './components/KeralaBoat'
import GoldenTemple from './components/GoldenTemple'
import ParallaxFour from './components/ParallaxFour'
import Charminar from './components/Charminar'
import Logo from './assets/india_logo.png'
 

function App() {

  return (
    <>
      <div>
        <div className="navbar">
          <div className="logo"><img src={Logo} alt="" /></div>
          <div className="nav-links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
        <ParallaxOne />
        <KeralaBoat />
        <ParallaxTwo />
        <TajMahal />
        <ParallaxThree />
        <GoldenTemple />
        <ParallaxFour />
        <Charminar />
      </div>
    </>
  )
}

export default App
