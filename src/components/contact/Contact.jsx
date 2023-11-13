import React from 'react'
import './contact.css'
import{MdOutlineEmail} from 'react-icons/md'
import {BsLinkedin, BsWhatsapp} from 'react-icons/bs'

export const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        <div className='contact__options'>

          <article className='contact__options'>
            <MdOutlineEmail/>
            <h4>Email</h4>
            <h5>boriskerbs@gmail.com</h5>
            <a href="mailto:boriskerbs@gmail.com" target='_blank'>Write a mail</a>
          </article>

          <article className='contact__options'>
            <BsLinkedin/>
            <h4>LinkedIn</h4>
            <h5>Boris Kerbs</h5>
            <a href="https://www.linkedin.com/in/boris-kerbs/" target='_blank'>Send a message</a>
          </article>

          <article className='contact__options'>
            <BsWhatsapp/>
            <h4>WhatsApp</h4>
            <h5>+54 3434806931</h5>
            <a href="https://api.whatsapp.com/send?phone=543434806931" target='_blank'>Chat with me</a>
          </article>

        </div>

        <form action="">
          <input type="text" name="name" placeholder='Your Full Name' required/>
          <input type="email" name="email" placeholder='Your Email' required/>
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact