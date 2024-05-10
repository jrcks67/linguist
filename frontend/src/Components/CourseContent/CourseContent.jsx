import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function CourseContent({ course }) {

    const [countLimit, setCountLimit] = useState(5);
    const [progress, setProgress] = useState(0);

    const handleClick = () => {
        const newProgress = ((progress + 1) / course.content.length) * 100; // Calculate new progress
        setProgress(newProgress); // Update progress state
    };
    return (
        <div className="max-w-screen-lg mx-auto">
            <h2 className="bold font-bold text-2xl pl-5 sm:pl-20">Content</h2>
            <div className="flex flex-col gap-4 w-full">
                {course?.content?.map((content, index) => {
                    return (
                        index < countLimit && (
                            <>
                                {index ? <hr className="hidden sm:block" /> : <div key={`divider-${index}`}></div>}
                                <div key={`related-${index}`} className="flex gap-2 w-full items-center">
                                    <div className="h-16 w-16 bg-slate-300">
                                        <img
                                            className="h-full w-full object-cover"
                                            src={`https://source.unsplash.com/80x80/?programming/${content?.language}`}
                                            alt="related"
                                        />
                                    </div>
                                    <div className="flex-1 flex flex-wrap justify-between w-full sm:flex-row sm:flex-nowrap">
                                        <div className="flex flex-col gap-2 w-full">
                                            <h2 className="font-bold text-lg sm:max-w-[20srem]">{content.contentTitle}</h2>
                                        </div>
                                            <a
                                             href={`https://www.youtube.com/watch?v=${content.contentId}`} // Assuming you have a videoId property in your content object
                                             className="text-blue-500 font-bold hover:underline"
                                             target="_blank"
                                             rel="noopener noreferrer"
                                            >
                                            Preview
                                        </a>
                                    </div>
                                </div>
                            </>
                        )
                    );
                })}
                <div className="flex gap-2 w-full items-center border-gray-300">
                    <div className="h-16 w-16 bg-slate-300">
                        <Link to="/quiz">
                            <img
                                className="h-full w-full object-cover"
                                src={`https://source.unsplash.com/80x80/?programming/${course?.language}`}
                                alt="related"
                            />
                        </Link>
                    </div>

                    <div className="flex-1 flex flex-wrap justify-between w-full sm:flex-row sm:flex-nowrap">
                        <div className="flex flex-col gap-2 w-full">
                        <Link className="text-[#bb7725] font-bold"
                            to={{
                                pathname:"/test",
                                state: { quizDetails: course?.quiz}
                            }}
                        >
                        Quiz
                        </Link>
                        </div>
                        <div className="flex items-center justify-end gap-6 w-20">
                            <Link to="/start-quiz" className="text-[#bb7725] font-bold">
                            <button onClick={handleClick}>Watch</button>
                            </Link>
                        </div>
                    </div>
                    <div className="w-full bg-gray-200 mt-4 rounded-full">
                <div className="bg-blue-500 h-2 rounded-full" style={{ width: `${progress}%` }}></div> {/* Progress bar */}
            </div>
                </div>
            </div>
            {countLimit === 5 ? (
                <div
                    className="border text-center p-3 cursor-pointer"
                    onClick={() => setCountLimit(9999999)}
                >
                    <small className="font-bold text-slate-700">show more</small>
                </div>
            ) : (
                <div
                    className="border text-center p-3 cursor-pointer"
                    onClick={() => setCountLimit(5)}
                >
                    <small className="font-bold text-slate-700">show less</small>
                </div>
            )}
        </div>
    );
}

export default CourseContent;
