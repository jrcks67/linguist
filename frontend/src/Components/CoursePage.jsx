import React,{useState} from 'react';
import Navbar from '../Containers/Navbar';
import NewNavbar from '../Containers/NewNavbar';
import Img from "../assets/images/about.png"
import CoursePageHeader from './CoursePageHeader';
import CourseContent from './CourseContent';


function CoursePage() {
    const [courseDetails, setCourseDetails]=useState({
            "id":"1",
            "title":"Arabic Language",
            "description":"This program is designed to take you from ZERO knowledge in Arabic to MASTERING the Arabic language through our SYSTEM",
            "level":"Beginner",
            "language":"Arabic",
            "imgUrl":"/Users/bhumikakalra/Desktop/FSAD_Assignment /linguist/frontend/src/assets/learnVideo.mp4",
            "content":[
              "Welcome and Course Introduction",
              "Alphabets in Arabic",
              "Sentence formation",
              "Reading and writing",
              "Verbs",
              "Nouns and Pronouns",
              "Adverbs",
              "Prepositions",
              "Adjectives",
              "Essay writing",
              "Email Writing"
          ]
        }
    );

  return (
    <>
    {/* <Navbar/> */}
    <NewNavbar/>
    {/* <div className='w-ful h-96 border border-gray-100 relative'>
       <img
        src={Img}
        className='absolute w-full h-full insert-0 object-cover'
      />
      <div className='relative rounded-lg bg-white bg-opacity-45 top-12 left-100 p-4 flex flex-col items-start justify-center shadow-lg h-60 w-[800px]'>
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
    </div> */}
    <CoursePageHeader course={courseDetails}/>
    <div className='space-x-20 w-[1500px]'>
      <CourseContent course={courseDetails}/>
    </div>
   
    </>
  )
}

export default CoursePage;