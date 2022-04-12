import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

import './About.scss';
import { AppWrap, MotionWrap } from '../../wrapper';
import axios from 'axios';

const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {

   axios.get('/.netlify/functions/getter', { params: { "query": '*[_type == "abouts"] | order(_createdAt asc)'  } })
   .then((data) => {
     setAbouts(data.data)
   })
  

  }, [])
  
  return (
    <>
      {abouts.length && (
        <>

          <div className="app__profiles">
            <motion.div
                whileInView={{ opacity: 1 }}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.5, type: 'tween' }}
                className="app__profile-main"
              >
              <div className="app__profile-main-item">
                <img src={abouts[0].image} alt={abouts[0].title} />
                <h2 className="bold-text" style={{ marginTop: 20 }}>{abouts[0].title}</h2>
                <p className="p-text" style={{ marginTop: 10 }}>
                  {abouts[0].message}<br />
                                   </p>
              </div>
            </motion.div>
            <div className="app__profile-children">
              {abouts.slice(1).map((about, index) => (
              <motion.div
                whileInView={{ opacity: 1 }}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.5, type: 'tween' }}
                className="app__profile-item"
                key={about.title + index}
              >
                <img src={about.image} alt={about.title} />
                <h2 className="bold-text" style={{ marginTop: 20 }}>{about.title}</h2>
                <p className="p-text" style={{ marginTop: 10 }}>{about.message}</p>

              </motion.div>
            ))}
            </div>
          </div>

        </>
      )}


    </>
  )
}

export default AppWrap(MotionWrap(About, 'app__about'), 'about', 'app__whitebg')