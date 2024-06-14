import React from "react";
import Examdata from "./ExamData";
const ExamCard = ({
  img,
  examtype,
  examname,
  participatingcolleges,
  examdate,
  examlevel,
}) => (
  <div className="bg-white shadow-md rounded-lg overflow-hidden min-w-[200px] w-[30bw] max-w-[280px] p-3 m-1">
    <div className="p-4">
      <div className="flex">
        <div>
          <img
            src={img}
            alt="exam"
            className="w-[50px] h-[50px] rounded-full me-2"
          />
        </div>
        <div>
          <span className=" bg-gray-200 ps-1 pe-1 text-black rounded text-center">
            {examtype}
          </span>
          <p className=" text-gray-700 mb-2 text-xl font-semibold">
            {examname}
          </p>
        </div>
      </div>
      <div className="flex justify-between">
        <p className="text-sm text-gray-700 mb-2">Participating Colleges</p>
        <p className="text-sm text-gray-500 mb-2 font-semibold">
          {participatingcolleges}
        </p>
      </div>
      <div className="flex justify-between">
        <p className="text-sm text-gray-700 mb-2">Exam Date</p>
        <p className="text-sm text-gray-500 mb-2 font-semibold">{examdate}</p>
      </div>
      <div className="flex justify-between">
        <p className="text-sm text-gray-700 mb-2">Exam Level</p>
        <p className="text-sm text-gray-500 mb-2 font-semibold">{examlevel}</p>
      </div>

      <hr />
      <div class="grid grid-rows-3 grid-flow-col gap-4">
        <div class="row-span-3">
          <div className="col-span">
            <a href="" className="text-blue-500 text-sm">
              Application Process
            </a>
          </div>
          <div className="col-span">
            <a href="" className="text-blue-500 text-sm">
              Exam Info
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const TopExams = () => {
  return (
    <div>
      <div className="w-full max-w-6xl mx-auto mt-4 mb-4">
        <h1 className=" text-gray-600 text-xl font-bold mb-4 sm:text-xl md:text-2xl lg:text-3xl xl-text-3xl ">
          Top Exams
        </h1>
        <div className="grid  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-5">
          {Examdata.map((exam, index) => (
            <ExamCard key={index} {...exam} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopExams;
