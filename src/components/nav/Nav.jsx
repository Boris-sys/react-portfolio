import React from 'react'
import './nav.css'
import {AiOutlineHome, AiOutlineUser} from 'react-icons/ai'
import {BiBook, BiMessageAltDetail,BiHomeAlt} from 'react-icons/bi'
import {FaRegHandshake} from 'react-icons/fa'

const Nav = () => {
  return (
    <nav>
      <a href="#"><BiHomeAlt/></a>
      <a href="#about"><AiOutlineUser/></a>
      <a href="#experience"><BiBook/></a>
      <a href="#services"><FaRegHandshake/></a>
      <a href="#contact"><BiMessageAltDetail/></a>
    </nav>
  )
}

export default Nav