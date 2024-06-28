import React from 'react';

const Culture = () => {
  const events = [
    { name: 'Festival', date: 'April 18-20', location: 'IIMB' },
    { name: 'Festival', date: 'April 18-20', location: 'IIMB' },
    { name: 'Festival', date: 'April 18-20', location: 'IIMB' },
  ];

  return (
    <div className="p-8">
      <div className="bg-gradient-to-r from-purple-400 to-blue-400 text-white text-center py-4 rounded-t-lg">
        CULTURE
      </div>
      <div className="flex justify-around bg-gradient-to-r from-purple-300 to-pink-300 p-4 rounded-b-lg">
        {events.map((event, index) => (
          <div key={index} className="bg-gradient-to-r from-purple-300 to-pink-300 text-white p-6 rounded-lg shadow-lg">
            <h2 className="text-lg font-bold">{event.name}</h2>
            <p>{event.date}</p>
            <p>{event.location}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Culture;
