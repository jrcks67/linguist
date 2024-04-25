import React from 'react';
import { BiChevronRight } from "react-icons/bi";
import { Link } from "react-router-dom";
import randomImage1 from "../assets/images/About/about.png";

function CoursePageHeader({course}) {
    return (
		<>
			<div className='flex md:flex-row items-start flex-col-reverse gap-4 w-fit h-[400px] md:flex md:gap-6 m-auto md:w-[81%] text-white md:py-6'>
					<div className="w-full md:w-4/5 p-3 m-auto gap-2 self-end text-black ">
                        <div className='w-full md:w-2/4 text-center space-y-2'>
                            <h3 className='text-3xl font-semibold'>{course.title}</h3>
                            <p className='text-xl font-semibold text-gray-600'>{course.description}</p>
                            <p className='text-sm font-semibold text-gray-600'>Level: {course.level}</p>
                            <small className="flex gap-3 items-center">
                                <span className='text-green-900 font-semibold'>12 total hours</span>
                                <span className=''>Updated 1/2023</span>
                            </small>
                            {/* <Link to="Review us">
                            <button className='bg-white py-2 px-5 rounded-full mt-4 outline hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] hover:bg-teal-100 bg-opacity-50 hover:text-white transition-null'>Go</button>
                            </Link> */}
                        </div>
					</div>

					<div className='w-full md:w-2/5'>
						<div className='flex flex-col '>
							<div className='w-full  '>
								<img
									src={randomImage1}
									alt="img"
									className='h-64 w-full sm:h-[19rem] md:h-52 bg-slate-100 object-cover'
								/>
							</div>
						</div>
					</div>
				</div>
				
		</>
	);
}

export default CoursePageHeader
