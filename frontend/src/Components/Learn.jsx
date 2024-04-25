import React from 'react';
import Navbar from '../Containers/Navbar';
import learnVideo from '../assets/learnVideo.mp4';
import Courses from './Courses';
import NewNavbar from '../Containers/NewNavbar';

const Learn = () => {
  return (
    <>
    {/* <Navbar/> */}
    <NewNavbar/>
    <div className='w-ful h-96 border border-gray-100 relative'>
       <video 
        src= {learnVideo}
        muted
        loop
        autoPlay
        className='absolute w-full h-full inset-0 object-cover'
      />
      <div className='absolute bg-white top-12 left-8 p-4 flex flex-col items-start justify-center shadow-lg h-40 w-[440px]'>
          <h2 className='text-3xl font-bold mb-2'>
            Hi guys welcome 
          </h2>
          <h3 className='text-xl'>
            Look at this project
          </h3>
          <h3 className='text-xl'>
            the goal is to learn french 
          </h3>
      </div>
    </div>
    <Courses/>
    </>
  )
}

export default Learn