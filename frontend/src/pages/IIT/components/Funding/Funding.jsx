import React from 'react';

const funding = [
  { text: "Indiegogo", date: "April 20-21" },
  { text: "Ipventure", date: "April 20-21" },
  { text: "Research Funds", date: "April 20-21" },
  { text: "Sidbi Venture", date: "April 20-21" },
  { text: "AFS", date: "April 20-21" },
  { text: "Government Grants", date: "April 20-21" },
  { text: "Venture Capital", date: "April 20-21" },
  { text: "Research Grant", date: "April 20-21" },
  { text: "Philanthropic Donation", date: "April 20-21" },
  { text: "Revenue Sharing", date: "April 20-21" },
  { text: "Corporate Sponsorship", date: "April 20-21" },
  { text: "Endowments", date: "April 20-21" },
];

const Funding = () => {
  return (
    <div className="flex flex-col items-center p-8 bg-white">
      <div className="text-2xl font-bold text-blue-600">FUNDING</div>
      
      <div className="mt-4 flex flex-wrap justify-center space-x-4 space-y-4 w-full">
        {funding.map((fund, index) => (
          <FundingCard key={index} text={fund.text} date={fund.date} />
        ))}
      </div>
    </div>
  );
};

const FundingCard = ({ text, date }) => (
  <div className="bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 text-white font-bold py-4 px-6 rounded-md shadow-md text-center w-1/4 m-2">
    <div>{text}</div>
    <div className="text-sm mt-2">{date}</div>
  </div>
);

export default Funding;
