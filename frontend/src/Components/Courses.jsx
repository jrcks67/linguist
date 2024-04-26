import React,{useState,useEffect} from 'react';
import Card from './Card';
// import axios from 'axios';
 import courseData from './data.json';
// import { useDispatch, useSelector } from 'react-redux';
// import { setCourseData } from '../Redux/actions/courseActions';
import { useSelector } from 'react-redux';


function Courses() {
//setting in state
//  const [courseData,setCourseData]=useState([]);
//  useEffect(()=>{
//   axios.get('/courseData')
//   .then(response => {
//     setCourseData(response.data);
//   })
//   .catch(error => {
//     console.log('Error fetching course data', error);
//   });
//  },[]);


//using redux store
// const dispatch = useDispatch();
// const courseData = useSelector(state => state?.course?.courseData); 

//  useEffect(()=>{
//   const fetchData = async () => {
//     try{
//       const courseList=await axios.get('/courseData');
//       dispatch(setCourseData(data.response));
//     }catch{
//       console.log('error is fetching course list',error)
//     }
//   };
//   fetchData();

//  },[dispatch]);

// const courseData = useSelector(state => state.course.courseData);

  return (
    <div className='min-h-screen flex flex-col items-center md:px-32 px-5 my-10'>
      <div className='flex flex-wrap justify-between gap-6 mt-6'> 
        {courseData.map((item) => (
          <div key={item.id} className="w-1/2 md:w-1/3 lg:w-1/4">
            <Card coursedetails={item}/> 
            {/* <Card coursedetails={item} imageurl={item.imgUrl}/>  */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Courses;
