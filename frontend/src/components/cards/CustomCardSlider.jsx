import React, { useState, useEffect, useRef } from 'react';
import Card from './Card';

const CustomCardSlider = ({ cards }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(1);
  const containerRef = useRef(null);

  const updateSlidesPerView = () => {
    if (containerRef.current) {
      const containerWidth = containerRef.current.clientWidth;
      const cardWidth = 300; // Adjust this value to match the width of your cards
      const newSlidesPerView = Math.floor(containerWidth / cardWidth);
      setSlidesPerView(newSlidesPerView);
    }
  };

  useEffect(() => {
    updateSlidesPerView();
    window.addEventListener('resize', updateSlidesPerView);
    return () => window.removeEventListener('resize', updateSlidesPerView);
  }, []);
 
  // Add a function to handle automatic previous button every 3 seconds
    useEffect(() => {
    const interval = setInterval(() => {
      prevSlide();
    }, 3000);
    return () => clearInterval(interval);
    }, [currentIndex]);
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + slidesPerView) % cards.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - slidesPerView + cards.length) % cards.length);
  };

  return (
    <div className="relative">
      <div ref={containerRef} className="w-full max-w-6xl mx-auto">
        <div className="overflow-hidden">
        <h1 className="text-3xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl text-start mt-8 mx-4 mb-4 font-semibold text-gray-700">Explore our programs</h1>

          <div
            className="flex transition-transform duration-300"
            style={{ transform: `translateX(-${currentIndex * (100 / slidesPerView)}%)` }}
          >
            {cards.map((card, index) => (
              <div
                key={index}
                className="flex-shrink-0 p-2" // Add padding for margin
                style={{ width: `${100 / slidesPerView}%` }}
              >
                <Card
                  image={card.image}
                  title={card.title}
                  description={card.description}
                  points={card.points}
                  footer={card.footer}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <button
  onClick={prevSlide}
  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-900 bg-opacity-70 text-white p-2 rounded-full"
>
  Prev
</button>
<button
  onClick={nextSlide}
  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-900 bg-opacity-70 text-white p-2 rounded-full"
>
  Next
</button>
    </div>
  );
};

export default CustomCardSlider;
