import React from 'react';
import logo from "../assets/images/Logo/logo.png";
import Nav from './Nav';
import { Link } from 'react-router-dom';

const NewNavbar = () => {
  return (
    <div>
      <header className='h-12 shadow-sm'>
        <nav className='flex  justify-between items-center w-10/12 mx-auto'>
          <Link to="/">
             <img src={logo} alt="logo" className='h-12 w-50'/>
          </Link>
            <div>
                <Nav/>
            </div>
        </nav>
      </header>
    </div>
  )
}

export default NewNavbar
