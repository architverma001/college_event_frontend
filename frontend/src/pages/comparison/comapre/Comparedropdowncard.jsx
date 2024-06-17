import React, { useState, useEffect } from 'react';
import { AiOutlineSearch, AiOutlineClose } from 'react-icons/ai';
import options from './../options';

const Comparedropdowncard = ({ type, selectedCollege, setSelectedCollege }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const colleges = options.find((option) => option.type === type)?.colleges || [];
  const [filteredColleges, setFilteredColleges] = useState(colleges);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  useEffect(() => {
    setFilteredColleges(
      colleges.filter((college) =>
        college.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm, colleges]);

  const handleSearchChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    setIsDropdownVisible(true); // Always show dropdown on search
  };

  const handleClearSearch = () => {
    setSearchTerm('');
    setIsDropdownVisible(false);
  };

  const handleSelectCollege = (college) => {
    setSelectedCollege(college);
    setSearchTerm(college); // Set input to selected college name
    setIsDropdownVisible(false);
  };

  return (
    <div className="relative">
    <div className="flex items-center border border-gray-300 rounded px-2 py-1">
      <AiOutlineSearch className="text-gray-500" />
      <input
        type="text"
        className="flex-grow px-2 py-1 focus:outline-none"
        placeholder="Search College"
        value={searchTerm}
        onChange={handleSearchChange}
        onFocus={() => setIsDropdownVisible(true)}
      />
      {searchTerm && (
        <AiOutlineClose
          className="text-gray-500 cursor-pointer"
          onClick={handleClearSearch}
        />
      )}
    </div>
    {isDropdownVisible && (
      <div className="absolute top-12 left-5 w-full bg-white border border-gray-300 rounded shadow-lg max-h-60 overflow-y-auto z-10">
        {filteredColleges.length > 0 ? (
          filteredColleges.map((college, index) => (
            <div
              key={index}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => handleSelectCollege(college)}
            >
              {college}
            </div>
          ))
        ) : (
          <div className="px-4 py-2 text-gray-500">No results found</div>
        )}
      </div>
    )}
  </div>
  
  );
};

export default Comparedropdowncard;
