import React from 'react';
import './Card.css';

const Card = ({ image, title, description, points, footer }) => {
  return (
    <div className="card flex-col p-4 bg-white rounded-lg shadow-md">
    <div className="flex">
     
      <div className="flex flex-col flex-grow ml-4">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h2 className="text-lg font-bold text-gray-800">{title}</h2>
            <div className="description-container">
              <p className="text-sm text-gray-600">{description}</p>
            </div>
          </div>
        </div>
       
       
      </div>
      <div className="flex-shrink-0 w-35">
        <img className="card-image w-full h-auto object-cover rounded-lg" src={image} alt={title} />
      </div>
      
    </div>
    <div className="grid grid-cols-2 gap-2 my-4">
          {points.map((point, index) => (
            <div key={index} className="bg-gray-200 text-gray-700 rounded-full px-4 py-2 text-center">
              {point}
            </div>
          ))}
        </div>
        <div className="mt-4">
          <p className="text-sm text-gray-600">{footer}</p>
        </div>
    </div>
  );
};

export default Card;
