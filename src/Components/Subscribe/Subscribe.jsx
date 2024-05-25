import React from 'react'
import './Subscribe.css'


const Subscribe = () => {
  return (
    <div className='subscribe'>
        <div className="subscribe-content">
            <h1>Subscribe to get the latest offers, coupons and more! Be the first member to know.</h1>
            <div className='input_subscribe'>
                <input type='email' placeholder='Enter your email'></input>
                <button className='btn'>Subscribe</button>
            </div>
        </div>
    </div>
  )
}

export default Subscribe