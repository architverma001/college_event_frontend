import React from 'react';

const CodingEvents = () => {
  const events = [
    { name: 'Top Coder', date: 'April 20-21' },
    { name: 'Coder Byte', date: 'April 20-21' },
    { name: 'Code Forces', date: 'April 20-21' },
    { name: 'Leet Code', date: 'April 20-21' },
    { name: 'Kaggle', date: 'April 20-21' },
    { name: 'Google Code Jam', date: 'April 20-21' },
  ];

  return (
    <div className="p-6">
      <div className="text-center bg-blue-200 py-2 rounded-t-lg">
        <h1 className="text-2xl font-semibold">CODING</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 p-6 rounded-b-lg">
        {events.map((event, index) => (
          <div key={index} className="bg-gradient-to-b from-purple-400 to-pink-400 rounded-lg p-4 text-center">
            <h2 className="text-white text-xl font-semibold">{event.name}</h2>
            <p className="text-white mt-2">{event.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CodingEvents;
