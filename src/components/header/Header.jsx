import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/poc/placeholder.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>This is</h5>
        <h1>UbShare</h1>
        <h5 className="text-light">Sharing Platform</h5>
        <CTA />
        <HeaderSocials />
        <div className='me'>
          {/* Picture should be png with transparent backgorund */}
          {/* bottom fadeout in bottom picture could be a nice option */}
          <img src={ME} alt="me" />
        </div>
      </div>
      {/* I should include theme switcher next to "Scroll Down" or at the bottom of the page */}
      <a href="#contact" className='scroll__down'>Scroll Down</a>
    </header>
  )
}

export default Header 