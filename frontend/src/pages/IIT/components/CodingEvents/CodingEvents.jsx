import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const CodingEvents = () => {
  const events = [
    { name: 'Top Coder', date: 'April 20-21' },
    { name: 'Coder Byte', date: 'April 20-21' },
    { name: 'Code Forces', date: 'April 20-21' },
    { name: 'Leet Code', date: 'April 20-21' },
    { name: 'Kaggle', date: 'April 20-21' },
    { name: 'Google Code Jam', date: 'April 20-21' },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1224, // large screens
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        }
      },

      {
        breakpoint: 1124, // large screens
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 880, // medium screens
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 600, // small screens
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <div className="p-6 flex justify-center">
      <div className="w-[95%]">
        <div className="text-center py-2 rounded-t-lg">
          <h1 className="text-3xl font-semibold text-gray-800">CODING EVENTS</h1>
        </div>
        <Slider {...settings}>
          {events.map((event, index) => (
            <div key={index} className="flex justify-center">
              <div className="bg-white rounded-lg  shadow-md overflow-hidden min-w-[220px] min-h-[220px] flex flex-col items-center justify-center hover:flex-2">
                <div className="px-6 py-4 text-center">
                  <h2 className="text-xl font-semibold text-gray-800">{event.name}</h2>
                  <p className="text-gray-600 mt-2">{event.date}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default CodingEvents;
