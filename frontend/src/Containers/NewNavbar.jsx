import React from 'react';
import logo from "../assets/images/logo.png";
import Nav from './Nav';

const NewNavbar = () => {
  return (
    <div>
      <header className='h-12 shadow-sm'>
        <nav className='flex  justify-between items-center w-9/12 mx-auto'>
            <a href='/'>
                <img src={logo} alt="logo" className='flex items-start h-12 w-25'/>
            </a>
            <div>
                {/* <ul className='sm:flex items-center space-x-5 hidden'>
                    <li><a href='/'>How it works?</a></li>
                    <li><a href='/'>Features</a></li>
                    <li><a href='/'>About</a></li>
                </ul>   */}
                <Nav/>
                {/* <button className='font-medium px-5 py-1 border border-yellowColor rounded'>Login</button>  */}
            </div>
        </nav>
      </header>
    </div>
  )
}

export default NewNavbar
