import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/aces-logo-500.png'
import AVTR2 from '../../assets/corebi-logo-500.png'
import AVTR3 from '../../assets/craftlabs-logo-500.png'
import Placeholder from '../../assets/poc/placeholder.png'
//Swiper imports

import {Swiper, SwiperSlide} from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css'
import 'swiper/css/pagination'
//Swiper React components will likely to be removed in future versions.
//It is recommended to migrate to Swiper Element instead

const data = [
  {
    avatar: AVTR1,
    name: 'Asociacion Casa Editora Sudamericana',
    description: 'The "Asociación Casa Editora Sudamericana" (ACES) is one of the 63 publishing houses belonging to the Seventh-day Adventist Church. The IT department is in charge of developing solutions to expand the commercial aspect of the company to facilitate access to its books so more people can learn from the word of God.'
  },
  {
    avatar: AVTR2,
    name: 'CoreBI',
    description: 'CoreBI  is a Data & Analytics product and service innovation company offering strategy, design and consulting services to the most ambitious companies and brands in the region. Leveraging his design-driven approach to create cutting-edge solutions.'
  },
  {
    avatar: AVTR3,
    name: 'CraftLabs',
    description: 'CraftLabs is a software company that helps you building awesome solutions. With an agile process that is built on top of the best engineering practices. Their staff is comprised of full-stack developers and architects, who are versed in the very latest technologies and love what they do!'
  },
]

export default function Testimonials({ elements }) {
  return (
    <section id='testimonials'>
      <h5>Sales Header Details</h5>
      <h2>Sales to promote</h2>
      <Swiper className='container testimonials__container' 
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      pagination={{ clickable: true }}>
        {
          elements.map(({ id, title, body, imgDir }, index) => {
            return (
              <SwiperSlide key={index} className='testimonials'>
                <div className='client__avatar'>
                  <img src={Placeholder} alt={Placeholder} />
                </div>
                <h5 className='client__name'>{title}</h5>
                <small className='client__review'>{body}</small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

// export default Testimonials