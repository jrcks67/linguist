import React from 'react';
import Navbar from '../Containers/Navbar';
import NewNavbar from '../Containers/NewNavbar';
import img from "../assets/images/about.png";
import { Link } from 'react-router-dom';

function About() {
  return (
    <>
    {/* <Navbar/> */}
    <NewNavbar/>
      <div className='md:min-h-screen flex flex-col-reverse md:flex-row items-center gap-5 md:mx-32 mx-5 mt-14'>
        <div className='w-full md:w-2/4'>
          <span><img src={img} alt="img" className='opacity-75 rounded-lg'/></span>
        </div>
        <div className='w-full md:w-2/4 text-center space-y-2'>
          <h3 className='text-4xl font-semibold'>About us</h3>
          <p className='text-4xl font-semibold text-gray-600'>here is about us details</p>
          <p>
           If you have any feedback , please write us to us !!!
          </p>
          <Link to="Review us">
          <button className='bg-white py-2 px-5 rounded-full mt-4 outline hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] hover:bg-teal-100 bg-opacity-50 hover:text-white transition-null'>Go</button>
          </Link>
        </div>
      </div>
    </>
  )
}

export default About
