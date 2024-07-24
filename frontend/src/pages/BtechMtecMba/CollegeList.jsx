// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { CircularProgress, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
// import { Link } from 'react-router-dom';
// import Loader from '../../components/customloader/Loader';
// ; // Importing the image

// const CollegeList = ({ course }) => {
//   const [colleges, setColleges] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchColleges = async () => {
//       try {
//         // console.log(`${process.env.REACT_APP_BACKEN_URL}/colleges`)
//         const response = await axios.get(`${process.env.REACT_APP_BACKEN_URL}/colleges/collegedummy`);
//         console.log(response.data.data);
//         setColleges(response.data.data);

        
//       } catch (error) {
//         console.error('Error fetching colleges:', error);
//         setError('Error fetching colleges. Please try again later.');
        
//       }
//       finally{
//         setLoading(false);
//       }
//     };

//     fetchColleges();
//   }, []);

//   const filteredColleges = colleges.filter(college =>
//     college.courses.some(courseData =>
//       courseData.coursename.toLowerCase() === course.toLowerCase()
//     )
//   );

//   const capitalizeFirstLetter = (string) => {
//     return string.charAt(0).toUpperCase() + string.slice(1);
//   };
//   const capitalizedCourse = capitalizeFirstLetter(course);
  

//   return (
//     <div style={{ minHeight: 'calc(100vh - 200px)' }} className='p-3'>
//       <div className="relative">
//         <img src="/oxford.jpg" alt="Oxford University" className="w-full h-60 object-cover rounded-lg shadow-md" loading= "lazy" />
//         <div className="absolute inset-0 bg-black opacity-40 rounded-lg"></div>
//         <div className="absolute inset-0 flex items-center justify-center text-white text-4xl font-bold">
//           <h1 className="text-center">Colleges Offering {capitalizedCourse}</h1>
//         </div>
//       </div>
//       {loading ? (
//         <div className="flex justify-center items-center h-64">
//           <Loader  />
//         </div>
//       ) : error ? (
//         <div className="text-red-500 text-center mt-4">{error}</div>
//       ) : (
//          <TableContainer component={Paper} className="mt-4 rounded-[50px] bg-gradient-to-br from-[#cacaca] to-[#f0f0f0] shadow-[20px_20px_78px_#dedede,-20px_-20px_78px_#e2e2e2]">
//           <Table>
//             <TableHead>
//               <TableRow>
//                 <TableCell sx={{ fontWeight: 600 }}>College Name</TableCell>
//                 <TableCell sx={{ fontWeight: 600 }}>Location</TableCell>
//                 <TableCell sx={{ fontWeight: 600 }}>Contact</TableCell>
//                 <TableCell sx={{ fontWeight: 600 }}>Email</TableCell>
//                 <TableCell sx={{ fontWeight: 600 }}>Approved Authority</TableCell>
//                 <TableCell sx={{ fontWeight: 600 }}>Rating</TableCell>
//               </TableRow>
//             </TableHead>
//             <TableBody>
//               {filteredColleges.map(college => (
//                 <TableRow key={college._id} component={Link} to={`/collegeInformation/${college._id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
//                  <TableCell sx={{ fontWeight: 600 }}>{college.collegename}</TableCell>
//                   <TableCell>{`${college.address}, ${college.city}, ${college.state}, ${college.country}`}</TableCell>
//                   <TableCell>{college.contact}</TableCell>
//                   <TableCell>{college.email}</TableCell>
//                   <TableCell>{college.approvedaurthority}</TableCell>
//                   <TableCell>{`${college.userrating} (Total ratings: ${college.totalrating})`}</TableCell>
//                 </TableRow>
//               ))}
//             </TableBody>
//           </Table>
//         </TableContainer>
//       )}
//     </div>
//   );
// };

// export default CollegeList;



import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { CircularProgress, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import Loader from '../../components/customloader/Loader'; // Importing the image

const CollegeList = ({ course }) => {
  const [colleges, setColleges] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1); // State for the current page
  const [itemsPerPage] = useState(25); // Number of colleges per page
  const [hasMore, setHasMore] = useState(true); // To determine if there are more colleges to load

  useEffect(() => {
    const fetchColleges = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_BACKEN_URL}/colleges/collegedummy`, {
          params: {
            page: page,
            limit: itemsPerPage
          }
        });
        if (response.data.data.length < itemsPerPage) {
          setHasMore(false); // No more colleges to load
        }
        setColleges(prevColleges => [...prevColleges, ...response.data.data]);
      } catch (error) {
        console.error('Error fetching colleges:', error);
        setError('Error fetching colleges. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchColleges();
  }, [page]);

  const filteredColleges = colleges.filter(college =>
    college.courses.some(courseData =>
      courseData.type === course
    )
  );

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const capitalizedCourse = capitalizeFirstLetter(course);

  const handleShowMore = () => {
    setPage(prevPage => prevPage + 1); // Load the next page
  };

  return (
    <div style={{ minHeight: 'calc(100vh - 200px)' }} className='p-3'>
      <div className="relative">
        <img src="/oxford.jpg" alt="Oxford University" className="w-full h-60 object-cover rounded-lg shadow-md" loading="lazy" />
        <div className="absolute inset-0 bg-black opacity-40 rounded-lg"></div>
        <div className="absolute inset-0 flex items-center justify-center text-white text-4xl font-bold">
          <h1 className="text-center">Colleges Offering {capitalizedCourse}</h1>
        </div>
      </div>
      {loading ? (
        <div className="flex justify-center items-center h-64">
          <Loader />
        </div>
      ) : error ? (
        <div className="text-red-500 text-center mt-4">{error}</div>
      ) : (
        <>
          <TableContainer component={Paper} className="mt-4 rounded-[50px] bg-gradient-to-br ">
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell sx={{ fontWeight: 600 }}>College Name</TableCell>
                  <TableCell sx={{ fontWeight: 600 }}>State</TableCell>
                  <TableCell sx={{ fontWeight: 600 }}>City</TableCell>
                  <TableCell sx={{ fontWeight: 600 }}>Campus size</TableCell>
                  <TableCell sx={{ fontWeight: 600 }}>College Type</TableCell>
                  <TableCell sx={{ fontWeight: 600 }}>Average Fees</TableCell>
                  <TableCell sx={{ fontWeight: 600 }}>Rating</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredColleges.map(college => (
                  <TableRow key={college._id} component={Link} to={`/collegeInformation/${college._id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                    <TableCell sx={{ fontWeight: 600 }}>{college.collegename}</TableCell>
                    <TableCell>{`${college.State},${college.country}`}</TableCell>
                    <TableCell>{`${college.city}`}</TableCell>
                    <TableCell>{college.campussize}</TableCell>
                    <TableCell>{college.collegetype}</TableCell>
                    <TableCell>{college.averagefees.toFixed(2)}</TableCell>
                    <TableCell>{college.rating !== null && college.rating !== undefined ? (`${college.rating} `) : (`NA `)}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          {hasMore && (
            <div className="flex justify-center mt-4">
              <Button
                onClick={handleShowMore}
                className="bg-blue-600 text-white"
                variant="contained"
              >
                Show More
              </Button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default CollegeList;
