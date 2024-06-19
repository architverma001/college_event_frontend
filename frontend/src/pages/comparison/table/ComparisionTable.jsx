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
  // Add more colleges as needed
];

function ComparisonTable({ college1, college2 }) {
  // Filter the selected colleges based on college1 and college2 props
  const selectedColleges = dummyData.filter(college => college.name === college1 || college.name === college2);

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
