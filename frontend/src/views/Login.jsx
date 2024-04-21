import React from 'react'
import {GoogleLogin} from '@react-oauth/google'
import learnVideo from '../assets/learnVideo.mp4'

const Login = () => {

    const handleSuccess = () => {

    }
    const handleError = () => {

    }
  return (
    <div className="flex justify-center items-center h-screen">
        <div className='absolute w-full h-full'>
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
        />
        
    </div>
  )
}

export default Login