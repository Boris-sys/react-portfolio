import React from 'react'
import './about.css'
import MeAbout from '../../assets/poc/placeholder.png'
import { BsFillAwardFill } from 'react-icons/bs'
import { FiUsers } from 'react-icons/fi'
import { FaCogs } from 'react-icons/fa'

export default function About({ title, body, badges }) {
  const badgeList = badges ?? null
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>{title}</h2>
      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={MeAbout} alt="About" />
          </div>
        </div>

        {/* When mobile sizing applied and articles numbers not even the last card should be centered */}
        <div className='about__content'>
          <div className='about__cards'>
            {badges?.map((element, index) => (
              <article className='about__card'>
              <BsFillAwardFill className='about__icon' />
              <h3>{element.title}</h3>
              <h5>{element.subtitle}</h5>
              <small>{element.footer}</small>
            </article>
            ))}
          </div>
          <p>
            {body}
          </p>
          <p></p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}
