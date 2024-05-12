import React ,{useEffect} from "react";
import { Link } from 'react-router-dom';
import CardSlider from './CardSlider';
import axios from 'axios';
import { useDispatch} from 'react-redux';
import { setCourseData } from '../../Redux/actions/courseActions';
import Navbar from '../../Containers/NavBar/Navbar';


const Home = () => {
const dispatch = useDispatch();
 useEffect(()=>{
  getData();
  
 },[dispatch]);

 async function getData() {
  try {
    const token = sessionStorage.getItem('authorization'); 
    const res = await fetch("http://localhost:3001/homedata", {
      method: 'GET'
    });

    const responseData = await res.json();
    dispatch(setCourseData(responseData));
  } catch (err) {
    console.log('error is fetching course list', err);
  }
}

  return (
  <>
  <Navbar/>
  <div className='lg:w-3/4 md:w-full px-4 mx-auto mt-20 flex flex-col md:flex-row justify-between'>
    <div className='sm:flex gap-10 justify-between items-center mt-25'>
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
  </>
  )
}

export default Home