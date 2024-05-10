import React from 'react';
import logo from '../../assets/images/Logo/logo1.png';
import Nav from './Nav';
import { Link } from "react-router-dom";

const NewNavbar = () => {
  return (
    <div>
      <header className='h-12 shadow-sm'>
        <nav className='flex justify-between items-center w-10/12 mx-auto pr-8'>
          <div className='w-full flex items-center space-x-5'>
            <Link to="/" className='flex items-center'>
              <img src={logo} alt="logo" className='h-12 w-13'/>
            </Link>
          </div>
          <div>
            <Nav/>
          </div>
        </nav>
      </header>
    </div>
  )
}

export default NewNavbar
