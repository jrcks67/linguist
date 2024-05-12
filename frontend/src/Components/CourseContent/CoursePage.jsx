import React, { useEffect, useState } from 'react';
import CoursePageHeader from './CoursePageHeader';
import CourseContent from './CourseContent';
import { useSelector } from 'react-redux';
import NewNavbar from '../../Containers/NavBar/Navbar';
import { setQuizData } from '../../Redux/actions/courseActions';
import { useDispatch } from 'react-redux';

function CoursePage() {
    const [courseDetails, setCourseDetails]=useState({});
    const courseContentData = useSelector(state => state?.courseContent?.courseContentData);
    const [progress, setProgress] = useState(0);
    const id = window.location.href.substring(window.location.href.lastIndexOf('/') + 1);
    const dispatch = useDispatch();

    useEffect(() => {
        if (courseContentData) {
            const filteredCourse = courseContentData.find(course => course.id === id);
            console.log("filtere course",filteredCourse)
            if (filteredCourse) {
                setCourseDetails(filteredCourse);
                dispatch(setQuizData(filteredCourse?.quiz))
            }
        }
    }, [courseDetails]);

    const handleClick = () => {
        const newProgress = Math.min(100, progress + (100 / courseDetails.content.length));
        setProgress(newProgress);
    };
    console.log("course details", useSelector(state => state));
    return (
        <>
            <NewNavbar />
            <CoursePageHeader course={courseDetails} courseId={id} progress={progress} />
            <div className='space-x-20 w-[1500px]'>
                <CourseContent course={courseDetails}  courseId={id} handleClick={handleClick} />
            </div>
        </>
    );
}

export default CoursePage;
