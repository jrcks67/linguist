import React from 'react';


function CoursePageHeader({course}) {
    return (
        <>
            <div className='flex md:flex-row items-center flex-col-reverse gap-4 w-fit h-[400px] md:flex md:gap-6 m-auto md:w-[81%] text-white md:py-6'>
                <div className="w-full md:w-4/5 p-3 m-auto gap-2 self-end text-black ">
                    <div className='w-full md:w-2/4 items-center justify-start space-y-2'>
                        <h3 className='text-2xl font-semibold text-start text-gray-800'>{course.title}</h3>
                        <p className='text-xl font-semibold text-gray-600'>{course.description}</p>
                        <p className='text-sm font-semibold text-gray-600'>Level: {course.level}</p>
                        <div className="flex flex-row gap-3 items-start justify-start">
                            <span className='text-green-900 font-semibold'>Course Length : 12 total hours</span>
                        </div>
                        <hr className="border-gray-300 my-4" />
                    </div>
                </div>

                <div className='w-full md:w-2/5'>
                    <div className='flex flex-col '>
                        <div className='w-full  '>
                            <img
                                src={`${course.imgUrl}`}
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

export default CoursePageHeader;
