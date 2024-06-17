import React from 'react';

const dummyData = [
  {
    name: "IIT Madras",
    "First Year Fees": "₹2,00,000",
    "Hostel Fees": "₹50,000",
    "Total Fees": "₹8,00,000 (4 Years)",
    "Ranking": "#1 by NIRF",
    "Eligibility": "JEE Advanced",
    "Duration": "4 Years",
    "Course Offered": "Full Time",
    "Total Seats": "120",
    "Mode": "Full Time",
    "Degree Type": "On Campus",
    "Course Level": "Graduation",
    "Course Credential": "Degree",
    "Fee Link": "#",
    "Total Courses": "150",
    "BE/B.Tech": "30"
  },
  {
    name: "IIT Delhi",
    "First Year Fees": "₹2,20,000",
    "Hostel Fees": "₹55,000",
    "Total Fees": "₹8,80,000 (4 Years)",
    "Ranking": "#2 by NIRF",
    "Eligibility": "JEE Advanced",
    "Duration": "4 Years",
    "Course Offered": "Full Time",
    "Total Seats": "110",
    "Mode": "Full Time",
    "Degree Type": "On Campus",
    "Course Level": "Graduation",
    "Course Credential": "Degree",
    "Fee Link": "#",
    "Total Courses": "140",
    "BE/B.Tech": "28"
  },
  {
    name: "IIT Bombay",
    "First Year Fees": "₹2,10,000",
    "Hostel Fees": "₹52,000",
    "Total Fees": "₹8,40,000 (4 Years)",
    "Ranking": "#3 by NIRF",
    "Eligibility": "JEE Advanced",
    "Duration": "4 Years",
    "Course Offered": "Full Time",
    "Total Seats": "130",
    "Mode": "Full Time",
    "Degree Type": "On Campus",
    "Course Level": "Graduation",
    "Course Credential": "Degree",
    "Fee Link": "#",
    "Total Courses": "160",
    "BE/B.Tech": "32"
  },
  {
    name: "IIM Ahmedabad",
    "First Year Fees": "₹15,00,000",
    "Hostel Fees": "₹1,00,000",
    "Total Fees": "₹30,00,000 (2 Years)",
    "Ranking": "#1 by NIRF Management",
    "Eligibility": "CAT",
    "Duration": "2 Years",
    "Course Offered": "Full Time",
    "Mode": "Full Time",
    "Degree Type": "On Campus",
    "Course Level": "Post Graduation",
    "Course Credential": "Degree",
    "Fee Link": "#",
    "Total Courses": "30",
    "MBA": "25"
  },
  {
    name: "IIM Bangalore",
    "First Year Fees": "₹14,00,000",
    "Hostel Fees": "₹90,000",
    "Total Fees": "₹28,00,000 (2 Years)",
    "Ranking": "#2 by NIRF Management",
    "Eligibility": "CAT",
    "Duration": "2 Years",
    "Course Offered": "Full Time",
    "Mode": "Full Time",
    "Degree Type": "On Campus",
    "Course Level": "Post Graduation",
    "Course Credential": "Degree",
    "Fee Link": "#",
    "Total Courses": "35",
    "MBA": "20"
  },
  {
    name: "IIM Calcutta",
    "First Year Fees": "₹13,00,000",
    "Hostel Fees": "₹80,000",
    "Total Fees": "₹26,00,000 (2 Years)",
    "Ranking": "#3 by NIRF Management",
    "Eligibility": "CAT",
    "Duration": "2 Years",
    "Course Offered": "Full Time",
    "Mode": "Full Time",
    "Degree Type": "On Campus",
    "Course Level": "Post Graduation",
    "Course Credential": "Degree",
    "Fee Link": "#",
    "Total Courses": "25",
    "MBA": "22"
  }
];

const labels = [
  "Cost To Study",
  "Ranking",
  "Eligibility",
  "General Course Details",
  "College Course Details"
];

const renderRow = (label, dataKey, rowIndex, collegeData) => (
  <tr key={label} className={`font-sans text-center ${rowIndex % 2 === 0 ? 'bg-gray-100' : 'bg-white font-sans'}`} >
    <td className="border font-sans text-center  px-4 py-2 font-semibold">{label}</td>
    {collegeData.map((college, index) => (
      <td className="border px-4 py-2 font-sans text-center " key={index}>
        {dataKey === "Cost To Study" ? (
          <div>
            <div>First Year Fees<br />{college["First Year Fees"]}</div>
            <div>Hostel Fees<br />{college["Hostel Fees"]}</div>
            <div>Total Fees<br />{college["Total Fees"]}</div>
            <a href={college["Fee Link"]} className="text-blue-500 underline">Check Detailed Fees</a>
          </div>
        ) : dataKey === "Ranking" ? (
          <div>{college["Ranking"]}</div>
        ) : dataKey === "Eligibility" ? (
          <div>{college["Eligibility"]}</div>
        ) : dataKey === "General Course Details" ? (
          <div>
            <div>Duration - {college["Duration"]}</div>
            <div>Course Offered - {college["Course Offered"]}</div>
            <div>Total Seats - {college["Total Seats"]}</div>
            <div>Mode - {college["Mode"]}</div>
            <div>Degree Type - {college["Degree Type"]}</div>
            <div>Course Level - {college["Course Level"]}</div>
            <div>Course Credential - {college["Course Credential"]}</div>
            <a href={college["Fee Link"]} className="text-blue-500 underline">Check Detailed Fees</a>
          </div>
        ) : dataKey === "College Course Details" ? (
          <div>
            <div>Total Courses - {college["Total Courses"]}</div>
            <div>{college["BE/B.Tech"] ? `BE/B.Tech - ${college["BE/B.Tech"]}` : `MBA - ${college["MBA"]}`}</div>
          </div>
        ) : null}
      </td>
    ))}
  </tr>
);

const Table = ({ college1, college2 }) => {
  // Filter dummyData based on college1 and college2 names
  const filteredColleges = dummyData.filter(college => college.name === college1 || college.name === college2);

  return (
    <div className="overflow-x-auto w-[75vw] min-w[300px] bg-white p-2 rounded-lg mb-10">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold  mb-4 mt-3 text-start text-gray-700 font-sans">
        Course Comparison
      </h2>
      <hr className='mb-4'/>
      <table className="min-w-full border border-gray-300">
        <thead className="bg-gray-200">
          <tr>
            <th className="border px-4 py-2"></th>
            {filteredColleges.map((college, index) => (
              <th key={index} className="border px-4 py-2 text-center">{college.name}</th>
            ))}
          </tr>
        </thead>
        <tbody className='font-sans'>
          {labels.map((label, index) => renderRow(label, label, index, filteredColleges))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
