// src/ContinuousSlider.js
import React, { useEffect, useRef } from 'react';
import 'tailwindcss/tailwind.css';

const logos = [
  'https://via.placeholder.com/100x50?text=Logo1',
  'https://via.placeholder.com/100x50?text=Logo2',
  'https://via.placeholder.com/100x50?text=Logo3',
  'https://via.placeholder.com/100x50?text=Logo4',
  'https://via.placeholder.com/100x50?text=Logo5',
  'https://via.placeholder.com/100x50?text=Logo1',
  'https://via.placeholder.com/100x50?text=Logo2',
  'https://via.placeholder.com/100x50?text=Logo3',
  'https://via.placeholder.com/100x50?text=Logo4',
  'https://via.placeholder.com/100x50?text=Logo5',
  'https://via.placeholder.com/100x50?text=Logo1',
  'https://via.placeholder.com/100x50?text=Logo2',
  'https://via.placeholder.com/100x50?text=Logo3',
  'https://via.placeholder.com/100x50?text=Logo4',
  'https://via.placeholder.com/100x50?text=Logo5',
  'https://via.placeholder.com/100x50?text=Logo1',
  'https://via.placeholder.com/100x50?text=Logo2',
  'https://via.placeholder.com/100x50?text=Logo3',
  'https://via.placeholder.com/100x50?text=Logo4',
  'https://via.placeholder.com/100x50?text=Logo5',
];

const ContinuousSlider = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    let isHovered = false;

    const animate = () => {
      if (!isHovered) {
        slider.scrollLeft += 1;
        if (slider.scrollLeft >= slider.scrollWidth / 2) {
          slider.scrollLeft = 0;
        }
      }
      requestAnimationFrame(animate);
    };

    animate();

    slider.addEventListener('mouseover', () => {
      isHovered = true;
    });

    slider.addEventListener('mouseout', () => {
      isHovered = false;
    });

    return () => {
      slider.removeEventListener('mouseover', () => { isHovered = true; });
      slider.removeEventListener('mouseout', () => { isHovered = false; });
    };
  }, []);

  return (
    <div className="slider-container overflow-hidden whitespace-nowrap mt-5" ref={sliderRef}>
      <div className="slider-content flex">
        {logos.concat(logos).map((logo, index) => (
          <img src={logo} alt={`Logo ${index}`} className="logo w-20 h-10 mx-2" key={index} />
        ))}
      </div>
    </div>
  );
};

export default ContinuousSlider;
