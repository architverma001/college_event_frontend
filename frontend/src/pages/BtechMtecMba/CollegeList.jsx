import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { CircularProgress, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { Link } from 'react-router-dom';
; // Importing the image

const CollegeList = ({ course }) => {
  const [colleges, setColleges] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchColleges = async () => {
      try {
        // console.log(`${process.env.REACT_APP_BACKEN_URL}/colleges`)
        const response = await axios.get(`${process.env.REACT_APP_BACKEN_URL}/colleges`);
        setColleges(response.data.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching colleges:', error);
        setError('Error fetching colleges. Please try again later.');
        setLoading(false);
      }
    };

    fetchColleges();
  }, []);

  const filteredColleges = colleges.filter(college =>
    college.courses.some(courseData =>
      courseData.coursename.toLowerCase() === course.toLowerCase()
    )
  );

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  const capitalizedCourse = capitalizeFirstLetter(course);
  

  return (
    <div style={{ minHeight: 'calc(100vh - 200px)' }} className='p-3'>
      <div className="relative">
        <img src="/oxford.jpg" alt="Oxford University" className="w-full h-60 object-cover rounded-lg shadow-md" loading= "lazy" />
        <div className="absolute inset-0 bg-black opacity-40 rounded-lg"></div>
        <div className="absolute inset-0 flex items-center justify-center text-white text-4xl font-bold">
          <h1 className="text-center">Colleges Offering {capitalizedCourse}</h1>
        </div>
      </div>
      {loading ? (
        <div className="flex justify-center items-center h-64">
          <CircularProgress color="secondary" size={80} />
        </div>
      ) : error ? (
        <div className="text-red-500 text-center mt-4">{error}</div>
      ) : (
        <TableContainer component={Paper} className="mt-4">
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontWeight: 600 }}>College Name</TableCell>
                <TableCell sx={{ fontWeight: 600 }}>Location</TableCell>
                <TableCell sx={{ fontWeight: 600 }}>Contact</TableCell>
                <TableCell sx={{ fontWeight: 600 }}>Email</TableCell>
                <TableCell sx={{ fontWeight: 600 }}>Approved Authority</TableCell>
                <TableCell sx={{ fontWeight: 600 }}>Rating</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredColleges.map(college => (
                <TableRow key={college._id} component={Link} to={`/collegeInformation/${college._id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                 <TableCell sx={{ fontWeight: 600 }}>{college.collegename}</TableCell>
                  <TableCell>{`${college.address}, ${college.city}, ${college.state}, ${college.country}`}</TableCell>
                  <TableCell>{college.contact}</TableCell>
                  <TableCell>{college.email}</TableCell>
                  <TableCell>{college.approvedaurthority}</TableCell>
                  <TableCell>{`${college.userrating} (Total ratings: ${college.totalrating})`}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </div>
  );
};

export default CollegeList;
