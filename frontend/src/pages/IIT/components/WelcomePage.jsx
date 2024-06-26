import React from 'react';
import CustomCard from './CustomCard';

const WelcomePage = () => {
    return (
        <div className="flex  mt-6 justify-center gap-3">
            <div className=' flex  w-[80vw] max-sm:w-[98vw] gap-10 '>
           <div className='flex-1 justify-center items-center max-lg:hidden'>
             <h1 className='text-4xl font-bold mb-6'>
             Ignite Your Career Journey
             </h1>
            <p className='text-lg text-gray-600'>Discover global opportunities to learn, showcase your skills, earn CV points, and land your dream job with ease.</p>
           </div>

           <div className='flex-1'>
            <div className='flex gap-4 max-sm:flex-col max-sm:p-5 max-sm:gap-0 max-md:flex-2'>
             <div className='flex flex-col gap-2 flex-1 max-sm:gap-0'>
              <CustomCard header = "Learn" semiheader="Expand"  description="Knowledge Base" img='/learn.png ' bg="#FFB1CC"/>
              <CustomCard header = "Event" semiheader="Expand"  description="Knowledge Base" img='/Practice.png' bg = "#C8BBFF" url="/colleges/iit/event"/>
              <CustomCard header = "Learn" semiheader="Expand"  description="Knowledge Base" img='/Person.png' bg ="#FEC192" url="/colleges/iit/learn"/>
             </div>

             <div className='flex flex-col gap-2 flex-1 max-sm:gap-0'>
             <CustomCard header = "Jobs" semiheader="Expand"  description="Skill hunt" img='/Complete.png' bg = "#9BC9FF"/>
             <CustomCard header = "Start up" semiheader="Expand"  description="Own Startup" img='/Job.png' bg ="#FFDD80"/>
             </div>
            </div>
           </div>
           </div>
        </div>
    );
};

export default WelcomePage;
