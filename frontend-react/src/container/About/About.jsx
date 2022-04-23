import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import axios from 'axios';


import { AppWrap, MotionWrap } from '../../wrapper';
import { images } from '../../constants/'
import './About.scss';

const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
   const query = '*[_type == "abouts"] | order(_createdAt asc)';
   axios.get('/.netlify/functions/getter', { params: { "query": `${query}` } })

   .then((data) => {
     setAbouts(data.data)
   })
   .catch((error) => {
     console.log(error)
   })
  

  }, [])
  
  return (
    <>
      {abouts.length ? (
        <>

          <div className="app__profiles">
              {abouts.map((about, index) => (
              <motion.div
                whileInView={{ opacity: 1 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5, type: 'tween' }}
                className="app__profile-item"
                key={about.title + index.toString()}
              >
                <div className='app__profile-photo'><img src={about.image} alt={about.imgUrl.alt} /></div>
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
      ): <p className="p-text app__error">We're sorry, there was an error retrieving the "About" section! <br />Please email Carly at carly@carlyjanemiller.com to let them know.</p>}


    </>
  )
}

export default AppWrap(MotionWrap(About, 'app__about'), 'about', 'app__whitebg')