import React from 'react'
import './Services.css'
import service from '../../assets/service.jpg'
import flight from '../../assets/flight.png'
import accomodation from '../../assets/accomodation.png'
import luggage from '../../assets/luggage.png'

const Services = () => {
  return (
    <div className='service'>
        <div className="serv-defImg">
            <img src={service}  alt="" />
        </div>
        <div className="serv-def">
            <h2>Why choose us</h2>
            <p>Enjoy every experience in every place you vist and discover new and affordable adventures of course.</p>
            <div className="sub-service">
              <img src={flight} className='left-img'></img>
              <div className="servicelist">
                  <h3>Flight Ticket</h3>
                  <p>Take flight to your dreams, seamless journey, incredible destinations.</p>
              </div>
            </div>


            <div className="sub-service">
              <img src={accomodation} className='left-img'></img>
              <div className="servicelist">
                  <h3>Acomodation</h3>
                  <p>Your home away from home. comfort, luxury, and memorable experience.</p>
              </div>
            </div>


            <div className="sub-service">
              <img src={luggage} className='left-img'></img>
              <div className="servicelist">
                  <h3>Packaged tour</h3>
                  <p>Pack your bags. We'll handle the rest. Unforgettable experience.</p>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Services