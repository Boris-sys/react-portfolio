import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/aces-logo-500.png'
import AVTR2 from '../../assets/corebi-logo-500.png'
import AVTR3 from '../../assets/craftlabs-logo-500.png'
import AVTR4 from '../../assets/avatar4.jpg'

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
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum labore quas quis repellendus suscipit natus hic? Explicabo deserunt facilis qui consequuntur eaque veritatis tenetur placeat maxime eos quia, possimus architecto!'
  },
  {
    avatar: AVTR2,
    name: 'CoreBi',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum labore quas quis repellendus suscipit natus hic? Explicabo deserunt facilis qui consequuntur eaque veritatis tenetur placeat maxime eos quia, possimus architecto!'
  },
  {
    avatar: AVTR3,
    name: 'CraftLabs',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum labore quas quis repellendus suscipit natus hic? Explicabo deserunt facilis qui consequuntur eaque veritatis tenetur placeat maxime eos quia, possimus architecto!'
  },
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Places Where I Worked</h5>
      <h2>Companies</h2>
      <Swiper className='container testimonials__container' 
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      pagination={{ clickable: true }}>
        {
          data.map(({ avatar, name, description }, index) => {
            return (
              <SwiperSlide key={index} className='testimonials'>
                <div className='client__avatar'>
                  <img src={avatar} alt="Avatar One" />
                </div>
                <h5 className='client__name'>{name}</h5>
                <small className='client__review'>{description}</small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials