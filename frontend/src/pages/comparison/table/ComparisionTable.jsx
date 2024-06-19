import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import api from '../../../api';

function ComparisonTable({ data, college2 }) {
  const selectedColleges = data.filter(college => college2.includes(college.collegename));

  console.log(selectedColleges);

  // Extracting all facility names dynamically from the first object in data
  const facilityNames = (Object.keys(selectedColleges[0])).filter(key => (key !== 'collegename' && key !== '_id'));
  console.log(facilityNames);

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
          <TableBody >
            {selectedColleges.map(college => (
              <TableRow key={college.collegename}>
                <TableCell component="th" scope="row"  align="left" sx={{ fontWeight: '400', fontSize:'12px' }}>
                  {college.collegename}
                </TableCell>
                {facilityNames.map((facility, index) => (
                  <TableCell key={index} align="left" sx={{ fontWeight: '400', fontSize:'12px' }}>
                    {typeof college[facility] === 'boolean' ? college[facility].toString() : college[facility]}
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
