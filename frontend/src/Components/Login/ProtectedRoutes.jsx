//import { useEffect } from "react"
import {Link,Outlet} from "react-router-dom";
import Navbar from "../../Containers/NavBar/Navbar";
import img from "../../assets/images/LearnCover/courseAccess.png";



const useAuth = () => {
    const user = {loggedIn:false}
    return user && user.loggedIn
}

function  ProtectedRoutes()  {

    // useEffect(()=>{
    //     setTimeout(()=>{
    //         Navigate("/login")
    //     },1000)
    // },[])

    const authenticated = useAuth()
  return authenticated ? <Outlet/> : <>
   <Navbar/>
      <div className='md:min-h-screen flex flex-col md:flex-row items-center justify-center gap-5 md:mx-32 mx-5 mt-8 pb-25'>
        <div className='flex flex-col items-start md:w-2/4 text-start space-y-2 mb-6'>
          <h3 className='text-2xl font-semibold items-start  text-red-700'>Please sign into the account to access the course content !</h3>
          <div className='py-2 text-gray-600 pl-2 border-l-4 border-red-700 text-base'>
                  <p className='text-zinc-500p justify-center pt-4'>
                    Don't have an account?
                    <span className='text-black font-bold underline'>
                      <Link to="/signup">&nbsp;SignUp</Link>
                    </span>
                  </p>
          </div>
          {/* <Link to="Review us">
          <button className='bg-white py-2 px-5 rounded-full mt-4 outline hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] hover:bg-teal-100 bg-opacity-50 hover:text-white transition-null'>Go</button>
          </Link> */}
        </div>
        <div className='flex items-center md:w-2/4'>
          <img src={img} alt="img" className='opacity-75 rounded-lg'/>
        </div>
      </div>
  </>
}

export default ProtectedRoutes