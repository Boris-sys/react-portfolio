import React from 'react'
import {BsLinkedin, BsGithub} from 'react-icons/bs'
import {BiLogoGmail} from 'react-icons/bi'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="linkedin.com" target='_blank'><BsLinkedin/></a>
        <a href="github.com" target='_blank'><BsGithub/></a>
        <a href="gmail.com" target='_blank'><BiLogoGmail/></a>
    </div>
  )
}

export default HeaderSocials