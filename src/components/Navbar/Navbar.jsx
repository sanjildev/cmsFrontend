import React from 'react'
import './Navbar.css'
const Navbar = () => {
  return (
    <>
        <nav className="navbar">
        <div className="logo">
            <h1>MMA HUB</h1>
        </div>

        <ul className="nav-links">
            <li><a href="#">Home</a></li>
            <li><a href="#">News</a></li>
            <li><a href="#">Fighters</a></li>
            <li><a href="#">Events</a></li>
            <li><a href="#">Rankings</a></li>
            <li><a href="#">Contact</a></li>
        </ul>

        <a href="#" className="btn">WATCH NOW</a>
    </nav>
    </>
  )
}

export default Navbar