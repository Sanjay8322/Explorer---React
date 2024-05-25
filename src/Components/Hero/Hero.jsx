import React from 'react'
import './Hero.css'
import hero from '../../assets/hero.jpg'
import flight from '../../assets/flight.png'
import travel from '../../assets/travelNew.jpg'
const Hero = () => {
  return (
   
        <div className="hero">
            <div className="left-hero">
                <h2>Discover Your Adventure: Explore the World with Explorer Travel Co.</h2>
                <p>Plan and book your perfect trip with expert advice, travel trips & inspiration from us.</p>
                <button className='btn' >Explore more</button>
            </div>
            <div className="right-hero">
                <img src={travel} className='hero-img' alt="" />
            </div>
        </div>
   
  )
}

export default Hero