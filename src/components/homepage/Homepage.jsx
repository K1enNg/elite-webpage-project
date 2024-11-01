import React from 'react'
import './homepage.css'
import Navbar from '../navbar/Navbar'

const Homepage = () => {
  return (
    <>
    <body style={{
      background: `linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)),url(${'src/assets/background.png'})`,
      backgroundSize: `cover`,
      backgroundPosition: `center`,
      backgroundRepeat: `no-repeat`,
      position: `relative`,
    }}
    >
    <Navbar/>
        <div className="welcome-section">
        <div className="collab">
            <img src="src/assets/logo/elite_logo.png" id='elite-logo'/>
            <img src="src/assets/logo/lasalle_logo.png" id='lasalle-logo'/>
        </div>
        <h1>WELCOME TO ELITE</h1>
        <p>Innovate. Iterate. Dominate</p>
    </div>
    </body>
    </>
  )
}

export default Homepage