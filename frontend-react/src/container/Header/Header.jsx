import React, { useState } from 'react'
import { motion } from 'framer-motion';
import ModalVideo from 'react-modal-video'


import { AppWrap } from '../../wrapper';
import './Header.scss';

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

        <ModalVideo channel='vimeo' autoplay isOpen={isOpen} videoId="366772363" onClose={() => setOpen(false)} />
        <div className="app__header-notes">
        <div className="app__header-button" onClick={() => setOpen(true)}> <h4>See Me In Action!</h4> </div>
        <div className="app__header-img-attribution">Image Credit: Amanda Sutton Photo </div>
        </div>
      </motion.div>

    </div>
  )
}

export default AppWrap(Header, 'home')