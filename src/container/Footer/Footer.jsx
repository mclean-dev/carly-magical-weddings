import React, { useState } from 'react'

import { images } from '../../constants'
import { AppWrap, MotionWrap } from '../../wrapper'
import { client } from '../../client'
import './Footer.scss'
import { BsInstagram, BsFacebook } from 'react-icons/bs';



const Footer = () => {

  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [isFormSubmitted, setIsFormSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const { name, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value })
  }
  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: 'contact',
      name: name,
      email: email,
      message: message
    }

    client.create(contact)
      .then(() => {
        setLoading(false)
        setIsFormSubmitted(true)
      })
  }
  return (
    <>
      <h2 className="head-text">Let's Talk <span>Wedding</span></h2>

      <div className="app__footer-social">
        <a href="https://www.facebook.com/carlyjm" rel="noreferrer" target="_blank">
          <div>
            <BsFacebook />
          </div>
        </a>
        <a href="https://www.instagram.com/magicalweddingsbycarly/" rel="noreferrer" target="_blank">

          <div>
            <BsInstagram />
          </div>
        </a>
      </div>
      <div className="app__footer-cards">
        <div className="app__footer-card">
          <img src={images.email} alt="email" />
          <a href="mailto:carly@carlyjanemiller.com" className='p-text'>carly@carlyjanemiller.com</a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="mobile" />
          <a href="tel: +1 (252) 202-8982" className='p-text'>+1 (252) 202-8982</a>
        </div>
      </div>
      {!isFormSubmitted ?
        <div className="app__footer-form app__flex">
          <div className="app__flex">
            <input type="text" className="p-text" placeholder='Your Name' name="name" value={name} onChange={handleChangeInput} />
          </div>
          <div className="app__flex">
            <input type="email" className="p-text" placeholder='Your Email' name="email" value={email} onChange={handleChangeInput} />
          </div>
          <div>
            <textarea name="message" placeholder="Your Message" value={message} onChange={handleChangeInput} className="p-text" />

          </div>
          <button className="p-text" type="button" onClick={handleSubmit}>{loading ? 'Sending' : 'Send Messsage'}</button>
        </div>
        : <div><h3 className='head-text'>Thank you for getting in touch!</h3></div>
      }
    </>
  )
}

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app__primarybg'
)