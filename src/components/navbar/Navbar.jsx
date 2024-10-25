import React from 'react'
import "./navbar.css"
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <header className="header">
        <a href="/" className='elite'>ELITE</a>
            <nav className="navbar">
                <a href="/">Home</a>
                <Link to='/about'>About</Link>
                <a href="/">Categories</a>
                <a href="/">Contact Us</a>
            </nav>
    </header>
  )
}

export default Navbar