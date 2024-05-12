import React,{useEffect}from 'react';
import Courses from './Courses';
import img from '../../assets/images/LearnCover/courseHeader.png';
import NewNavbar from '../../Containers/NavBar/Navbar';
import { useLocation } from "react-router-dom";
import { useSelector } from 'react-redux';
import { useDispatch} from 'react-redux';
import { setCourseContentData} from '../../Redux/actions/courseActions';

const Learn = () => {
  const dispatch = useDispatch();
   useEffect(()=>{
    getData(); 
   },[dispatch]);
  
   async function getData() {
    try {
      const token = sessionStorage.getItem('authorization'); 
      const res = await fetch("http://localhost:3001/data", {
        method: 'GET',
        headers: {
          'Accept': "application/json",
          'Content-Type': "application/json",
          'Authorization': `${token}`, 
          'Access-Control-Allow-Origin': '*'
        }
      });
  
      if (!res.ok) {
        throw new Error('Network response was not ok');
      }
  
      const responseData = await res.json();
      dispatch(setCourseContentData(responseData));
    } catch (err) {
      console.log('Error fetching course content list:', err);
    }
  }

  const username = useSelector(state => state?.user?.userData?.username);
  console.log("response",useSelector(state => state))
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
          {username && <h2 className='text-3xl font-bold mb-2'>
              Welcome {username},
          </h2>}
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