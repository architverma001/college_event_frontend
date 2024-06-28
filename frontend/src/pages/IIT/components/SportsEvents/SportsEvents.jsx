import React, { useState } from 'react';

const SportsEvents = () => {
  const indoorEvents = [
    { name: 'Swimming', date: 'April 18-29', location: 'IITM' },
    { name: 'Badminton', date: 'April 18-29', location: 'AIIMS' },
    { name: 'Table Tennis', date: 'April 18-29', location: 'IIMC' },
    { name: 'Squash', date: 'April 18-29', location: 'NYU' },
  ];

  const outdoorEvents = [
    { name: 'Cricket', date: 'April 18-29', location: 'Harvard' },
    { name: 'Golf', date: 'April 18-29', location: 'IITD' },
    { name: 'Running', date: 'April 18-29', location: 'UBC' },
    { name: 'Tennis', date: 'April 18-29', location: 'IITG' },
  ];

  const [showIndoor, setShowIndoor] = useState(true);

  return (
    <div className="max-w-[90vw] mx-auto mt-10 ">
      <div className="text-center font-bold py-4 rounded-t-lg">
        <h1 className="text-2xl font-bold">SPORTS</h1>
      </div>
      <div className=" rounded-b-lg ">
        <div className="flex justify-center space-x-4 mb-6">
          <button
            className={`py-2 px-4 rounded-lg focus:outline-none ${showIndoor ? 'bg-blue-500 text-white' : 'bg-gray-300 text-black'}`}
            onClick={() => setShowIndoor(true)}
          >
            INDOOR
          </button>
          <button
            className={`py-2 px-4 rounded-lg focus:outline-none ${!showIndoor ? 'bg-blue-500 text-white' : 'bg-gray-300 text-black'}`}
            onClick={() => setShowIndoor(false)}
          >
            OUTDOOR
          </button>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {showIndoor
            ? indoorEvents.map((event, index) => (
                <div key={index} className="bg-gray-100 rounded-lg p-6 shadow-md">
                  <h2 className="text-xl font-semibold mb-2">{event.name}</h2>
                  <p className="text-gray-700">{event.date}</p>
                  <p className="text-gray-700">{event.location}</p>
                </div>
              ))
            : outdoorEvents.map((event, index) => (
                <div key={index} className="bg-gray-100 rounded-lg p-6 shadow-md">
                  <h2 className="text-xl font-semibold mb-2">{event.name}</h2>
                  <p className="text-gray-700">{event.date}</p>
                  <p className="text-gray-700">{event.location}</p>
                </div>
              ))}
        </div>
      </div>
    </div>
  );
};

export default SportsEvents;
