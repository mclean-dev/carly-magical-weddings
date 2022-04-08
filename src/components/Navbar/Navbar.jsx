import React, { useState } from 'react';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';

import './Navbar.scss'
const Navbar = () => {
    const [toggle, setToggle] = useState(false);

    return (
        <nav className="app__navbar">
            <div className="app__navbar-logo">
                <h5>Weddings Across NC</h5>
            </div>
            {/* <div className="app__navbar-links">
            {['home', 'about', 'testimonials', 'services', 'associates', 'contact'].map((item) => (
                    <a  className="app__flex p-text" key={`link-${item}`} href={`#${item}`}>{item}</a>
                ))}
            </div> */}
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
                {console.log(toggle)}
                {
                    toggle && (
                        <motion.div
                            whileInView={{ x: [300, 0] }}
                            transition={{ duration: 0.55, ease: 'easeOut' }}
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