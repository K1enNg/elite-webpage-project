import React from 'react'
import './homepage.css'
import Navbar from '../navbar/navbar'

const Homepage = () => {
  return (
    <>
        <Navbar/>
        <div className="welcome-section">
        <div className="collab">
            <img src="src/assets/logo/elite_logo.png" id='elite-logo'/>
            <img src="src/assets/logo/lasalle_logo.png" id='lasalle-logo'/>
        </div>
        <h1>WELCOME TO ELITE</h1>
        <p>Innovate. Iterate. Dominate</p>
    </div>
    </>
  )
}

export default Homepage