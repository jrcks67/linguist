import React from 'react';
import Card from './Card';
import courseData from './data.json';

function Courses() {
  {courseData.map((item) => (
    console.log("imageurl form course", item.imgUrl)
  ))}
  return (
    <div className='min-h-screen flex flex-col items-center md:px-32 px-5 my-10'>
      <div className='flex flex-wrap justify-between gap-6 mt-6'> {/* Use justify-between to evenly distribute the cards */}
        {courseData.map((item) => (
          <div key={item.id} className="w-1/2 md:w-1/3 lg:w-1/4"> {/* Specify width for each card */}
            <Card coursedetails={item} imageurl={item.imgUrl}/> {/* Render the Card component for each course */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Courses;


// <!-- import React from 'react';
// import Card from './Card';
// import courseData from './data.json'

// function Courses() {
//   return (
//   <div className='min-h-screen flex flex-col items-center md:px-32 px-5 my-10'>
//     <div className='flex flex-wrap justify-center gap-6 mt-6'>
//       {courseData.map((item)=>(
//             <div key={item.id}>
//               <Card coursedetails={item}/>
//             </div>
//         ))}
//     </div>
//   </div>
    // <div className='flex flex-col items-start mx-8 space-y-3 mt-14 mb-8 '>
    //   <h2 className='text-4xl font-bold'>A broad selection of course</h2>
    //   <h3 className='text-xl'>Choose from the given list of courses</h3>
    // <div className='text-xs lg:text-xl flex space-x-4 ml-1 font-bold text-gray-500 cursor-pointor'>
    //     <h3>Python</h3>
    //     <h3>Excel</h3>
    //     <h3>wb</h3>
    //     <h3>js</h3>
    //     <h3>java</h3>
    //     <h3>ls</h3>
    //     <h3>lkkl</h3>
    // </div>
    //  <div className='text-left w-full border border-gray-300 p-7'>
    //     <h2 className='text-2xl font-bold mb-2'>
    //         Expand your carrer opportunities with th =e universe coede</h2>
    //     <h3>
    //         Below you can see some of my projects and also what I'm preparing guys
    //     </h3>
    //  </div>
    //  </div>
//   )
// }

// export default Courses -->
