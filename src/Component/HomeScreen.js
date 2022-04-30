import React from 'react'
import Banner from './Banner.js'
import './HomeScreen.js'
import Nav from './Nav.js'
import requests from './Request.js'
import Row from './Row.js'
const HomeScreen = () => {
  return (
    <div className='homescreen'>
    {/* nav*/}
      <Nav></Nav>
      
      {/* Banner */}
      <Banner></Banner>

      {/* Row */}
      <Row title='NETFLIX ORIGINALS' fetchUrl={requests.fetchNetflixOriginals} isLargeRow></Row>
      <Row title='Trending Now' fetchUrl={requests.fetchTrending} ></Row>
      <Row title='Action Movies' fetchUrl={requests.fetchActionMovies}></Row>
      <Row title='Comedy Movies' fetchUrl={requests.fetchComedyMovies}></Row>

      <Row title='Horror Movies' fetchUrl={requests.fetchHorrorMovies}></Row>
      <Row title='Romance Movies' fetchUrl={requests.fetchRomanceMovies}></Row>
      <Row title='Documentaries' fetchUrl={requests.fetchDocumentaries}></Row>
    </div>
    )
}

export default HomeScreen