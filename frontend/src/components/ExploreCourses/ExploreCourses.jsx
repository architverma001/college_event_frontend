import React,{useState} from "react";

const CourseCard = ({
  type,
  name,
  duration,
  fees,
  totalcollege,
  coursesLink,
}) => (
  <div className="bg-white shadow-md rounded-lg overflow-hidden w-[280px] max-w-[280px] p-3">
    <div className="p-4">
    <div className=" bg-gray-300 text-black w-[80px] rounded text-center" >
      {type}
    </div>
      <p className=" text-gray-700 mb-2 mt-2 text-2xl font-semibold">{name}</p>
      <div className="flex justify-between">
        <p className="text-sm text-gray-700 mb-2">Duration</p>
        <p className="text-sm text-gray-500 mb-2 font-semibold">{duration}</p>
      </div>
      <div className="flex justify-between">
        <p className="text-sm text-gray-700 mb-2">Total Avg. Fees</p>
        <p className="text-sm text-gray-500 mb-2 font-semibold">{fees}</p>
      </div>
      <div className="flex justify-between">
        <p className="text-sm text-gray-700 mb-2">Colleges</p>
        <p className="text-sm text-gray-500 mb-2 font-semibold">{totalcollege}</p>
      </div>

      <hr />
      <div class="grid grid-rows-3 grid-flow-col gap-4">
        <div class="row-span-3">
          <div className="col-span">
            <a href={coursesLink} className="text-blue-500 text-sm">
              View All Courses and fees
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const ExploreCourses = () => {
  const courseData = [
    {
      type:"Full Time",
      name:"B.Com General",
      duration:"3 Years",
      fees:150000,
      totalcollege:3431,
      coursesLink:""
    },
    {
      type:"Full Time",
      name:"B.Com General",
      duration:"3 Years",
      fees:150000,
      totalcollege:3431,
      coursesLink:""
    },
    {
      type:"Full Time",
      name:"B.Com General",
      duration:"3 Years",
      fees:150000,
      totalcollege:3431,
      coursesLink:""
    },
    {
      type:"Full Time",
      name:"B.Com General",
      duration:"3 Years",
      fees:150000,
      totalcollege:3431,
      coursesLink:""
    },
    
  ]
  const [Course, setCourse] = useState("Bachelors");
  const handleCourse = (course) => {
    setCourse(course);
  };
  const courses = [
    {
      id: 1,
      name: "Bachelors",
    },
    {
      id: 2,
      name: "Masters",
    },
    {
      id: 3,
      name: "Doctorate",
    },
    {
      id: 4,
      name: "Diploma",
    },
    {
      id: 5,
      name: "Certification",
    },
  ];
  return (
    <div>
      <div className="w-full max-w-6xl mx-auto mt-4 mb-4">
        <h1 className=" text-gray-600 text-xl font-bold mb-4 sm:text-xl md:text-2xl lg:text-3xl xl-text-3xl ">
          Explore Courses
        </h1>
        <div className="flex gap-3 w-full max-w-6xl mx-auto overflow-x-auto  overflow-handle">
          {courses.map((course) => (
            <div
              key={course.id}
              className={`  scrollbar-hide px-6 mx-1 py-2 hover:cursor-pointer ${
                course.name === Course ? "bg-blue" : "bg-normal"
              }`}
              onClick={() => handleCourse(course.name)}
              style={{textDecoration: "none"}}
            >
              {course.name}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-5">
          {courseData.map((cou, index) => (
            <CourseCard key={index} {...cou} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExploreCourses;
