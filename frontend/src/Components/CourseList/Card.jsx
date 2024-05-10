import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ coursedetails}) => {
  return (
    <div className='flex flex-col items-center space-evenly justify-between bg-brightBackground border-2 border-yellowColor md:border md:w-full p-12 cursor-pointer:rounded-lg hover:shadow-[rgba(0,_0,_0,_0.23)_0px_3px_8px] transition-all bg-fixed rounded-xl'
         style={{ width: '400px', height: '400px'}}> 
      <div className='w-full h-40 rounded-lg overflow-hidden'> 
        <img src={coursedetails.imgUrl} alt="" className='h-full w-full object-cover'/> 
      </div>
      <div id="course_content"> 
        <h3 className='font-semibold text-lg text-center my-5 underline'>{coursedetails?.title}</h3> 
        <h2 className='text-xs text-gray-700'>Level: {coursedetails?.level}</h2>
        <p className='tex-lightText text-center md:text-start overflow-hidden overflow-ellipsis' style={{ maxHeight: '100px' }}> 
          {coursedetails.description}
        </p>
      </div> 
      <button className='bg-yellowColor text-white px-8 py-3 rounded-xl font-semibold hover:bg-black'>
      <Link
        to={{
          pathname:`/learn/${coursedetails?.id}`,
          state:{ coursedetails: coursedetails }
        }}
      >
          Read More
        </Link>
      </button>
    </div>
  );
};

export default Card;
