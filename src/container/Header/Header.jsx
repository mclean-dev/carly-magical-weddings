import React, { useState } from 'react'
import './Header.scss'
import { motion } from 'framer-motion';
import ModalVideo from 'react-modal-video'


import { AppWrap } from '../../wrapper';

import './Header.scss';

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut'
    }
  }
}


const Header = () => {
  const [isOpen, setOpen] = useState(false)

  return (
    <div className='app__header app__flex'>

      <motion.div
        whileInView={{ y: [+100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="app__header-info"
      >
        <h2 className='head-text'>
            Hi! I'm <span id="magic">Carly</span><br /> Let's make your wedding <span id="magic">Magical</span>
          </h2>
        {/* <div className="app__header-badge">
          <div className="badge-cmp app__flex">
            <span>👋</span>
            <div style={{ marginLeft: 20}}>
              <p className="p-text">Hello, I am</p>
              <h1 className="head-text">Carly</h1>
            </div>
          </div>

          <div className="tag-cmp app__flex">
            <p className="p-text">Web Developer</p>
            <p className="p-text">Freelancer</p>
          </div>
        </div> */}
        <ModalVideo channel='vimeo' autoplay isOpen={isOpen} videoId="366772363" onClose={() => setOpen(false)} />
        <div className="app__header-notes">
        <div className="app__header-button" onClick={() => setOpen(true)}> <h4>See Me In Action</h4> </div>
        <div className="app__header-img-attribution">Image Credit: Amanda Sutton Photo </div>
        </div>
      </motion.div>


      {/* <motion.div
       whileInView={{ opacity: [0, 1] }}
       transition={{ duration: 0.5, delayChildren: 0.5 }}
       className="app__header-info"
      >
        <div className="app__header-link">
          <p className="p-text">See me in action!</p>
        </div>
        <div className="app__header-message">
          <p className="p-text">
          Carly was a pleasure to work with, from outset to finish. She has both the joy-filled persona and professional gravitas fitting of a wedding day. Her willingness to embrace LGBT weddings is at the forefront of her website and advertising materials- an important one for us, when so many vendors seem to not realize June 2015 happened. She helped us create a ceremony that was perfect for us and our story. I’d originally had doubts about having a “stranger” perform the ceremony, but Carly made it all feel familiar and natural.<br /><br />-Michelle and Amanda
          </p>
        </div>

      </motion.div> */}
      {/* <motion.div
      variant={scaleVariants}
      whileInView={scaleVariants.whileInView}
      className="app__header-circles"
      >
        {[images.flutter, images.redux, images.sass].map((circle, index) => (
          <div className="circle-cmp app__flex" key={`circle-${index}`}>
            <img src={circle} alt="circle" />
          </div>
        ))}
      </motion.div> */}

    </div>
  )
}

export default AppWrap(Header, 'home')