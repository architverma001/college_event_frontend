import React, { useState } from 'react';
import Comparedropdowncard from './comapre/Comparedropdowncard';

import ComparisonTable from './table/ComparisionTable';

const CompareAllCollege = ({ type }) => {
  const [college1, setCollege1] = useState('');
  const [college2, setCollege2] = useState('');

  return (
   <div>
     <div className="flex justify-center items-center mt-8">
      <div className="max-w-6xl w-[80vw] bg-white mt-4 p-1 mb-4 rounded-md">
        <h2 className="text-xl font-semibold mb-4 mt-3 text-center">
          Select Colleges to Compare
        </h2>
        <div className="flex flex-wrap lg:gap-12 gap-3 md:gap-6 sm:gap-2 justify-center min-h-[20vh]">
      <div>
        <Comparedropdowncard
          type={type}
          selectedCollege={college1}
          setSelectedCollege={setCollege1}
        />
        <img
          src={college1 ? "/school.png" : "/school.png"}
          alt="vs"
          className="w-full h-[20vh] object-contain p-2"
        />
      </div>
      <div>
        <Comparedropdowncard
          type={type}
          selectedCollege={college2}
          setSelectedCollege={setCollege2}
        />
        <img
          src={college2 ? "/school.png" : "/school.png"}
          alt="vs"
          className="w-full h-[20vh] object-contain p-2"
        />
      </div>
    </div>
        {/* <div className="flex justify-center mt-4">
          <button
            onClick={() => {
              console.log(`Comparing ${college1} and ${college2}`);
            }}
            className={`bg-blue-500 mb-2 text-white px-4 py-2 rounded-md shadow-md ${
              !college1 || !college2 ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            disabled={!college1 || !college2}
          >
            Compare
          </button>
        </div> */}
      </div>
    </div>

    <div className='flex justify-center flex-col items-center '>
      {
        (college1 || college2) && (
          <ComparisonTable college1={college1} college2={college2} />
        )
      }
    
    </div>
   </div>
  );
};

export default CompareAllCollege;
