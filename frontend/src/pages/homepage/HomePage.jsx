import React, { useState, useRef, useEffect } from "react";
import "./Home.css";

import Card from "../../components/cards/Card";
import CustomCardSlider from "../../components/cards/CustomCardSlider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import Search from "../../components/search/Search";
import TopColleges from "../../components/TopColleges/TopColleges";
import ExploreCourses from "../../components/ExploreCourses/ExploreCourses";
import TopUniversities from "../../components/TopUnivesities/TopUniversities";
import axios from "axios";
import { collegeData, cardData } from "../../Static/dummydata/dummy";
import NewsCard from "../../components/news/NewsCard";
import News from "../../components/news/News";
import TopExams from './../../components/TopExams/TopExams';

function HomePage() {
 

  const [college, setCollege] = useState("Btech");
  const containerRef = useRef(null);
  const [containerWidth, setContainerWidth] = useState(0);

  useEffect(() => {
    if (containerRef.current) {
      setContainerWidth(containerRef.current.offsetWidth);
    }
  }, []);

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

  return (
    <div>
      <Search />
      <div className="flex flex-col mb-11 items-center mt-10 overflow-hidden">
        <div className="flex max-w-6xl w-full px-4">
          <h1 className="text-gray-600 text-xl font-bold mb-4 sm:text-xl md:text-2xl lg:text-3xl xl-text-3xl">
            Explore Our Programs
          </h1>
        </div>
        <div className="flex max-width custom_width items-start relative">
          <button
            onClick={handleScrollLeft}
            className="absolute left-0 bg-gray-200 text-black p-2 rounded-full smooth-transition z-10 shadow-md hover:bg-gray-300"
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
                className={`scrollbar-hide px-6 mx-1 py-2 rounded-lg cursor-pointer transition-all duration-200  ${colleges.type === college ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"
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
            className="absolute right-0 bg-gray-200 text-black p-2 rounded-full smooth-transition z-10 shadow-md hover:bg-gray-300"
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>
        <CustomCardSlider cards={cardData} college={college} />
      </div>

    
      <TopColleges />
      <hr/>
      <News/>
      <TopUniversities />
      <ExploreCourses />
      <TopExams/>
    </div>
  );
}

export default HomePage;
