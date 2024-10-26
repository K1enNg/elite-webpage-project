import React from 'react'
import "./navbar.css"
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <header className="header">
        <h1 className='elite'>ELITE</h1>
            <nav className="navbar">
                <a href="/">News</a>
                <Link to='/about'>About</Link>
                <a href="/">Categories</a>
                <Link to='/contact'>Contact Us</Link>
            </nav>
    </header>
  )
}

export default Navbar