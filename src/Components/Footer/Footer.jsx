import React from 'react'
import './Footer.css'
import logo from '../../assets/logo.png'
import insta from '../../assets/insta.png'
import pinterest from '../../assets/pinterest.png'
import twitter from '../../assets/twitter.png'

const Footer = () => {
  return (
    <div className='footer'>
            <div className="iconDiv">
                <img src={logo}></img>
            </div>
            <div className="linksDiv">
                <ul>
                    <li>Home</li>
                    <li>Contact</li>
                    <li>Our tours</li>
                    <li>Register</li>
                </ul>
                <br/>
                
                <ul>
                    <li><img src={insta}></img></li>
                    <li><img src={twitter}></img></li>
                    <li><img src={pinterest}></img></li>
                </ul>
            </div>
    </div>
  )
}

export default Footer