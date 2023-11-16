import React from 'react'
import './services.css'
import { BiCheck } from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offerr</h5>
      <h2>Services</h2>

      <div className='container services__container'>

        {/* 1st Services list */}
        <article className='service'>
          <div className='service__head'>
            <h3>UI/UX Design</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Interaction display and gesture feedback handling.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Typography, readability and page layout management.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Animation and transition arrangement.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>User behavior and feeling control while navigating the aplication.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Load times and responsiveness priorization.</p>
            </li>
          </ul>
        </article>

        {/* 2nd Services list */}
        <article className='service'>
          <div className='service__head'>
            <h3>Data Engineering and ETLs</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>High-quality passes through and loads into Datawarehouse.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Relevant data identifiacation, cleaning and deduplication.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Pipeline building and management over evolving requirements.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Code versioning and smooth production implementations.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Cloud based process execution scheduling for large volumes of data.</p>
            </li>
          </ul>
        </article>

        {/* 3rd Services list */}
        <article className='service'>
          <div className='service__head'>
            <h3>Business Intelligence</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Raw data analying and decision-making process assisting</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Sensitive information management and user data safeguarding.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>insight sharing through reports.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Pattern finding for a better shcema visualization</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Data interpretation and active listening for problem comprehension.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services