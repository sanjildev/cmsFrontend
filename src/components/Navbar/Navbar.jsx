import React from 'react'
import './Navbar.css'
import {Link, useNavigate} from 'react-router-dom'
const Navbar = () => {
  const navigate=useNavigate()
  return (
    <>
        <nav className="navbar">
        <div className="logo">
            <Link className='mmahub' to='/'><h1>MMA HUB</h1></Link>
        </div>

        <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><a href="#">News</a></li>
        </ul>

        <a onClick={()=>navigate('/createBlog')} className="btn">Add Blogs</a>
    </nav>
    </>
  )
}

export default Navbar