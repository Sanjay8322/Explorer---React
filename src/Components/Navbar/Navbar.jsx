import React from 'react'
import logo from '../../assets/logo.png'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='container'>
        <div className="navbar">
            <img src={logo} className='logo' alt="" />
            <ul>
                <li>About</li>
                <li>Our tours</li>
                <li>Explore</li>
                <li>Guides</li>
                <li>Contact</li>
                <li><button className='btn'>Register</button></li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar