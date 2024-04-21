// import React from 'react'

// const NavBar = () => {
//   return (
//     <div className='p-4 flex items-center max-w-full h-14 bg-blue-400'>
//         <div className=''>Logo</div>
//         <div>Learn</div>
    

//     </div>
//   )
// }

// export default NavBar

import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-white text-lg font-bold ml-10">Linguist</Link>

        {/* Navigation Links */}
        <div className="space-x-1 flex justify-evenly" style={{ minWidth: '200px' }}>
          {/* Use React Router Link components */}
          <Link to="/learn" className="text-white hover:text-gray-300">Learn</Link>
          <Link to="/test" className="text-white hover:text-gray-300">Test</Link>
          <Link to="/progress" className="text-white hover:text-gray-300">Progress</Link>
        </div>
        <div>
            <Link to="/login" className="text-white hover:text-gray-300 mr-10">Login</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

