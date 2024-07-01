import React from 'react';

const Opportunities = () => {
  return (
    <div className="flex flex-col items-center p-8 bg-gray-100 min-h-screen">
      <div className="text-3xl font-extrabold text-blue-600 mb-8">CHANCE / OPPORTUNITY</div>
      
      <div className="flex flex-col space-y-8 w-full max-w-4xl">
        <div className="flex flex-wrap justify-around gap-4">
          <OpportunityButton text="Senior Staff Research" />
          <OpportunityButton text="E-masters" />
          <OpportunityButton text="Internship" />
        </div>

        <div className="flex flex-wrap justify-around gap-4">
          <OpportunityCard text="Scholarship" date="April 20-21" org="PMFIR" />
          <OpportunityCard text="Faculty Position" date="April 20-21" org="IITGN" />
        </div>

        <div className="flex flex-wrap justify-around gap-4">
          <OpportunityCard text="PhD Scholar" date="April 20-21" org="MIT" />
          <OpportunityCard text="Research Assistant" date="April 20-21" org="IITB" />
        </div>

        <div className="flex flex-wrap justify-around gap-4">
          <OpportunityButton text="Visiting Student" />
          <OpportunityButton text="Contractual Staff" />
          <OpportunityButton text="Project Position" />
        </div>
      </div>
    </div>
  );
};

const OpportunityButton = ({ text }) => (
  <button className="bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 text-white font-semibold py-2 px-6 rounded-lg shadow-lg hover:scale-105 transform transition-transform duration-200 ease-in-out">
    {text}
  </button>
);

const OpportunityCard = ({ text, date, org }) => (
  <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 text-white font-semibold py-6 px-8 rounded-lg shadow-lg w-full sm:w-1/3 md:w-1/4 text-center">
    <div className="text-lg">{text}</div>
    <div className="text-sm mt-2">{date}</div>
    <div className="text-sm mt-1">{org}</div>
  </div>
);

export default Opportunities;
