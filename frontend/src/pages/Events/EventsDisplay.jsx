import React from 'react';

const EventsDisplay = ({ data }) => {
  // Array of dark color classes
  const darkColors = [
    'bg-blue-900',
    'bg-green-900',
    'bg-indigo-900',
    'bg-purple-900',
    'bg-yellow-900',
    'bg-red-900',
  ];

  return (
    <div className=' min-h-screen overflow-hidden'>
        <h1 className='text-white font-semibold text-lg bg-blue-900 p-4'>
            Explore the Student Events
        </h1>
    <div className="flex mx-auto p-4  ">
      <div className="flex gap-5 overflow-x-auto ">
        {data.map((event, index) => (
          <div key={index} className={`${darkColors[index % darkColors.length]} text-white shadow-md rounded-lg p-6 mb-4`}>
            <h2 className="text-2xl font-bold mb-2 w-[300px] h-[3rem]">{event.studentevent}</h2>
            <p className="text-gray-300 mb-2"><strong>Date:</strong> {event.date}</p>
            <p className="text-gray-300 mb-2"><strong>Type:</strong> {event.type}</p>
            <div className="flex space-x-4">
              <a href={event.instagramlink} target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:underline">Instagram</a>
              {event.websitelink && <a href={event.websitelink} target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:underline">Website</a>}
              {event.linkedin && <a href={event.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:underline">LinkedIn</a>}
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default EventsDisplay;
