import React from 'react';

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

  return (
    <div className="max-w-screen-lg mx-auto mt-10">
      <div className="text-center bg-purple-200 py-4 rounded-t-lg">
        <h1 className="text-2xl font-semibold">SPORTS</h1>
      </div>
      <div className="bg-white p-6 rounded-b-lg shadow-lg">
        <div className="flex justify-center space-x-4 mb-6">
          <button className="bg-purple-400 text-white py-2 px-4 rounded-lg focus:outline-none">INDOOR</button>
          <button className="bg-purple-400 text-white py-2 px-4 rounded-lg focus:outline-none">OUTDOOR</button>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {indoorEvents.map((event, index) => (
                <div key={index} className="bg-gradient-to-b from-purple-400 to-pink-400 rounded-lg p-6 text-center">
                  <h2 className="text-white text-xl font-semibold">{event.name}</h2>
                  <p className="text-white mt-2">{event.date}</p>
                  <p className="text-white mt-2">{event.location}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {outdoorEvents.map((event, index) => (
                <div key={index} className="bg-gradient-to-b from-purple-400 to-pink-400 rounded-lg p-6 text-center">
                  <h2 className="text-white text-xl font-semibold">{event.name}</h2>
                  <p className="text-white mt-2">{event.date}</p>
                  <p className="text-white mt-2">{event.location}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SportsEvents;
