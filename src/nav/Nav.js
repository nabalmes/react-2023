import React, { useState } from 'react'
import {NavLink} from 'react-router-dom'
import './nav.css'
import {AiOutlineHome, AiOutlineUser} from 'react-icons/ai'
import {RiServiceLine} from 'react-icons/ri'


const Nav = () => {
  const [isActive, setIsActive] = useState(false)
  const handleClick = () => {
    setIsActive(!isActive)
  }
  return (
    <nav className='bg-nav-light dark:bg-nav-dark text-md py-2 leading-8 text-nav-dark dark:text-nav-light'>
      <NavLink onClick={handleClick} className="navBar-link" to="/"><AiOutlineHome/></NavLink>
      <NavLink onClick={handleClick} className="navBar-link" to="/about" ><AiOutlineUser/></NavLink>
      <NavLink onClick={handleClick} className="navBar-link" to="/work" ><RiServiceLine/></NavLink>
    </nav>
  )
}

export default Nav

