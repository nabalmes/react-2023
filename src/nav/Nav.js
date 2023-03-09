import React from 'react'
import {NavLink} from 'react-router-dom'
import './nav.css'
import {AiOutlineHome, AiOutlineUser} from 'react-icons/ai'
import {RiServiceLine} from 'react-icons/ri'


const Nav = () => {
  return (
    <nav className='bg-nav-light dark:bg-nav-dark text-md py-2 leading-8 text-nav-dark dark:text-nav-light'>
      <NavLink className="navBar-link" to="/"><AiOutlineHome/></NavLink>
      <NavLink className="navBar-link" to="/about" ><AiOutlineUser/></NavLink>
      <NavLink className="navBar-link" to="/work" ><RiServiceLine/></NavLink>
    </nav>
  )
}

export default Nav

