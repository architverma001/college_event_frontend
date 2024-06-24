import { FontAwesomeIcon, } from '@fortawesome/react-fontawesome';
import React, { useState,useRef,useEffect } from 'react'
import { Link } from 'react-router-dom';
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import CustomCardSlider from '../cards/CustomCardSlider';
import { collegeData,cardData,colleges } from '../../Static/dummydata/dummy';

const CollegeCard = () => {

    const containerRef = useRef(null);
    const [containerWidth, setContainerWidth] = useState(0);
    const [college, setCollege] = useState("Btech");
    const handleScrollLeft = () => {
        if (containerRef.current) {
          const scrollAmount = Math.max(100, containerWidth / 2);
          containerRef.current.scrollTo({
            left: containerRef.current.scrollLeft - scrollAmount,
            behavior: "smooth",
          });
        }
      };
    
      const handleScrollRight = () => {
        if (containerRef.current) {
          const scrollAmount = Math.max(100, containerWidth / 2);
          containerRef.current.scrollTo({
            left: containerRef.current.scrollLeft + scrollAmount,
            behavior: "smooth",
          });
        }
      };
    
      const handleCollege = (colleges) => {
        setCollege(colleges);
      };


      useEffect(() => {
        if (containerRef.current) {
          setContainerWidth(containerRef.current.offsetWidth);
        }
      }, []);




    
  return (
    <div className="flex flex-col mb-11 items-center mt-10 overflow-hidden" >
    <div className="flex max-w-6xl w-full px-4">
      <h1 className="text-gray-600 text-xl font-bold mb-4 sm:text-xl md:text-2xl lg:text-3xl xl-text-3xl">
        Explore Our Programs
      </h1>
    </div>
    <div className="flex max-width custom_width items-start relative">
      <button
        onClick={handleScrollLeft}
        className="absolute left-0  text-black p-2 rounded-full smooth-transition z-10 "
      >
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
      <div
        className="flex gap-3 w-full max-w-6xl mx-auto overflow-x-auto overflow-handle px-4"
        ref={containerRef}
      >
        {collegeData.map((colleges) => (
          <div
            key={colleges.id}
            className={`scrollbar-hide  px-6 mx-1 py-2 rounded-lg cursor-pointer transition-all duration-200  ${colleges.type === college ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"
              }`}
            onClick={() => {
              handleCollege(colleges.type);
            }}
          >
            {colleges.type}
          </div>
        ))}
      </div>
      <button
        onClick={handleScrollRight}
        className="absolute right-0  text-black p-2 rounded-full smooth-transition z-10 "
      >
        <FontAwesomeIcon icon={faChevronRight} />
      </button>
    </div>
    <CustomCardSlider cards={cardData} college={college} />
  </div>
  )
}

export default CollegeCard
