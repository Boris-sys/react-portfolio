import React from 'react'
import './footer.css'
import {BsLinkedin, BsGithub} from 'react-icons/bs'
import {BiLogoGmail} from 'react-icons/bi'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>UbShare</a>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">Services</a></li>
        <li><a href="#testimonials">Sales</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className='footer__socials'>
      <a href="https://www.linkedin.com/in/boris-kerbs/" target='_blank' rel="noreferrer"><BsLinkedin/></a>
        <a href="https://github.com/Boris-sys" target='_blank' rel="noreferrer"><BsGithub/></a>
        <a href="mailto:boriskerbs@gmail.com" target='_blank' rel="noreferrer"><BiLogoGmail/></a>
      </div>

      <div className='footer__copyright'>
        <small>&copy; UbShare. All rights reserrved.  ( ͡° ͜ʖ ͡°) </small>
      </div>
    </footer>
  )
}

export default Footer