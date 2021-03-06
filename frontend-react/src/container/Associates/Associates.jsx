import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import axios from 'axios'

import { AppWrap, MotionWrap } from '../../wrapper'
import './Associates.scss'


const Associates = () => {
  const [activeFilter, setActiveFilter] = useState('All')
  const [animateCard, setAnimateCard] = useState([{ y: 0, opacity: 1 }])
  const [associates, setAssociates] = useState([])
  const [filterAssociates, setFilterAssociates] = useState([])

 
  useEffect(() => {

    const query = '*[_type == "associates"] | order(_createdAt asc)';
    axios.get('/.netlify/functions/getter', { params: { "query": `${query}`  } })

    .then((data) => {
      setAssociates(data.data)
      setFilterAssociates(data.data)
    })
    
  }, [])

  const handleAssociateFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{y: 100, opacity: 0}]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);
      if (item === 'All') {
        setFilterAssociates(associates)
      } else {
        setFilterAssociates(associates.filter((associate) => associate.category.includes(item)));
      }

    }, 500)

  }
  return (
    <>
      <h2 className='head-text'>Industry professionals <span>I recommend</span></h2>

      {associates.length ? (
      <>
      <div className="app__associate-filter">
        {associates.concat([{category: 'All', _id: "12345"}]).map((item, index) => (
          <div
            key={item._id}
            onClick={() => handleAssociateFilter(item.category)}
            className={`app__associate-filter-item app__flex p-text ${activeFilter === item.category ? 'item-active' : ''}`}
          >
            {item.category}
          </div>
        ))}
      </div>
      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__associate-portfolio"
        initial={false}

      >
        {filterAssociates.map((associate) => (
          <div className="app__associate-item app__flex" key={associate._id}>

            <div className="app__associate-content app__flex">
              <h4 className="bold-text">{associate.category}</h4>
              <ul>
              {associate.businesses.map((item, index) => (
                <li key={index}><a href={item.url} alt={item.name} rel="noreferrer" target="_blank">{item.name}</a></li>
              ))}
              </ul>
              

            </div>
          </div>
        ))}
      </motion.div>
     </>): <p className="p-text app__error">We're sorry, there was an error retrieving the "Associates" section! <br />Please email Carly at carly@carlyjanemiller.com to let them know.</p>}
    </>
  )
}

export default AppWrap(MotionWrap(Associates, 'app__associates'),'associates','app__whitebg')