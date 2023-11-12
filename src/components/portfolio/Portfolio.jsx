import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'

const data = [
  {
    id: 1,
    Image: IMG1,
    title: "Proyecto 1",
    git: "github.com",
    demo: "github.com",
  },
  {
    id: 2,
    Image: IMG2,
    title: "Proyecto 2",
    git: "github.com",
    demo: "github.com",
  },
  {
    id: 3,
    Image: IMG3,
    title: "Proyecto 3",
    git: "github.com",
    demo: "github.com",
  },
  {
    id: 4,
    Image: IMG4,
    title: "Proyecto 4",
    git: "github.com",
    demo: "github.com",
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5> My Rrecent Work</h5>
      <h2>Portfolio</h2>
      <div className='container portfolio__container'>

        {
          data.map(({ id, Image, title, github, demo }) => {
            return (

              <article key={id} className='portfolio__item'>
                <div className='portfolio__item-image'>
                  <img src={Image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className='portfolio__item-cta'>
                  <a href={github} className='btn' target='_blank'>Github</a>
                  <a href={demo} className='btn' target='_blank'>Demo</a>
                </div>
              </article>

            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio