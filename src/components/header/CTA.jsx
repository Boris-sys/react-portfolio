import React from 'react'
import CV from '../../assets/cv.pdf'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} download className='btn'>Contact Admin</a>
        <a href="#contact" className='btn btn-primary'>Cafecito</a>
    </div>
  )
}

export default CTA
