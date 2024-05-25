import React from 'react'
import './Places.css'
import place1 from '../../assets/place1.jpg'
import place2 from '../../assets/place2.jpg'
import place3 from '../../assets/place3.jpg'

const Places = () => {
  return (
    <div className='places'>
    <div className="placeHeading">
        <h2>Top destinations</h2>
        <h3>View all</h3>
    </div>
       <div className="destinations">
            <div className="placeImages">
                <img src={place1} alt="" />
                <div className='placeDef'>
                    <div className='def-child'>
                        <h3>Rome, Italy</h3>
                        <h3>$5k</h3>
                    </div>
                </div>
                <div className="tripTime">
                    <h2>10 days</h2>
                </div>
            </div>

            <div className="placeImages">
                <img src={place2} alt="" />
                <div className='placeDef'>
                    <div className='def-child'>
                        <h3>London, UK</h3>
                        <h3>$3k</h3>
                    </div>
                </div>
                <div className="tripTime">
                    <h2>15 days</h2>    
                </div>
            </div>

            <div className="placeImages">
                <img src={place3} alt="" />
                <div className='placeDef'>
                    <div className='def-child'>
                        <h3>Germany, Europe</h3>
                        <h3>$15k</h3>
                    </div>
                </div>
                <div className="tripTime">
                    <h2>20 days</h2>    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Places