import React from 'react'
import './portfolio.css'
import CaseStudyReq from '../../assets/Placeholder Req.pdf'
import CaseStudySol from '../../assets/Placeholder Case study.pptx'
import IMG1 from '../../assets/portfolio teamwork 1.jpg'
import IMG2 from '../../assets/portfolio teamwork 2.jpg'
import IMG3 from '../../assets/portfolio teamwork 3.jpg'
import IMG4 from '../../assets/portfolio solowork 1.jpg'
import IMG5 from '../../assets/portfolio solowork 2.jpg'
import IMG6 from '../../assets/portfolio solowork 3.jpg'


const teamwork = [
  {
    id: 1,
    Image: IMG1,
    title: "Book-selling eCommerce Web",
    url: "https://commerce.editorialaces.com/",
    btText: "Site",
  },
  {
    id: 2,
    Image: IMG2,
    title: "Book subscription Mobile PWA",
    url: "https://pedidos.editorialaces.com/",
    btText: "Site",
  },
  {
    id: 3,
    Image: IMG3,
    title: "Decision Making KPI dashboard",
    url: "github.com",
    btText: "Peek",
  }
]

const solowork = [
  {
    id: 4,
    Image: IMG5,
    title: "Sudoku Assestment",
    url: "https://github.com/Boris-sys/PythonChallenge",
    btText: "Repo",
  },
  {
    id: 5,
    Image: IMG6,
    title: "Dash POC",
    url: "https://github.com/Boris-sys/TestingPythonDash",
    btText: "Repo",
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5> My Rrecent Work</h5>
      <h2>Portfolio</h2>
      <div className='container portfolio__subtitle'><h3>Team-Work</h3></div>
      <div className='container portfolio__container'>

        {
          teamwork.map(({ id, Image, title, url, btText }) => {
            return (

              <article key={id} className='portfolio__item'>
                <div className='portfolio__item-image'>
                  <img src={Image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className='portfolio__item-cta'>
                  <a href={url} className='btn' target='_blank'>{btText}</a>
                </div>
              </article>

            )
          })
        }
      </div>

      <div className='container portfolio__subtitle'><h3>Solo-Work</h3></div>
      <div className='container portfolio__container'>
      <article key={6} className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG4} alt="Case Study" />
          </div>
          <h3>Technical Case Study</h3>
          <div className='portfolio__item-cta'>
            <a href={CaseStudyReq} download className='btn'>Requeriments</a>
            <a href={CaseStudySol} download className='btn'>Analysis</a>
          </div>
        </article>


        {
          solowork.map(({ id, Image, title, url, btText }) => {
            return (

              <article key={id} className='portfolio__item'>
                <div className='portfolio__item-image'>
                  <img src={Image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className='portfolio__item-cta'>
                  <a href={url} className='btn' target='_blank'>{btText}</a>
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