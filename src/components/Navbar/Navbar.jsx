import React, { useState } from 'react';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';

import './Navbar.scss'    

const variants = {
        open: { opacity: 1, x: 0},
        closed: { opacity: 0, x: "+100%"},
    }

const Navbar = () => {
    const [toggle, setToggle] = useState(false);



    return (
        <nav className="app__navbar">
            <div className="app__navbar-logo">
                <h5>Weddings Across NC</h5>
            </div>

            <ul className="app__navbar-links">
                {['home', 'about', 'testimonials', 'services', 'associates', 'contact'].map((item) => (
                    <li className="app__flex p-text" key={`link-${item}`}>
                        <div />
                        <a href={`#${item}`}>{item}</a>
                    </li>
                ))}
            </ul>
            <div className='app__navbar-menu'>
                <HiMenuAlt4 onClick={() => setToggle(true)} />
                {
                   (
                        <motion.div
                            animate={toggle ? "open" : "closed"}
                            variants={variants}
                            // whileInView={{ x: [300, 0] }}
                            // transition={{ duration: 0.85, ease: 'easeOut' }}
                        >
                            <HiX onClick={() => setToggle(false)} />
                            <ul className="app__navbar-links">

                                {['home', 'about', 'testimonials', 'services', 'associates', 'contact'].map((item) => (
                                    <li key={item}>

                                        <a href={`#${item}`} onClick={() => setToggle(false)}>{item}</a>
                                    </li>
                                ))}
                            </ul>

                        </motion.div>
                    )
                }
            </div>

        </nav>
    )
}

export default Navbar