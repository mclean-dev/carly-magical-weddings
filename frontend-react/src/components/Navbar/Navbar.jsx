import React, { useState } from "react"
import { HiMenuAlt4, HiX } from "react-icons/hi"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { HashLink } from "react-router-hash-link"
import "./Navbar.scss"

const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "+100%" },
}

const Navbar = () => {
  const [toggle, setToggle] = useState(false)

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <h5>Weddings Across NC</h5>
      </div>

      <ul className="app__navbar-links">
        {["home", "about", "testimonials", "services", "contact", "associates", "blog"].map((item) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            <div />
            {item === "blog" ? (
              <Link to="/blog">{item}</Link>
            ) : (
              <HashLink to={`/#${item}`} preventScrollReset={true}>
                {item}
              </HashLink>
            )}

            {/* <a href={`#${item}`}>{item}</a> */}
          </li>
        ))}
      </ul>
      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />
        {
          <motion.div animate={toggle ? "open" : "closed"} variants={variants} initial={false}>
            <HiX onClick={() => setToggle(false)} />
            <ul className="app__navbar-links">
              {["home", "about", "testimonials", "services", "contact", "associates", "blog"].map((item) => (
                <li key={item}>
                  {/* <Link to={`/#${item}`} onClick={() => setToggle(false)}>{item}</Link> */}
                  {/* <a href={`#${item}`} onClick={() => setToggle(false)}>{item}</a> */}
                  {item === "blog" ? (
                    <Link to="/blog" onClick={() => setToggle(false)}>
                      {item}
                    </Link>
                  ) : (
                    <HashLink to={`/#${item}`} onClick={() => setToggle(false)} preventScrollReset={true}>
                      {item}
                    </HashLink>
                  )}
                </li>
              ))}
            </ul>
          </motion.div>
        }
      </div>
    </nav>
  )
}

export default Navbar
