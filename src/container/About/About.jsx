import React, { useState, useEffect } from 'react'


import './About.scss';
import { urlFor, client } from '../../client';
import { AppWrap, MotionWrap } from '../../wrapper';


const About = () => {
  const [about, setAbout] = useState([]);

  useEffect(() => {
   const query = '*[_type == "about"]';

   client.fetch(query)
   .then((data) => setAbout(data))
  }, [])


  
  return (
    <>
      {about.length && (
        <>
          
          <div className="app__profile">
          <img src={urlFor(about[0].imgUrl)} alt={about[0].name} />
            
        <p className="p-text" style={{ marginTop: 10 }}>{about[0].message}</p>
        </div>
        </>
      )}

        
    </>
  )
}

export default AppWrap(MotionWrap(About, 'app__about'), 'about', 'app__primarybg')