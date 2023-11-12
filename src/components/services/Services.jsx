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
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </li>
          </ul>
        </article>

        {/* 2nd Services list */}
        <article className='service'>
          <div className='service__head'>
            <h3>ETLs</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </li>
          </ul>
        </article>

        {/* 3rd Services list */}
        <article className='service'>
          <div className='service__head'>
            <h3>DB Management</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services