import React,{useState} from 'react';
import { Link, Navigate } from 'react-router-dom';
import Navbar from '../../Containers/NavBar/Navbar';
import { GoogleLogin } from '@react-oauth/google';


function Login() {
  const [isLoggedIn,setIsLoggedIn] = useState(false)
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error,setError] = useState(false)


  const handleSuccess = (response) => {
    console.log('Google login successful:', response);

    setIsLoggedIn(true)
  };

  const handleError = (error) => {
    console.error('Google login error:', error);
    setError(true);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    // testing
    console.log('Email:', email);
    console.log('Password:', password);

    setIsLoggedIn(true)
    // axios.post('/users/login', { email, password })
    // .then(response => {
    //   
    // })
    // .catch(error => {
    //    // Handle login error
    // });
  };

  return (
    <div>
      {isLoggedIn ? ( 
        <Navigate to="/learn" /> 
      ) : (
        <div>
          <Navbar />
          <div className="space-y-4 flex justify-center items-center h-screen">
            <div className='bg-white/[.03] border border-black pl-8 h-[500px] w-[400px] rounded-lg shadow-lg shadow-black/30 space-y-3 flex flex-col justify-center item-center'>
              <form className='space-y-1' onSubmit={handleLogin}>
                <div>
                  <p className="font-semibold text-2xl tracking-wide">SignIn</p>
                </div>
                <div className='mr-5'>
                  <p className="text-zinc-600 font-semibold">Email:</p>
                  <input
                    className="outline-none h-10 px-5 border border-sm w-full mr-10 rounded-lg"
                    type="text"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className='mr-5'>
                  <p className="text-zinc-600 font-semibold">Password:</p>
                  <input
                    className="outline-none h-10 px-5 border border-sm w-full mr-10 rounded-lg"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <div className='flex space-y-2 gap-5 mt-1 rounded-lg'>
                  <input type="checkbox" />
                  <p>Remember me?</p>
                </div>
                <div className='mr-5'>
                  <button className='bg-yellow-400 font-semibold hover:bg-black hover:text-white h-10 w-full border rounded-full duration-300 mr-2' type="submit">Sign In</button>
                  <p className='text-end pt-2'>Forgot Password</p>
                </div>
                <span><p className='flex justify-center font-bold pt-1'>OR</p></span>
                <div className='flex flex-row justify-center gap-10 text-3xl rounded-lg'>
                  <GoogleLogin
                    className="rounded-full pb-2"
                    onSuccess={handleSuccess}
                    onError={handleError}
                  />
                </div>
                <div>
                  <p className='text-zinc-500p justify-center pt-4'>
                    Need an Account?
                    <span className='text-black font-bold underline'>
                      <Link to="/signup">&nbsp;SignUp</Link>
                    </span>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
  
}

export default Login;
