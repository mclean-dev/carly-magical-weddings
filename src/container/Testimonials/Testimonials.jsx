import React, { useState, useEffect } from 'react'
import './Testimonials.scss'
import { AppWrap, MotionWrap } from '../../wrapper'
import { motion, AnimatePresence } from 'framer-motion'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi'
import { wrap } from 'popmotion'
import axios from 'axios'

const Testimonials = () => {
  const [stickers, setStickers] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [[page, direction], setPage] = useState([0, 0]);

  const currentIndex = wrap(0, testimonials.length, page);

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  const variants = {
    enter: (direction) => {
      return {
        zIndex: 0,
        x: direction > 0 ? 300 : -300,
        opacity: 0
      };
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction) => {
      return {
        zIndex: 0,
        x: direction < 0 ? 300 : -300,
        opacity: 0
      };
    }
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
  };
  useEffect(() => {
    const query = '*[_type == "testimonials"]';
    const stickersQuery = '*[_type == "stickers"] | order(_createdAt asc)';

    axios.get('/.netlify/functions/getter', { params: { "query": `${query}`  } })
    .then((data) => {
      setTestimonials(data.data)
    })
    axios.get('/.netlify/functions/getter', { params: { "query": `${stickersQuery}`  } })
    .then((data) => {
      setStickers(data.data)
    })

  }, [])
  const test = testimonials[currentIndex]
  return (
    <>

      {testimonials.length && (
        <>
          <h2 className='head-text'>
            See what <span>Happy Couples</span> have to say
          </h2>
          <AnimatePresence initial={false} custom={direction} exitBeforeEnter={true} >
            <motion.div
              className='app__testimonial-item app__flex'
              key={page}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 500, damping: 30 },
                opacity: { duration: 0.15 }
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x);

                if (swipe < -swipeConfidenceThreshold) {
                  paginate(1);
                } else if (swipe > swipeConfidenceThreshold) {
                  paginate(-1);
                }
              }}
            >
                <img src={test.image} alt="testimonial" />
                <div className="app__testimonial-content">
                  <p className="p-text">{test.feedback}</p>
                  <div>
                    <h4 className="bold-text">{test.name}</h4>

                  </div>
                </div>
            </motion.div>
          </AnimatePresence>
          <div className="app__testimonial-btns app__flex">
            <div className="app__flex" onClick={() => paginate(-1)}>
              <HiChevronLeft />
            </div>
            <div className="app__flex" onClick={() => paginate(1)}>
              <HiChevronRight />
            </div>
          </div>
        </>
      )}
<div className="app__testimonials-stickers app__flex">
            {stickers.map((sticker) => (
              <motion.div
                whileInView={{ opacity: [0, 1] }}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.5, type: 'tween' }}
                key={stickers._id}
              >
                <a href={sticker.url} rel="noreferrer" target="_blank">
                  <img src={sticker.image} alt={sticker.name} />
                </a>
              </motion.div>
            ))}
      </div>
    </>
  )
}


export default AppWrap(
  MotionWrap(Testimonials, 'app__testimonial'),
  'testimonials',
  'app__primarybg'
)
