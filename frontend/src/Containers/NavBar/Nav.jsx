import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { resetUserData,resetCourseContentData } from '../../Redux/actions/courseActions';
import { useDispatch} from 'react-redux';

function Nav() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn]= useState(false);
  const dispatch = useDispatch();
  
  const toggleNavbar = () => {
    setMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    sessionStorage.clear();
    dispatch(resetUserData());
    dispatch(resetCourseContentData());
    setIsLoggedIn(false);
  };

  return (
    <>
      <nav className="w-1/5 flex justify-end pr-8">
        <div className='w-full justify-between md:flex sm:flex items-center space-x-5 hidden'>
          <NavLink to="/" className="text-black hover:text-gray-300 transition-all cursor-pointer">Home</NavLink>
          <NavLink to="/about" className="text-black hover:text-gray-300 transition-all cursor-pointer">About</NavLink>
          <NavLink to="/learn" className="text-black hover:text-gray-300 transition-all cursor-pointer">Courses</NavLink>
          <>
            {sessionStorage.getItem('authorization') || isLoggedIn ? (
              <button className='font-medium px-5 py-1 border border-yellowColor rounded' onClick={handleLogout}>
              <NavLink to="/" className="text-black hover:text-gray-300 transition-all cursor-pointer">
                Logout
              </NavLink>
              </button>
            ) : (
              <button className='font-medium px-5 py-1 border border-yellowColor rounded'>
              <NavLink to="/login" className="text-black hover:text-gray-300 transition-all cursor-pointer">
                Login
              </NavLink>
              </button>
            )}
          </>
        </div>
        <div className='md:hidden'>
          <button onClick={toggleNavbar}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>
      {isMenuOpen && (
        <div className='flex flex-col items-center'>
          <NavLink to="/" className="text-black hover:text-gray-300 transition-all cursor-pointer">Home</NavLink>
          <NavLink to="/about" className="text-black hover:text-gray-300 transition-all cursor-pointer">About</NavLink>
          <NavLink to="/learn" className="text-black hover:text-gray-300 transition-all cursor-pointer">Courses</NavLink>
          <button className='font-medium px-5 py-1 border border-yellowColor rounded' onClick={handleLogout}>
            {sessionStorage.getItem('authorization') ? (
              <NavLink to="/" className="text-black hover:text-gray-300 transition-all cursor-pointer">
                Logout
              </NavLink>
            ) : (
              <NavLink to="/login" className="text-black hover:text-gray-300 transition-all cursor-pointer">
                Login
              </NavLink>
            )}
          </button>
        </div>
      )}
    </>
  );
}

export default Nav;
