import React, { useState } from 'react'
import { BsInstagram, BsFacebook } from 'react-icons/bs';

import { images } from '../../constants'
import { AppWrap, MotionWrap } from '../../wrapper'
import './Footer.scss'


const Footer = () => {

  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [isFormSubmitted, setIsFormSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const { name, email, referredBy, eventDate, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value })
  }
  function encode(data) {
    return Object.keys(data)
      .map(
        (key) =>
          encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  }
  const handleSubmit = (e) => {

    const contact = {
      "form-name": 'contact',
      name: name,
      email: email,
      referredBy: referredBy,
      eventDate: eventDate,
      message: message
    }
    
    e.preventDefault();
    setLoading(true);
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode(contact),
    })
      .then(() => {
        setTimeout(() => {
          setLoading(false)
          setIsFormSubmitted(true)
          }, 750)
      })
      .catch((error) => alert(error));

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
        <form className="app__footer-form app__flex" name="contact" method="POST" onSubmit={handleSubmit}>
          <input type="hidden" name="form-name" value="contact" />
          <div className="app__flex">
            <input type="text" className="p-text" placeholder='Your Name(s) and Pronouns' name="name" value={name} onChange={handleChangeInput} required />
          </div>
          <div className="app__flex">
            <input type="email" className="p-text" placeholder='Your Email' name="email" value={email} onChange={handleChangeInput} required />
          </div>
          <div>
            <input type="text" name="referredBy" placeholder="How did you hear about me?" value={referredBy} onChange={handleChangeInput} className="p-text" required /> 
          </div>
          <div>
            <input type="text" name="eventDate" placeholder="Event Date (optional)" value={eventDate} onChange={handleChangeInput} className="p-text" />
          </div>
          <div>
            <textarea name="message" placeholder="Your Message" value={message} onChange={handleChangeInput} className="p-text" required />

          </div>
          <button className="p-text" type="submit" >{loading ? 'Sending' : 'Send Messsage'}</button>
        </form>
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