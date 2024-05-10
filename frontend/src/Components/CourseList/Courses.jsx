import React,{useState,useEffect} from 'react';
import Card from './Card';
import { useSelector } from 'react-redux';
import data from '../data.json';


function Courses() {
//this code has to be removed
  const courseData=data;
// const courseData = useSelector(state => state.course.courseData);
  return (
    <div className='min-h-screen flex flex-col items-center md:px-32 px-5 my-10'>
      <div className='flex flex-wrap justify-between gap-6 mt-6'> 
        {courseData.map((item) => (
          <div key={item.id} className="w-1/2 md:w-1/3 lg:w-1/4">
            <Card coursedetails={item}/> 
          </div>
        ))}
      </div>
    </div>
  );
}

export default Courses;
