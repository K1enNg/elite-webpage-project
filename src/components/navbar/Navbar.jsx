import React from 'react'
import "./navbar.css"

const Navbar = () => {
  return (
    <header className="header">
        <a href="/" className='elite'>ELITE</a>
            <nav className="navbar">
                <a href="/">Home</a>
                <a href="/">About</a>
                <a href="/">Services</a>
                <a href="/">Contact Us</a>
            </nav>
    </header>
  )
}

export default Navbar