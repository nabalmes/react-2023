import React from 'react'
import {Link} from 'react-router-dom'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {RiServiceLine} from 'react-icons/ri'


const Nav = () => {
  return (
    <nav className='bg-nav-light dark:bg-nav-dark text-md py-2 leading-8 text-nav-dark dark:text-nav-light'>
      <Link to="/"><AiOutlineHome/></Link>
      <Link to="/about" ><AiOutlineUser/></Link>
      <Link to="/work" ><RiServiceLine/></Link>
    </nav>
  )
}

export default Nav

