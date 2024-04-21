import React, { useEffect, useState } from 'react'
// import axios from 'axios'


const Card = () => {
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
    
  return (
    <div className='absolute flex flex-col justify-center items-center w-full h-full'>
        <div className="bg-white mb-0 rounded-lg shadow-lg w-128 h-96 p-7 flex justify-center">
           card content
        </div>
        <div className='relative mt-0 flex justify-between w-128 h-48'>
            <button>Presvious</button>
            <div>Prgress</div>
            <button>Next</button>
            {/* <button onClick={()=>{setContent(displayed[displayed.length - 1])}}>Previous</button> */}
            {/* <div>{progress}</div> */}
            {/* <button onClick={()=>{()=>{setDisplayed(displayed.append(content.id)); setProgress(progress+1)}}}>Next</button> */}
        </div>
        
    </div>
  )
}

export default Card