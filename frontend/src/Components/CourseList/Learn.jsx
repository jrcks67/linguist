import React from 'react';
import Courses from './Courses';
import img from '../../assets/images/LearnCover/courseHeader.png';
import NewNavbar from '../../Containers/NavBar/Navbar';

const Learn = () => {
  return (
    <>
    <NewNavbar/>
    <div className='w-[2100px] h-96 border border-gray-100 relative'>
       <img
        src= {img}
        alt="img"
        className='absolute w-full h-full inset-0 object-cover'
      />
      <div className='absolute bg-white text-black top-12 left-8 p-4 opacity-80 flex flex-col items-start justify-center shadow-lg h-40 w-[440px] rounded-xl'>
          <h2 className='text-3xl font-bold mb-2'>
            Welcome Username,
          </h2>
          <h3 className='text-xl'>
          Your ultimate destination for mastering languages effortlessly!
          </h3>
      </div>
    </div>
    <Courses/>
    </>
  )
}

export default Learn