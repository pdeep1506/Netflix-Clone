import React from 'react'
import Banner from './Banner.js'
import './HomeScreen.js'
import Nav from './Nav.js'
const HomeScreen = () => {
  return (
    <div className='homescreen'>
    {/* nav*/}
      <Nav></Nav>
      
      {/* Banner */}
      <Banner></Banner>

      {/* Row */}
    
    </div>
    )
}

export default HomeScreen