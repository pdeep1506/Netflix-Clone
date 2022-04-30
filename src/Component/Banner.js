import axios from '../axios';
import React, { useState,useEffect } from 'react'
import './Banner.css'
import requests from './Request';


const Banner = () => {
    const [movie,setMovie] = useState([]);
    const fetchMovieData = async()=>{
      await axios.get(requests.fetchNetflixOriginals).then((res)=>{
  
        const randomNum =  Math.floor(Math.random() * res.data.results.length - 1)
        // console.log(res.data.results[randomNum])
        setMovie(res.data.results[randomNum])
      })

    }
    useEffect(()=>{
      fetchMovieData();
    },[])
    const truncate  = (string,n)=>{
            return string?.length > n?string.substring(0,n-1) +'...':string
    }
    if(!movie){
      return <div></div>
    }
    return (
      <>
      
      
        
        <header className='bann' style={{

            'backgroundImage': `url("https:image.tmdb.org/t/p/original/${movie.backdrop_path}")`,
            backgroundSize:'cover'
        }}>
        
        <div className='banner_contents'>
                 <h1 className='banner_title'>{movie?.title || movie?.name || movie?.original_name}</h1>
        </div>
        <div className='banner_buttons'>
            <button className='banner_button'>play</button>
            <button className='banner_button'>My List</button>
        </div>
        <h1 className='banner_desc'>{truncate(movie.overview,200)}</h1>


        <div className='banner-fadeBottom'></div>
        </header>
        </>
  )
}

export default Banner