import React, { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

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
    "First Year Fees": "₹2,50,000",
    "Hostel Fees": "₹60,000",
    "Total Fees": "₹9,00,000 (4 Years)",
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
    "BE/B.Tech": "35"
  },
  {
    name: "IIT Kanpur",
    "First Year Fees": "₹2,30,000",
    "Hostel Fees": "₹55,000",
    "Total Fees": "₹8,60,000 (4 Years)",
    "Ranking": "#4 by NIRF",
    "Eligibility": "JEE Advanced",
    "Duration": "4 Years",
    "Course Offered": "Full Time",
    "Total Seats": "125",
    "Mode": "Full Time",
    "Degree Type": "On Campus",
    "Course Level": "Graduation",
    "Course Credential": "Degree",
    "Fee Link": "#",
    "Total Courses": "155",
    "BE/B.Tech": "32"
  },
  {
    name: "IIM Ahmedabad",
    "First Year Fees": "₹12,00,000",
    "Hostel Fees": "₹1,00,000",
    "Total Fees": "₹24,00,000 (2 Years)",
    "Ranking": "#1 by NIRF",
    "Eligibility": "CAT",
    "Duration": "2 Years",
    "Course Offered": "Full Time",
    "Total Seats": "400",
    "Mode": "Full Time",
    "Degree Type": "On Campus",
    "Course Level": "Post Graduation",
    "Course Credential": "MBA",
    "Fee Link": "#",
    "Total Courses": "40",
    "MBA/PGDM": "40"
  },
  {
    name: "IIM Bangalore",
    "First Year Fees": "₹11,50,000",
    "Hostel Fees": "₹1,10,000",
    "Total Fees": "₹23,00,000 (2 Years)",
    "Ranking": "#2 by NIRF",
    "Eligibility": "CAT",
    "Duration": "2 Years",
    "Course Offered": "Full Time",
    "Total Seats": "410",
    "Mode": "Full Time",
    "Degree Type": "On Campus",
    "Course Level": "Post Graduation",
    "Course Credential": "MBA",
    "Fee Link": "#",
    "Total Courses": "45",
    "MBA/PGDM": "45"
  },
  {
    name: "IIM Calcutta",
    "First Year Fees": "₹11,00,000",
    "Hostel Fees": "₹1,05,000",
    "Total Fees": "₹22,00,000 (2 Years)",
    "Ranking": "#3 by NIRF",
    "Eligibility": "CAT",
    "Duration": "2 Years",
    "Course Offered": "Full Time",
    "Total Seats": "420",
    "Mode": "Full Time",
    "Degree Type": "On Campus",
    "Course Level": "Post Graduation",
    "Course Credential": "MBA",
    "Fee Link": "#",
    "Total Courses": "42",
    "MBA/PGDM": "42"
  },
  {
    name: "IIM Lucknow",
    "First Year Fees": "₹10,50,000",
    "Hostel Fees": "₹1,00,000",
    "Total Fees": "₹21,00,000 (2 Years)",
    "Ranking": "#4 by NIRF",
    "Eligibility": "CAT",
    "Duration": "2 Years",
    "Course Offered": "Full Time",
    "Total Seats": "430",
    "Mode": "Full Time",
    "Degree Type": "On Campus",
    "Course Level": "Post Graduation",
    "Course Credential": "MBA",
    "Fee Link": "#",
    "Total Courses": "48",
    "MBA/PGDM": "48"
  },
];


function ComparisonTable({college2 }) {
  // Filter the selected colleges based on college1 and college2 props
  const selectedColleges = dummyData.filter(college => college2.includes(college.name));


  // Extracting all facility names dynamically from the first object in dummyData
  const facilityNames = Object.keys(dummyData[0]).filter(key => key !== 'name');

  return (
    <div className='mb-10 min-w-[300px] w-[85vw]'>
      <TableContainer component={Paper}>
        <Table aria-label="comparison table">
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: '600' }}>College Name</TableCell>
              {facilityNames.map((facility, index) => (
                <TableCell key={index} align="right" sx={{ fontWeight: '600' }}>{facility}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {selectedColleges.map(college => (
              <TableRow key={college.name}>
                <TableCell component="th" scope="row">
                  {college.name}
                </TableCell>
                {facilityNames.map((facility, index) => (
                  <TableCell key={index} align="right">
                    {college[facility]}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default ComparisonTable;
