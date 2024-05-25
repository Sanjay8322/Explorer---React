import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Services from './Components/Services/Services'
import Places from './Components/Places/Places'
import Review from './Components/Reviews/Review'
import Subscribe from './Components/Subscribe/Subscribe'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <div>
      <Navbar />

      <div className="container">
      <Hero />
      <Services />
      <Places />
      <Review />
      <Subscribe />
      </div>
      <Footer />
      </div>
    
  )
}

export default App