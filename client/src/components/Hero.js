import React, { useEffect, useState, useRef } from 'react';
import { IoMdArrowRoundForward } from 'react-icons/io';
import { IoArrowForward, IoArrowBack } from 'react-icons/io5';
import { AnimatePresence } from 'framer-motion';



const Hero = ({ slides, history }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;
  const timeout = useRef(null);

  useEffect(
    () => {
      const nextSlide = () => {
        setCurrent(current => (current === length - 1 ? 0 : current + 1));
      };
      timeout.current = setTimeout(nextSlide, 3500);

      return function() {
        if (timeout.current) {
          clearTimeout(timeout.current);
        }
      };
    },
    [current, length]
  );

  const nextSlide = () => {
    if (timeout.current) {
      clearTimeout(timeout.current);
    }
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    if (timeout.current) {
      clearTimeout(timeout.current);
    }
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  const fadeAnimation = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
    exit: { opacity: 0 }
  };

  return (
    <div className="herosection">
      <div className="herowrapper">
        <AnimatePresence>
          {slides.map((slide, index) => {
            return (
              <div className="heroslide" key={index}>
                {index === current && (
                  <div className="heroslider">
                    <img className="heroimg"
                      src={slide.image}
                      alt={slide.alt}
                      initial='hidden'
                      animate='visible'
                      exit='exit'
                      variants={fadeAnimation}
                    />
                    <div className="herocontent">
                      <h1 data-aos='fade-down' data-aos-duration='600'>
                        {slide.title}
                      </h1>
                      <button
                        data-aos='zoom-out'
                        data-aos-duration='500'
                        data-aos-delay='250'
                        onClick={()=>{history.push(slide.path)}}
                        primary='true'                        
                      >
                        {slide.label}
                        <IoMdArrowRoundForward id="heroarrow" />
                      </button>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </AnimatePresence>
        <div className="sliderbuttons">
          <div id="prevarrow" onClick={prevSlide}><IoArrowBack/></div>
          <div id="nextarrow" onClick={nextSlide}><IoArrowForward/></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
