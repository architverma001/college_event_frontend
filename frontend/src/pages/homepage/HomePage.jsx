import React, { useState, useRef, useEffect } from "react";
import "./Home.css";

import Card from "../../components/cards/Card";
import CustomCardSlider from "../../components/cards/CustomCardSlider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
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
      const scrollAmount = Math.max(100, containerWidth / 2); // Limit scroll to 100 pixels or display size - 50
      containerRef.current.scrollTo({
        left: containerRef.current.scrollLeft - scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const handleScrollRight = () => {
    if (containerRef.current) {
      const scrollAmount = Math.max(100, containerWidth / 2); // Limit scroll to 100 pixels or display size - 50
      containerRef.current.scrollTo({
        left: containerRef.current.scrollLeft + scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const handleCollege = (colleges) => {
    setCollege(colleges);
  };

  const collegeData = [
    {
      id: 1,
      type: "Btech",
    },
    {
      id: 2,
      type: "Mtech",
    },
    {
      id: 3,
      type: "MBA",
    },
    {
      id: 4,
      type: "BBA",
    },
    {
      id: 5,
      type: "BCA",
    },
    {
      id: 6,
      type: "MCA",
    },
    {
      id: 7,
      type: "MBBS",
    },
    {
      id: 8,
      type: "BCOM",
    },
    {
      id: 9,
      type: "MCOM",
    },
    {
      id: 10,
      type: "BSC",
    },
    {
      id: 11,
      type: "MSC",
    },
    {
      id: 12,
      type: "PHD",
    },
    {
      id: 13,
      type: "Nursing",
    },
  ];

  const cardData = [
    {
      image: "/freelancer.png", // Adjust the path as necessary
      title: "Opportunities",
      description: "Work independently and flexibly on your own terms.",
      points: [
        "Flexible Schedule",
        "Diverse Projects",
        "Skill Development",
        "Global Opportunities",
      ],
      footer: "Discover more",
    },
    {
      image: "/ranking.svg", // Placeholder SVG image
      title: "Ranking",
      description: "Find the best colleges based on various rankings.",
      points: [
        "Top Institutions",
        "Ranking Criteria",
        "Comparison Tools",
        "Updated Annually",
      ],
      footer: "View Rankings",
    },
    {
      image: "/school.png", // Placeholder SVG image
      title: "Find College",
      description: "Discover colleges that match your preferences.",
      points: [
        "Location Search",
        "Course Offerings",
        "Campus Facilities",
        "Student Reviews",
      ],
      footer: "Find Now",
    },
    {
      image: "/computer.png", // Placeholder SVG image
      title: "Compare College",
      description: "Compare colleges to make informed decisions.",
      points: [
        "Side-by-Side Comparison",
        "Detailed Analysis",
        "User Ratings",
        "Key Statistics",
      ],
      footer: "Compare Now",
    },
    {
      image: "/test.jpg", // Placeholder SVG image
      title: "Exam",
      description: "Prepare effectively for your exams.",
      points: [
        "Study Materials",
        "Practice Tests",
        "Time Management",
        "Expert Tips",
      ],
      footer: "Start Preparing",
    },
    {
      image: "/graduated.png", // Placeholder SVG image
      title: "College Predictor",
      description:
        "Predict the colleges you can get into based on your scores.",
      points: [
        "Score Analysis",
        "Admission Chances",
        "Previous Year Data",
        "Personalized Suggestions",
      ],
      footer: "Predict Now",
    },
    {
      image: "/book.png", // Placeholder SVG image
      title: "Course Finder",
      description: "Find the right course that fits your career goals.",
      points: [
        "Wide Range of Courses",
        "Eligibility Criteria",
        "Duration & Fees",
        "Future Prospects",
      ],
      footer: "Find Courses",
    },
  ];

  return (
    // <div className='flex flex-col mb-11 items-center mt-10 '>
    <div className="flex flex-col mb-11 items-center mt-10 overflow-hidden">
      <div className="flex max-w-6xl w-full px-4">
        <h1 className=" text-gray-600 text-xl font-bold mb-4 sm:text-xl md:text-2xl lg:text-3xl xl-text-3xl ">
          Explore Colleges by Courses
        </h1>
      </div>
      <div className="flex max-width">
        <button
          onClick={handleScrollLeft}
          className=" bg-opacity-70 text-black p-2 rounded-full smooth-transition"
        >
          {containerWidth > 600 ? (
            <FontAwesomeIcon icon={faChevronLeft} />
          ) : (
            <div></div>
          )}
        </button>
        <div
          className="flex gap-11 w-full max-w-6xl mx-auto overflow-x-auto  overflow-handle"
          ref={containerRef}
        >
          {collegeData.map((colleges) => (
            <div
              key={colleges.id}
              className={`  scrollbar-hide px-6 mx-1 py-2 hover:cursor-pointer ${
                colleges.type === college ? "bg-blue" : "bg-normal"
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
          className=" bg-opacity-70 text-black p-2 rounded-full smooth-transition"
        >
          {containerWidth > 600 ? (
            <FontAwesomeIcon icon={faChevronRight} />
          ) : (
            <div></div>
          )}
        </button>
      </div>
      <CustomCardSlider cards={cardData} college={college} />
    </div>
  );
}

export default HomePage;
