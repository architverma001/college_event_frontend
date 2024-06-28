import React from 'react';

function Collaboration() {
  // Data for each collaboration entry
  const collaborations = [
    {
      department: 'Engineering',
      professor: 'Emily Smith',
      research: 'Impact of Social Media on Mental Health',
      university: 'MIT'
    },
    {
      department: 'Engineering',
      professor: 'Emily Smith',
      research: 'Impact of Social Media on Mental Health',
      university: 'MIT'
    },
    {
      department: 'Engineering',
      professor: 'Emily Smith',
      research: 'Impact of Social Media on Mental Health',
      university: 'MIT'
    }
  ];

  return (
    <div className="p-6">
      <div className="text-center bg-blue-200 py-2 rounded-t-lg">
        <h1 className="text-3xl font-bold text-center mb-8">COLLABORATION</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 bg-blue-300 p-6 rounded-b-lg">
        {collaborations.map((collab, index) => (
          <div key={index} className="bg-purple-400 rounded-lg p-4 text-center">
            <h3 className="text-white text-xl font-semibold mb-2">{collab.department}</h3>
            <div className="text-white">
              <p><strong>Professor:</strong> {collab.professor}</p>
              <p><strong>Research:</strong> {collab.research}</p>
              <p><strong>University:</strong> {collab.university}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Collaboration;
