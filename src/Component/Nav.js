import React, { useEffect, useState } from 'react'
import './Nav.css'
import Logo from '../../src/images/logo.png'
import Avatar from '../../src/images/avatar.png'
const Nav = () => {
    const [show,setShow] = useState(false)

    const transitionNavBar = ()=>{
        if(window.scrollY > 100){

            setShow(true)
        }
        else{
            setShow(false)
        }
    }
    useEffect(()=>{
        window.addEventListener('scroll',transitionNavBar)
        return ()=>window.removeEventListener('scroll', transitionNavBar)
    },[])
  return (
    <div className={`nav ${show && 'nav_black'}`}>
    <div className='nav_contents'>
        <img src={Logo} alt='logo' className='nav_logo'></img>
        <img src={Avatar} alt='avatar' className='nav_avatar'></img>

    </div>
    </div>
  )
}

export default Nav