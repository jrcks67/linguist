import React from 'react';
import Navbar from '../Containers/Navbar';
import NewNavbar from '../Containers/NewNavbar';
import img from "../assets/images/LearnCover/about.png";
import { Link } from 'react-router-dom';

function About() {
  return (
    <>
      {/* <Navbar/> */}
      <NewNavbar/>
      <div className='md:min-h-screen flex flex-col md:flex-row items-center justify-center gap-5 md:mx-32 mx-5 mt-8 pb-25'>
        <div className='flex flex-col items-start md:w-2/4 text-start space-y-2 mb-6'>
          <h3 className='text-2xl font-semibold items-start'>About us</h3>
          <p className='text-sm font-semibold text-gray-600 items-start'>Linguist is a dynamic language learning platform designed to empower users worldwide. With interactive lessons, personalized learning experiences, and assessment tools, we strive to make language acquisition both effective and enjoyable. </p>
          <p className='py-2 text-gray-600 pl-2 border-l-4 border-red-700 text-base'>We value your feedback! Share your thoughts about Linguist and help us improve at linguistlearning@gmail.com</p>
          {/* <Link to="Review us">
          <button className='bg-white py-2 px-5 rounded-full mt-4 outline hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] hover:bg-teal-100 bg-opacity-50 hover:text-white transition-null'>Go</button>
          </Link> */}
        </div>
        <div className='flex items-center md:w-2/4'>
          <img src={img} alt="img" className='opacity-75 rounded-lg'/>
        </div>
      </div>
    </>
  )
}

export default About;
