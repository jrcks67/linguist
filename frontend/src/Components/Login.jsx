import React from 'react';
import {GoogleLogin} from '@react-oauth/google';
import { Link } from 'react-router-dom';
import Navbar from '../Containers/Navbar';
import NewNavbar from '../Containers/NewNavbar';
import SignUp from './SignUp';

// import learnVideo from '../assets/learnVideo.mp4';

function Login(){

    const handleSuccess = () => {

    }
    const handleError = () => {

    }
  return (
    <>
     {/* <Navbar/> */}
     <NewNavbar/>
    <div className="space-y-4 flex justify-center items-center h-screen">
      <div className='bg-white/[.03] border border-black pl-8 h-[500px] w-[400px] rounded-lg shadow-lg shadow-black/30 space-y-3 flex flex-col justify-center item-center'>
        <form className='space-y-1' action="">
          <div>
            <p className="font-semibold text-2xl tracking-wide">SignIn</p>
          </div>
          <div className='mr-5'>
          <p className="text-zinc-600 font-semibold">Email:</p>
            <input className="outline-none h-10 px-5 border border-sm w-full mr-10 rounded-lg"type="text" placeholder="Email" required/>
          </div>
          <div className='mr-5'>
          <p className="text-zinc-600 font-semibold">Password:</p>
          <input className="outline-none h-10 px-5 border border-sm w-full mr-10 rounded-lg"type="password" placeholder="Password" required/>
          </div>
          <div className='flex space-y-2 gap-5 mt-1 rounded-lg'>
            <input type="checkbox"/>
            <p>Remember me?</p>
          </div>
          <div className='mr-5'>
            <button className='bg-yellow-400 font-semibold hover:bg-black hover:text-white h-10 w-full border rounded-full duration-300 mr-2'>Sign In</button>
            <p className='text-end pt-2'>Forgot Password</p>
          </div>
          <span><p className='flex justify-center font-bold pt-1'>OR</p></span>
          <div className='flex flex-row justify-center gap-10 text-3xl rounded-lg'>
          <GoogleLogin className="rounded-full pb-2"
          onSuccess={handleSuccess}
          onError={handleError}
        /> 
        </div>
        <div>
          <p className='text-zinc-500p justify-center pt-4'>
          Need an Account?
            <span className='text-black font-bold underline'>
              <Link to="/signup"  element={<SignUp />}>&nbsp;SignUp</Link>
              </span>
            </p>
        </div>
        </form>
      </div>
      <div>

      </div>
        {/* <div className='absolute w-full h-full'>
            <video 
            src= {learnVideo}
            muted
            loop
            autoPlay
            className='absolute w-full h-full inset-0 object-cover'
            />

        </div>
        <div className='absolute w-full h-full bg-slate-600/80'></div>
        <GoogleLogin
        onSuccess={handleSuccess}
        onError={handleError}
        /> */}
        
    </div>
    </>
  )
}

export default Login