import logoImg from '../assets/images/logo.png';
import Nav from './Nav';
// import { Link } from 'react-router-dom';
// import {FiMenu} from 'react-icons/fi';


function Navbar() {
  return (
  //  <nav className="flex justify-between px-8 items-center py-6">
  //     <nav className="bg-gray-800 p-4"> 
  //     <div className="container mx-auto flex justify-between items-center">
      
  //       {/* Logo */}
  //       <Link to="/" className="text-white text-lg font-bold ml-10">Linguist</Link>

  //       {/* Navigation Links */}
       
  //       <div>
  //           <Link to="/login" className="text-white hover:text-gray-300 mr-10">Login</Link>
  //       </div>
  //     </div>
  //     </nav>
  // <header className="bg-gray-700 sticky top-0  z-[20] mx-auto w-full h-13 items-center justify-between border-gray-500 space-y-4"></header>
   <header className="bg-gray-700 sticky top-0 z-[20] mx-auto flex flex-wrap w-full h-13 items-center justify-between border-gray-500  space-y-4">
        <div className="flex flex-row justify-between items-center">
          <div className='logo h-15 w-16 '>
            <img src={logoImg} alt='Linguist'className='h-[70px]'/>
          </div>
        </div>
       <Nav/>
      </header>
  );
};

export default Navbar;

