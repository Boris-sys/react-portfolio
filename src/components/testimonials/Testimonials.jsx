import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

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
    avatar: AVTR2,
    name: 'CraftLabs',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum labore quas quis repellendus suscipit natus hic? Explicabo deserunt facilis qui consequuntur eaque veritatis tenetur placeat maxime eos quia, possimus architecto!'
  },
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Places Where I Worked</h5>
      <h2>Companies</h2>
      <div className='container testimonials__container'>
        {
          data.map(({ avatar, name, description }, index) => {
            return (
              <article key={index} className='testimonials'>
                <div className='client__avatar'>
                  <img src={avatar} alt="Avatar One" />
                </div>
                <h5 className='client__name'>{name}</h5>
                <small className='client__review'>{description}</small>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Testimonials