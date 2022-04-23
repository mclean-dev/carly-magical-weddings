import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import axios from 'axios'


import { AppWrap, MotionWrap } from '../../wrapper'
import './Services.scss'

const Services = () => {
  const [activeFilter, setActiveFilter] = useState('Weddings')
  const [animateCard, setAnimateCard] = useState([{ y: 0, opacity: 1 }])
  const [services, setServices] = useState([])
  const [filterServices, setFilterServices] = useState([])

  useEffect(() => {
    const query = '*[_type == "services"] | order(_createdAt asc)';
    axios.get('/.netlify/functions/getter', { params: { "query": `${query}`  } })
    .then((data) => {
      setServices(data.data)
      setFilterServices(data.data.filter((service) => service.tag.includes('Weddings')));
    })
   

  }, [])
  
  const handleServiceFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{y: 100, opacity: 0}]);

    setTimeout(() => {
      setAnimateCard([{y: 0, opacity: 1}]);

      setFilterServices(services.filter((service) => service.tag.includes(item))); 
      
    }, 500)

  }
  return (
    <>
      <h2 className='head-text'>What I can do for <span>You</span></h2>
      {services.length ? (
      <>
      <div className="app__service-filter">
        {['Weddings', 'Elopements', 'Peer LGBTQIA+ Consultation', 'Premarital Counseling', 'Travel'].map((item, index) => (
          <div
            key={index}
            onClick={() => handleServiceFilter(item)}
            className={`app__service-filter-item app__flex p-text ${activeFilter === item ? 'item-active' : ''}`}
          >
            {item}
          </div>
        ))}
      </div>
      <motion.div
        animate={animateCard}
        transition={{duration: 0.5, delayChildren: 0.5 }}
        className="app__service-portfolio"
        initial={false}

      >
        {filterServices.map((service, index) => (
          <div className="app__service-item app__flex" key={index}>
            
          
              <h4 className="bold-text">{service.service}{service.price ? ` - ${service.price}` : ''}</h4>
              <p className="p-text" style={{ marginTop: 10 }}>{service.description}{service.url ? `For more info, see ${service.url}.` : ''}</p>
              
          </div>
        ))}
      </motion.div>
     </>): <p className="p-text app__error">We're sorry, there was an error retrieving the "Services" section! <br />Please email Carly at carly@carlyjanemiller.com to let them know.</p>}
    </>
  )
}

export default AppWrap(MotionWrap(Services, 'app__services'),'services','app__whitebg')