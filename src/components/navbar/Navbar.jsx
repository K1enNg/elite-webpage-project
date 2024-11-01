import React from 'react'
import "./navbar.css"
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <header className="header">
        <h1 className='elite'>ELITE</h1>
            <nav className="navbar">
                <Link to='/news'>News</Link>
                <Link to='/about'>About</Link>
                <Link to='/categories'>Categories</Link>
                <Link to='/contact'>Contact Us</Link>
            </nav>
    </header>
  )
}

export default Navbar