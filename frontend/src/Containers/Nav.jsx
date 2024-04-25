import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {Menu,X} from 'lucide-react';


function NavLinks (){
  return (
    <>
    <NavLink to="/" className="text-black hover:text-gray-300 transition-all cursor-pointer">Home</NavLink>
    <NavLink to="/about" className="text-black hover:text-gray-300 transition-all cursor-pointer">About</NavLink>
    <NavLink to="/learn" className="text-black hover:text-gray-300 transition-all cursor-pointer">Courses</NavLink>
    <button className='font-medium px-5 py-1 border border-yellowColor rounded'>Login</button> 
    </>
  )
}


function Nav() {
const [isMenuOpen, setMenuOpen] = useState(false);
 
const toggleNavbar = () =>{
    setMenuOpen(!isMenuOpen)
}

  return (
    <>
    <nav className="w-1/5 flex justify-end pr-8">
        <div className='w-full justify-between md:flex sm:flex items-center space-x-5 hidden'>
            {/* Use React Router Link components */}
         <NavLinks/>
        </div>
        <div className='md:hidden'>
            <button onClick={toggleNavbar}>
                {isMenuOpen ? <X/> : <Menu/>}
            </button>
        </div>
    </nav>
    {isMenuOpen && (
      <div className='flex flex-col items-center'>
        <NavLinks/>
      </div>  
    )}
    </>
  )
}

export default Nav
