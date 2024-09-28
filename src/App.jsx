import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Services from './components/services/Services'
import Portfolio from './components/portfolio/Portfolio'
import Testimonials from './components/testimonials/Testimonials'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import aTypeData from '../src/assets/poc/aTypeData.json'
import bTypeData from '../src/assets/poc/bTypeData.json'

export const App = () => {
  return (
    <>
      <Header />
      <Nav />
      {/* <About /> */}
      <div>
        {aTypeData.map((element) => (
          <About title={element.title} body={element.body} badges={element.badges}/>
        ))}
      </div>

      <Testimonials elements={bTypeData}/>
      {/* <Services /> */}
      {/* <Portfolio /> */}

      <Contact />
      <Footer />
    </>
  )
}

export default App
