import React from 'react'
import './about.css'
import MeAbout from '../../assets/me-about.jpg'
import { BsFillAwardFill } from 'react-icons/bs'
import { FiUsers } from 'react-icons/fi'
import { FaCogs } from 'react-icons/fa'

export const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={MeAbout} alt="About" />
          </div>
        </div>

        {/* When mobile sizing applied and articles numbers not even the last card should be centered */}
        <div className='about__content'>
          <div className='about__cards'>

            <article className='about__card'>
              <BsFillAwardFill className='about__icon' />
              <h5>Experience</h5>
              <small> 2+ Years Wotking</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon' />
              <h5>Clients</h5>
              <small>Muchos xd</small>
            </article>

            <article className='about__card'>
              <FaCogs className='about__icon' />
              <h5>Projects</h5>
              <small> 4 Completed</small>
            </article>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia, earum? Harum error, 
            eligendi nulla laboriosam vel dolorem libero esse quam ipsa debitis illo delectus fugiat 
            aspernatur officia soluta, facilis aliquam.
          </p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About