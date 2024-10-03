import React, { useState, useEffect } from 'react';
import SliderContent from './js/SliderContent';
import Arrows from './js/Arrows';
import Dots from './js/Dots';
import imageSlider from './js/imageSlider';
import './css/cool.css';

let len = 0;

function CoolSlider() {
  const [activeIndex, setActiveIndex] = useState(0);

  len = imageSlider.length - 1;

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(activeIndex === len ? 0 : activeIndex + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, [activeIndex]);
  
  return (
    <>
      <div className="container-slider">
        <div className="slider">
          <SliderContent activeIndex={activeIndex} imageSlider={imageSlider} />
          <Arrows prevSlide={
            () => setActiveIndex(activeIndex < 1 ? len : activeIndex - 1)
            } 
            nextSlide={
              () => setActiveIndex(activeIndex === len ? 0 : activeIndex + 1)
            }
          />
          <Dots 
            activeIndex={activeIndex} 
            imageSlider={imageSlider} 
            onclick={(activeIndex) => setActiveIndex(activeIndex)}  
          />
        </div>
      </div>
    </>
  );
}

export default CoolSlider;