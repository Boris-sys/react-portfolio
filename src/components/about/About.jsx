import React from 'react'
import './about.css'
import MeAbout from '../../assets/me-about3.jpg'
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
              <h3>Experience</h3>
              <h5>So far</h5>
              <small> 2+ Years Wotking</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon' />
              <h3>Companies</h3>
              <h5>I worked with</h5>
              <small>3 Worldwide</small>
            </article>

            <article className='about__card'>
              <FaCogs className='about__icon' />
              <h3>Projects</h3>
              <h5>Which I collaborated</h5>
              <small> 4 Completed</small>
            </article>
          </div>
          <p>
          After obtaining my university degree at the "Universidad Adventista del Plata" I evoked my professional effort 
          to get jobs that allow me to grow in the technical aspect and in the interpersonal aspect.<br/>Always seeking to 
          vary my stack to offer the best possible solution to the problems that are presented to me.
          </p>
          <p></p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About