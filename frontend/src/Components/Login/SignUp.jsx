import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import {GoogleLogin} from '@react-oauth/google';
import Navbar from '../../Containers/NavBar/Navbar';

function SignUp() {
  const [isLoggedIn,setIsLoggedIn] = useState(false)
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error,setError] = useState(null)

  const handleSuccess = (response) => {
    console.log('Google login successful:', response);

    setIsLoggedIn(true)
  };

  const handleError = (error) => {
    console.error('Google login error:', error);
  };

  const handleSignIn = (e) => {
    e.preventDefault();

    // testing
    console.log('Email:', email);
    console.log('Password:', password);

    setIsLoggedIn(true)
    // axios.post('/signup', { email, password })
    // .then(response => {
    //   
    // })
    // .catch(error => {
    //    // Handle login error
    // });
  };
  return (
    <>
      <Navbar/>
    <div className="space-y-4 flex justify-center items-center h-screen">
      <div className='bg-white/[.03] border border-black pl-8 h-[400px] w-[400px] rounded-lg shadow-lg shadow-black/30 space-y-3 flex flex-col justify-center item-center'>
        <form className='space-y-1' onSubmit={handleSignIn}>
          <div>
            <p className="font-semibold text-2xl tracking-wide">SignUp</p>
          </div>
          <div className='mr-5'>
          <p className="text-zinc-600 font-semibold">Email:</p>
            <input className="outline-none h-10 px-5 border border-sm w-full mr-10 rounded-lg"type="text" placeholder="Email" required/>
          </div>
          <div className='mr-5'>
          <p className="text-zinc-600 font-semibold">Password:</p>
          <input className="outline-none h-10 px-5 border border-sm w-full mr-10 rounded-lg"type="password" placeholder="Password" required/>
          </div>
          <div className='mr-5 pt-4'>
            <button className='bg-yellow-400 font-semibold hover:bg-black hover:text-white h-10 w-full border rounded-full duration-300 mr-2'>Register Me</button>
          </div>
          <span><p className='flex justify-center font-bold pt-1'>OR</p></span>
          <div className='flex flex-row justify-center gap-10 text-3xl rounded-lg'>
          <GoogleLogin className="rounded-full pb-2"/> 
        </div>
        <div>
          <p className='text-zinc-500p justify-center pt-4'>
          Already Account Exists
            <span className='text-black font-bold underline'>
              <Link to="/login">&nbsp;SignIn</Link>
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

export default SignUp
