import React,{useState} from 'react';
import Navbar from '../Containers/Navbar';
import NewNavbar from '../Containers/NewNavbar';
import Img from "../assets/images/About/about.png"
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
    <CoursePageHeader course={courseDetails}/>
    <div className='space-x-20 w-[1500px]'>
      <CourseContent course={courseDetails}/>
    </div>
   
    </>
  )
}

export default CoursePage;