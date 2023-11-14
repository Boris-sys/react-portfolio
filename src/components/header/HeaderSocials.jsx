import React from 'react'
import {BsLinkedin, BsGithub} from 'react-icons/bs'
import {BiLogoGmail} from 'react-icons/bi'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/boris-kerbs/" target='_blank' rel="noreferrer"><BsLinkedin/></a>
        <a href="https://github.com/Boris-sys" target='_blank' rel="noreferrer"><BsGithub/></a>
        <a href="mailto:boriskerbs@gmail.com" target='_blank' rel="noreferrer"><BiLogoGmail/></a>
    </div>
  )
}

export default HeaderSocials