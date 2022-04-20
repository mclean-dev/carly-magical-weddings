import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

import './About.scss';
import { AppWrap, MotionWrap } from '../../wrapper';
import axios from 'axios';
import { images } from '../../constants/'

const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
   const query = '*[_type == "abouts"] | order(_createdAt asc)';
   axios.get('/.netlify/functions/getter', { params: { "query": `${query}`  } })

   .then((data) => {
     setAbouts(data.data)
   })
  

  }, [])
  
  return (
    <>
      {abouts.length && (
        <>

          <div className="app__profiles">
              {abouts.map((about, index) => (
              <motion.div
                whileInView={{ opacity: 1 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5, type: 'tween' }}
                className="app__profile-item"
                key={about.title + index}
              >
                <div className='app__profile-photo'><img src={about.image} alt={about.title} /></div>
                <div className="app__profile-spacer"></div>
                <p className="p-text" >{about.message}</p>

              </motion.div>
            ))}
          </div>
          <div className="app__profile-icons">
            <img src={images.blm} alt="BLM icon" />
            <img src={images.poly} alt="Polyamory icon" />
            <img src={images.trans} alt="Transgender icon" />
            <img src={images.bdsm} alt="BDSM icon" />
          </div>

        </>
      )}


    </>
  )
}

export default AppWrap(MotionWrap(About, 'app__about'), 'about', 'app__whitebg')