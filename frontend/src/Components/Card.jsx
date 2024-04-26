import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ coursedetails,imageurl }) => {
  console.log(coursedetails)
  return (
    <div className='flex flex-col items-center space-evenly justify-between bg-white border-2 border-lightText md:border md:w-full p-12 cursor-pointer:rounded-lg hover:shadow-[rgba(0,_0,_0,_0.23)_0px_3px_8px] transition-all bg-fixed'
         style={{ width: '400px', height: '400px'}}> 
      <div className='w-full h-32'> 
        <img src={imageurl} alt="" className='h-full w-full object-cover'/> 
      </div>
      <div id="course_content"> 
        <h3 className='font-semibold text-lg text-center my-5'>{coursedetails.title}</h3> 
        <h2 className='text-xs text-gray-700'>Level: {coursedetails.level}</h2>
        <p className='tex-lightText text-center md:text-start overflow-hidden overflow-ellipsis' style={{ maxHeight: '100px' }}> 
          {coursedetails.description}
        </p>
      </div> 
      {/* <button className='border border-black font-bold text-sm p-2 mt-4 mb-8 rounded-lg bg-yellow-500 text-white hover:bg-yellow-300'>
        Read More
      </button> */}
      <button className='bg-yellowColor text-white px-8 py-3 rounded-xl font-semibold hover:bg-black'>
        <Link to={`/learn/${coursedetails.id}`}>
          Read More
        </Link>
      </button>
    </div>
  );
};

export default Card;




// import React from 'react'
// import axios from 'axios'


// const Card = ({coursedetails}) => {
    // const [displayed, setDisplayed] = useState([]) // state to keep a track of content from list already displayed
    // const [content,setContent] = useState({}) // state to manage the content that gets displayed on the card, object containing the word/phrase/sentence and their meaning

    // const [progress,setProgress] = useState(0) // state to keep the progress of the application 

    // const handlePrevious = () => {
    //     setContent(displayed[displayed.length-1])


    // }

    // const contentDisplayed = useEffect(()=>{
    //    const fetchData = async () =>{ 
    //     try {
    //     const response = axios.get("https://www.google.com")
    //     const data = response.data 
    //     setContent(data)
    //     }
    //     catch(error) {
    //         console.error("error fetching data:",error)
    //     }   
    //    }

    // },progress)
    
    // const handleNext = () => {
    //     setDisplayed(displayed.append(content.id));
    //     setContent()
    // }
    
  //return (
    // <div className='absolute flex flex-col justify-center items-center w-full h-full'>
    //     <div className="bg-white mb-0 rounded-lg shadow-lg w-128 h-96 p-7 flex justify-center">
    //        card content
    //     </div>
    //     <div className='relative mt-0 flex justify-between w-128 h-48'>
    //         <button>Previous</button>
    //         <div>Progress</div>
    //         <button>Next</button>
    //         {/* <button onClick={()=>{setContent(displayed[displayed.length - 1])}}>Previous</button> */}
    //         {/* <div>{progress}</div> */}
    //         {/* <button onClick={()=>{()=>{setDisplayed(displayed.append(content.id)); setProgress(progress+1)}}}>Next</button> */}
    //     </div>
        
    // </div>
//     <>
//     <div className='flex flex-col items-center space-evenly justify-between bg-white border-2 border-lightText md:border md:w-3/8 p-12 cursor-pointer:rounded-lg hover:shadow-[rgba(0,_0,_0,_0.23)_0px_3px_8px] transition-all'>
//       <div className='w-3/5'>
//         <img src={coursedetails.img} alt="" className='h-32 w-full'/>
//       </div>
//       <div id="course_content"> 
//         <h3 className='font-semibold text-lg text-center my-5'>{coursedetails.title}</h3> 
//         <h2 className='text-xs text-gray-700'>{coursedetails.level}</h2>
//         <p className='tex-lightText text-center md:text-start'>
//           course details descrioption goes here 
//         </p>
//       </div> 
//       <button className='border border-black font-bold text-sm p-2 mt-4 mb8'>
//         Read More
//       </button>
//       </div>
//     </>
//   )
// }

// export default Card
