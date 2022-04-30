import axios from '../axios'
import React, { useEffect, useState } from 'react'
import './Row.css'
const Row = (props) => {
    const [movieData,setMovieData] = useState([]);
    const url = props.fetchUrl
    const fData = async()=>{
        await axios.get(url).then((res)=>{
            // console.log(res.data.results)
            setMovieData(res.data.results)
        }).catch((err)=>{
            console.log(err)
        })
    }
    useEffect(()=>{
        fData();
    },[props.fetchUrl])
    if(!movieData){
        return <div></div>
    }
    const base_url= 'https:image.tmdb.org/t/p/original/'
  return (
    <div className='row'>
    <h2>{props.title}</h2>
    <div className='row_posters'>
    {
        movieData.map((item,j)=>{
            // console.log('item',item)
            return <>
         <img src={`${base_url}${props.isLargeRow? item.poster_path: item.backdrop_path}`}  
         className={`row_poster ${props.isLargeRow? 'row_posterLarge':''}`} 
         key={j}></img> 
                
                </>
            })
        }
        </div>
    
    </div>
  )
}

export default Row