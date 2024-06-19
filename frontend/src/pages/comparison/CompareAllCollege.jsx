import React, { useState } from 'react';
import Comparedropdowncard from './comapre/Comparedropdowncard';
import './compare.css'
import ComparisonTable from './table/ComparisionTable';
import { AiOutlineClose } from 'react-icons/ai';
import { useEffect } from 'react';
import  api  from '../../api';
const CompareAllCollege = ({ type }) => {
  // const [college1, setCollege1] = useState('');
  const [dummyData, setDummyData] = useState([]);
  
  const fetchData = async () => {
    console.log('fetching data');
    try {
      const response = await api.get('/colleges');
      if (response.data.success) {
        setDummyData(response.data.data);
      } else {
        console.log('Error fetching data');
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []); // Pa
  const [college2, setCollege2] = useState([]);
  const removeCollege = (college) => {
    setCollege2(college2.filter((c) => c !== college));
  };

  return (
   <div>
     <div className="flex justify-center items-center mt-8">
      <div className="max-w-4xl w-[90vw] bg-white mt-4 p-1 mb-4 rounded-md">
        <h2 className="text-xl font-semibold mb-4 mt-3 text-center">
          Select Colleges to Compare
        </h2>
        <div className="flex flex-col flex-wrap lg:gap-12 gap-3 md:gap-6 sm:gap-2 justify-between min-h-[20vh] p-4 items-center">
      
      
      <div>
       <div className='flex flex-wrap gap-3 items-center '>
        {
          college2.map((college) => (
            <div key={college} className='flex gap-1 py-1 px-3 items-center border rounded-full bg-blue-50'>
              
              <p className='text-lg font-sm'>{college}</p>
              <button
                    className="text-red-500 hover:text-red-700"
                    onClick={() => removeCollege(college)}
                  >
                    <AiOutlineClose className='bg-red-50 rounded-full' />
                  </button>
            </div>
          ))
        }
       </div>
      </div>

      <div>
        <Comparedropdowncard
          type={type}
          data={dummyData}
          setSelectedCollege={setCollege2}
          selectedCollege={college2}
        />
       
      </div>
    </div>
       
      </div>
    </div>

    <div className='flex justify-center flex-col items-center '>
      {
        (college2.length>0 && dummyData.length>0) && (
          <ComparisonTable  college2={college2} data = {dummyData} />
        )
      }
    
    </div>
   </div>
  );
};

export default CompareAllCollege;
