import React, { useState } from 'react';

const CollegePredictorNavbar = () => {
  const [selectedCourse, setSelectedCourse] = useState('');
  const [selectedExam, setSelectedExam] = useState('');

  const courses = ['B.Tech', 'MBBS', 'B.Sc', 'B.Com'];
  const exams = ['JEE Main', 'NEET', 'DU Entrance', 'Others'];

  const handleCourseChange = (e) => {
    setSelectedCourse(e.target.value);
  };

  const handleExamChange = (e) => {
    setSelectedExam(e.target.value);
  };

  const handleSubmit = () => {
    // Handle form submission logic here
    console.log(`Course: ${selectedCourse}, Exam: ${selectedExam}`);
  };

  return (
    <div className="bg-gray-800 text-white p-6 text-center">
      <h1 className="text-2xl font-bold mb-4">
        College Predictor 2024 for JEE Main, NEET, DU and other top Universities and Exams
      </h1>
      <div className="flex justify-center items-center space-x-4">
        <select
          value={selectedCourse}
          onChange={handleCourseChange}
          className="bg-white text-black p-2 rounded"
        >
          <option value="" disabled>Select Course</option>
          {courses.map((course) => (
            <option key={course} value={course}>{course}</option>
          ))}
        </select>
        <select
          value={selectedExam}
          onChange={handleExamChange}
          className="bg-white text-black p-2 rounded"
        >
          <option value="" disabled>Select Exam/University</option>
          {exams.map((exam) => (
            <option key={exam} value={exam}>{exam}</option>
          ))}
        </select>
        <button
          onClick={handleSubmit}
          className="bg-orange-500 hover:bg-orange-600 text-white p-2 rounded"
        >
          Find Colleges
        </button>
      </div>
    </div>
  );
};

export default CollegePredictorNavbar;
