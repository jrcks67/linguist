import React ,{useState,useEffect}from 'react';
import { Link } from 'react-router-dom';
import CardSlider from './CardSlider';
import axios from 'axios';
import courseData from './data.json';
import { useDispatch, useSelector } from 'react-redux';
import { setCourseData } from '../Redux/actions/courseActions';
import NewNavbar from '../containers/NewNavbar';

const Home = () => {
  const dispatch = useDispatch();
const courseData = useSelector(state => state?.course?.courseData); 

 useEffect(()=>{
  const fetchData = async () => {
    try{
      const response=await axios.get('/courseData');
      const data = response.data;
      dispatch(setCourseData(data));
    }catch(error){
      console.log('error is fetching course list',error)
    }
  };
  fetchData();
  
 },[dispatch]);

  return (
  <>
  {/* <Navbar/> */}
  <NewNavbar/>
  <div className='lg:w-3/4 md:w-full px-4 mx-auto mt-20 flex flex-col md:flex-row justify-between'>
    <div className='sm:flex gap-10 justify-between items-center mt-20'>
      <div className='md:w-1/2 w-full space-y-10'>
      <h2 className='text-5xl font-semibold leading-tight'>Fluency Made Easy: Your Language Learning Companion </h2>
      <span className='text-5xl text-red-700 font-bold'>Linguist</span>
          <p className='py-2 mb-6 text-gray-600 pl-2 border-l-4 border-red-700 text-base'>Master any language with ease, from Arabic to French and beyond, with interactive lessons, progress tracking, and quizzes – all in one app.</p>
          <div className='text-lg font-medium flex flex-col sm:flex-row gap-5 items-center ' >
            <Link to="/learn" > 
              <button className='bg-yellowColor px-6 py-2 text-white rounded'>Get Started</button>
            </Link>
            <Link to="/about" > 
              <button className='bg-yellowColor px-6 py-2 text-white rounded border ml-3 hover:bg-white hover:text-black transition-all duration-300 ease-in'>know more</button>
              </Link>
          </div>
      </div>
      <div className='w-full md:w-1/2 '>
        <CardSlider/>
      </div>
    </div>
  </div>
  {/* <div className='flex flew-row md:flex-col md:justify-evenly items-end'>
  <div className='min-h-[70vh] flex flex-col md:flex-row md:justify-evenly items-center md:mx-52 mx-10 mt-11'>
        <div className='md-w-2/4 text-center'>
          <h2 className='text-5xl font-semibold leading-tight'>Learn every language here</h2>
          <span className='text-5xl text-red-700 font-bold'>Linguist</span>
          <p className='text-lightText mt-5 text-start'>
           we have got you covered . You can learn any language in the world now .Its just that easy !!!
          </p>
          <Link to="/learn" > 
            <button className='bg-white py-2 px-5 rounded-full mt-4 outline hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] hover:bg-teal-100 bg-opacity-50 hover:text-white transition-null'>Get Started</button>
          </Link>
        </div>
        <div className='w-[100px] h-[400px] md:w-2/4 '>
          <CardSlider/>
        </div>
  </div>  
  </div> */}
  </>
  )
}

export default Home