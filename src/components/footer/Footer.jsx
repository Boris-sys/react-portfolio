import React from 'react'
import './footer.css'
import {BsLinkedin, BsGithub} from 'react-icons/bs'
import {BiLogoGmail} from 'react-icons/bi'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Boris Kerbs</a>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#service">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className='footer__socials'>
      <a href="https://www.linkedin.com/in/boris-kerbs/" target='_blank' rel="noreferrer"><BsLinkedin/></a>
        <a href="https://github.com/Boris-sys" target='_blank' rel="noreferrer"><BsGithub/></a>
        <a href="mailto:boriskerbs@gmail.com" target='_blank' rel="noreferrer"><BiLogoGmail/></a>
      </div>

      <div className='footer__copyright'>
        <small>&copy; Boris Kerbs. All rights reserrved.  ( ͡° ͜ʖ ͡°) </small>
      </div>
    </footer>
  )
}

export default Footer