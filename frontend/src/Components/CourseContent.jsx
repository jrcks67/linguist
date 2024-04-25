import React, { useState } from 'react'
import { BsHeart } from 'react-icons/bs';
import { MdGroup, MdStarRate ,MdVideocam,MdFilePresent} from 'react-icons/md';
import courseTitles from "./data.json";
import { Link } from 'react-router-dom';




function CourseContent({course}) {
    const [countLimit, setCountLimit] = useState(5);
    const [courseContent, setCourseContent] = useState();
    const url=course?.imgUrl;
    return (
        <>
            <h2 className="bold font-bold text-2xl pl-20">Content</h2>
            <div className="flex flex-col gap-4 w-full">
                {course?.content?.map((course, index)=>{
                    return ((index < countLimit) &&
                        <>  
                            {index ? <hr /> : <div></div> }
                            <div key={`related-${index}`} className="flex gap-2 w-full">
                                <div className="h-16 w-16 bg-slate-300">
                                    <img 
                                        className='h-full w-full object-cover' 
                                        src= {`https://source.unsplash.com/80x80/?programming/${course?.language}`} 
                                        alt="related" 
                                    />
                                </div>
                                <div className="flex-1 flex flex-wrap justify-between w-full sm:flex-row sm:flex-nowrap">
                                    <div className="flex flex-col gap-2 w-full">
                                        <h2 className='font-bold text-lg max-w-[20srem]'>{course}</h2>
                                    </div>
                                    <div className="flex-1 items-center flex-wrap sm:flex-nowrap sm:items-start justify-between gap-6">
                                        <div className='flex items-center w-[10px] text-[#bb7725] font-bold space-x-8'>
                                                <p>Preview</p>
                                                <p><MdVideocam color='#e69a1d'/></p>    
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                        )
                    })
                }
                 <div className="flex gap-2 w-full">
                                <div className="h-16 w-16 bg-slate-00">
                                <Link to="/test">
                                    <img 
                                        className='h-full w-full object-cover' 
                                        src= {`https://source.unsplash.com/80x80/?programming/${course?.language}`} 
                                        alt="related" 
                                    />
                                    </Link>
                                </div>
                            
                                <div className="flex-1 flex flex-wrap justify-between w-full sm:flex-row sm:flex-nowrap">
                                    <div className="flex flex-col gap-2 w-full">
                                    <Link to="/test"/>
                                        <h2 className='font-bold text-lg w-[20px]'>Quiz</h2>
                                    <Link/>
                                    </div>
                                    <div className="flex-1 items-center flex-wrap sm:flex-nowrap sm:items-start justify-between gap-6">
                                    <Link to="/test"/>
                                        <div className='flex items-center w-[10px] text-[#bb7725] font-bold space-x-8'>
                                                <p>Start Quiz</p>
                                                <p><MdFilePresent color='#e69a1d'/></p>    
                                        </div>
                                    <Link/>
                                    </div>
                                </div>
                 </div>
            </div>
           {(countLimit === 5) ? 
                 <div 
                    className="border text-center p-3 cursor-pointer"
                    onClick={()=> setCountLimit(9999999)}
                >
                    <small className="font-bold text-slate-700"><p>show more</p></small>
                </div>:
                    <div 
                    className="border text-center p-3 cursor-pointer"
                    onClick={()=> setCountLimit(5)}
                >
                    <small className="font-bold text-slate-700"><p>show less</p></small>

                </div>
            }


        </>
    )
}

export default CourseContent;
