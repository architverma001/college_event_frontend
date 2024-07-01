import React from 'react';
import CSRCard from './CSRCard';

const csrData = [
    {
        image: '/lab.png',
        header: 'Mini Science Centre',
        description: 'Mini Science Centre in schools for teaching science and maths to school children with easy to use hands-on working models...',
        link: '#',
        bgColor: 'bg-blue-500' // Updated background color
    },
    {
        image: '/help.png',
        header: 'Employee Engagement',
        description: 'Strategic, custom-designed and masterfully executed programs that are perfectly aligned with...',
        link: '#',
        bgColor: 'bg-red-500' // Updated background color
    },
    {
        image: '/study.png',
        header: 'Tinker Lab',
        description: 'Tinker Lab is a program where students’ imagination meets technology. It’s a platform where they not only learn and...',
        link: '#',
        bgColor: 'bg-yellow-500' // Updated background color
    },
    {
        image: '/bulb.png',
        header: 'Just Learning',
        description: 'Innovative ideas presented by students in science exhibitions pan India are covered and are uploaded on our platform...',
        link: '#',
        bgColor: 'bg-green-500' // Updated background color
    }
];

const CSRSolution = () => {
    return (
        <div className='flex flex-col justify-center '>
            <h1 className=' text-white font-semibold text-lg bg-blue-900 p-4'>
                Stem Project Based Learning
            </h1>
        <div className="bg-gray-100  p-8 flex flex-wrap justify-center"
        style={{ backgroundImage: 'url(/bg-tech.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}
        > 
           
            {csrData.map((data, index) => (
                <CSRCard 
                    key={index}
                    image={data.image}
                    header={data.header}
                    description={data.description}
                    link={data.link}
                    bgColor={data.bgColor}
                />
            ))}
        </div>
        </div>
    );
};

export default CSRSolution;
