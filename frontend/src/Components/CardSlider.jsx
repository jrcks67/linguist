import React from 'react';
import courseData from './data.json';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function CardSlide() {
  const coursedetails=courseData;
//     dots: false,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     initialSlide: 0,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 1,
//           infinite: true,
//           dots: true
//         }
//       },
//       {
//         breakpoint: 600,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 1,
//           initialSlide: 1
//         }
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1
//         }
//       }
//     ]
//   };
var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true
  };
    return (
        <>
        <div>
            <p className='text-xl text-center'>soemthing in french description</p>
            {/* <div className='w-full md:w-2/4'> */}
            <div className='h-full w-[600px] space-x-8'>
            <Slider {...settings}>
            {courseData.map((item)=>(
                <div id='slider-boxes' className='bg-white p-10 rounded-xl flex flex-col justify-center items-center border-b-[8px] border-red-500' key={item.id}>
                    <div id='icon-box' className='bg-yellow-400 p-6'>
                        {item.icon && <item.icon className='w-[45px] h-[45px]'/>}
                    </div>
                    <div className='flex flex-col justify-center items-center gap-6 mt-6'>
                        <h1 className='text-2xl text-black font-bold'>{coursedetails.title}</h1>
                        <p className='text-[17px] text-center'>This course contents covers the french basis to advance grammer</p>
                        </div> 
                        <button className='bg-yellow-400 px-8 py-3 rounded-xl font-semibold hover:bg-black hover:text-white'>Read More</button>
                </div>))}
            </Slider>
        </div> 
        </div>
        
      </>
    )
}

export default CardSlide