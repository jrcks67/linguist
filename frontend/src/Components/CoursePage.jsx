// import React,{useState} from 'react';
// import Navbar from '../Containers/Navbar';
// import NewNavbar from '../Containers/NewNavbar';
// import Img from "../assets/images/About/about.png"
// import CoursePageHeader from './CoursePageHeader';
// import CourseContent from './CourseContent';


// function CoursePage() {
//     const [courseDetails, setCourseDetails]=useState({
//             "id":"1",
//             "title":"Arabic Language",
//             "description":"This program is designed to take you from ZERO knowledge in Arabic to MASTERING the Arabic language through our SYSTEM",
//             "level":"Beginner",
//             "language":"Arabic",
//             "imgUrl":"/Users/bhumikakalra/Desktop/FSAD_Assignment /linguist/frontend/src/assets/learnVideo.mp4",
//             "content":[
//               {"contentId":"c-7SVieC_04","contentTitle":"Welcome and Course Introduction"},
//               {"contentId":"1AT7IMLcA58","contentTitle":"Alphabets in Arabic"},
//               {"contentId":"8pfQg26vfaA","contentTitle":"Sentence formation"},
//               {"contentId":"LTwCmA6AjdI","contentTitle":"Reading and writing"},
//               {"contentId":"c-7SVieC_04","contentTitle":"Nouns and Pronouns"},
//               {"contentId":"1AT7IMLcA58","contentTitle":"Prepositions"},
//               {"contentId":"8pfQg26vfaA","contentTitle":"Adjectives"},
//               {"contentId":"LTwCmA6AjdI","contentTitle":"Essay writing"},
//               {"contentId":"c-7SVieC_04","contentTitle":"Email Writing"},
//               {"contentId":"1AT7IMLcA58","contentTitle":"Advers"},
//               {"contentId":"8pfQg26vfaA","contentTitle":"Verbs"}  
//           ]
//         }
//     );

//   return (
//     <>
//     {/* <Navbar/> */}
//     <NewNavbar/>
//     <CoursePageHeader course={courseDetails}/>
//     <div className='space-x-20 w-[1500px]'>
//       <CourseContent course={courseDetails}/>
//     </div>
   
//     </>
//   )
// }

// export default CoursePage;

import React, { useState } from 'react';
import CoursePageHeader from './CoursePageHeader';
import CourseContent from './CourseContent';
import { useLocation } from 'react-router-dom';
import NewNavbar from '../containers/NewNavbar';

function CoursePage() {
    const location=useLocation();
    // const {courseDetails}=location.state;
    const [courseDetails, setCourseDetails]=useState({
            "id":"1",
            "title":"Arabic Language",
            "description":"This program is designed to take you from ZERO knowledge in Arabic to MASTERING the Arabic language through our SYSTEM",
            "level":"Beginner",
            "language":"Arabic",
            "imgUrl":"/Users/bhumikakalra/Desktop/FSAD_Assignment /linguist/frontend/src/assets/learnVideo.mp4",
            "content":[
              {"contentId":"c-7SVieC_04","contentTitle":"Welcome and Course Introduction"},
              {"contentId":"1AT7IMLcA58","contentTitle":"Alphabets in Arabic"},
              {"contentId":"8pfQg26vfaA","contentTitle":"Sentence formation"},
              {"contentId":"LTwCmA6AjdI","contentTitle":"Reading and writing"},
              {"contentId":"c-7SVieC_04","contentTitle":"Nouns and Pronouns"},
              {"contentId":"1AT7IMLcA58","contentTitle":"Prepositions"},
              {"contentId":"8pfQg26vfaA","contentTitle":"Adjectives"},
              {"contentId":"LTwCmA6AjdI","contentTitle":"Essay writing"},
              {"contentId":"c-7SVieC_04","contentTitle":"Email Writing"},
              {"contentId":"1AT7IMLcA58","contentTitle":"Advers"},
              {"contentId":"8pfQg26vfaA","contentTitle":"Verbs"}  
          ]
        }
    );

    const [progress, setProgress] = useState(0);

    const handleClick = () => {
        // Calculate new progress based on the number of links clicked
        const newProgress = Math.min(100, progress + (100 / courseDetails.content.length));
        setProgress(newProgress);
    };

    return (
        <>
            <NewNavbar />
            <CoursePageHeader course={courseDetails} progress={progress} />
            <div className='space-x-20 w-[1500px]'>
                <CourseContent course={courseDetails} handleClick={handleClick} />
            </div>
        </>
    );
}

export default CoursePage;
