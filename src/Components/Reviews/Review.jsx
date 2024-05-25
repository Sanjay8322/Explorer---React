import React, { useState } from 'react'
import './Review.css'
import user1 from '../../assets/user-1.png'
import user2 from '../../assets/user-2.png'
import user3 from '../../assets/user-3.png'
import user4 from '../../assets/user-4.png'
import upArrow from '../../assets/upArrow.png'
import downarrow from '../../assets/downArrow.png'

const users = [
    {
      id: 1,
      name: {
        firstName: "John",
        lastName: "Doe"
      },
      review: "Great product, very satisfied with the quality and customer service.",
      imageSrc: user1
    },
    {
      id: 2,
      name: {
        firstName: "Jane",
        lastName: "Smith"
      },
      review: "Good value for money, but shipping was delayed.",
      imageSrc: user2
    },
    {
      id: 3,
      name: {
        firstName: "Michael",
        lastName: "Johnson"
      },
      review: "Excellent performance and easy to use. Highly recommend!",
      imageSrc: user3
    },
    {
      id: 4,
      name: {
        firstName: "Emily",
        lastName: "Davis"
      },
      review: "The product did meet my expectations, and support was helpful.",
      imageSrc: user4
    }
  ];


const Review = () => {

  const [ prevIndex, setCurrentIndex ]=useState(0)
  const handleUpArrowClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : users.length - 1));
  };

  const handleDownArrowClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex < users.length - 1 ? prevIndex + 1 : 0));
  };

  return (
    <div className='review'>
        <div className="leftReview">
            <h1>
                What people say about us!
            </h1>
        </div>
        <div className="rightReview">
            <div className="carouselContainer">
                <img src={upArrow} className='arrowBtn' onClick={handleUpArrowClick}></img>
                <div className="carouselItem">  
                    <img src={users[prevIndex].imageSrc}></img>
                    <div className="reviewContent">
                        <h3>{users[prevIndex].name.firstName+" "+users[prevIndex].name.lastName}</h3>
                        <p>"{users[prevIndex].review}"</p>
                    </div>
                </div>
                <img src={downarrow}  className='arrowBtn' onClick={handleDownArrowClick}></img>
            </div>
        </div>
    </div>
  )
}

export default Review