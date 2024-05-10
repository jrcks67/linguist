import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import data from '../data.json';

function CardSlider() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  // const courseData = useSelector(state => state?.course?.courseData); 
  // this code has to be removed
  const courseData = data;

  return (
    <div className='sm:w-[200px] sm:h-[150px] md:h-full md:w-[600px] space-x-8'>
      <Slider {...settings}>
        {courseData.map((item) => (
          <div id='slider-boxes' key={item.id}>
            <div className='bg-cover bg-center h-[150px] md:h-full rounded-xl'>
              <div className='bg-brightBackground p-10 rounded-xl flex flex-col justify-center items-center border-[2px] border-yellowColor'>
                <div className='w-25 h-35 rounded-lg overflow-hidden'>
                  <img src={item.imgUrl} alt="" className='h-20 w-45 object-cover border-black' />
                </div>
                <div className='flex flex-col justify-center items-center gap-6 mt-6'>
                  <h1 className='text-2xl text-black font-bold'>{item.title}</h1>
                  <p className='text-[17px] text-center'>{item.description}</p>
                </div>
                <button className='bg-yellowColor text-white px-8 py-3 rounded-xl font-semibold hover:bg-black'> <Link to={`/learn/${item.id}`}>Read More</Link></button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default CardSlider;
