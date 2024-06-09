import React, { useState } from 'react';
import './Home.css'

import Card from '../../components/cards/Card'
import CustomCardSlider from '../../components/cards/CustomCardSlider';
function HomePage() {

  const cardData = [
    {
      image: '/school.png',
      title: 'School',
      description: 'School is a place where we learn,School is a place where we learn,School is a place where we learn,School is a place where we learn',
      points: ['Point 1', 'Point 2', 'Point 3', 'Point 4'],
      footer: 'See more',
    },
    {
      image: '/test.png',
      title: 'Test',
      description: 'Testing is important',
      points: ['Point A', 'Point B', 'Point C', 'Point D'],
      footer: 'Explore more',
    },
    {
      image: 'public-relation.png',
      title: 'Public Relations',
      description: 'Managing public image',
      points: ['Point X', 'Point Y', 'Point Z', 'Point W'],
      footer: 'Learn more',
    },
    {
      image: 'freelancer.png',
      title: 'Freelancing',
      description: 'Work independently',
      points: ['Point 1', 'Point 2', 'Point 3', 'Point 4'],
      footer: 'Discover more',
    },
  ];
  
  return (
    <div className='flex flex-col mb-11'>
     
      
     <CustomCardSlider cards={cardData} />
     {/* <SwiperCards/> */}

    </div>
  )
}

export default HomePage
