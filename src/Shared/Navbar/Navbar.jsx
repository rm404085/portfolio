import DarkModeToggle from "../DarkMode/DarkModeToggle";
import { FaLocationArrow } from "react-icons/fa6"
import icons from '../../assets/images/icons8-arrow-48.png';
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const links = <>

  <NavLink to='/' className='hover:text-blue-500 hover:underline hover:text-xl'><li >Home</li></NavLink>
  <NavLink to='/aboutUs' className='hover:text-blue-500 hover:underline hover:text-xl'><li  >About Us</li></NavLink>
  <NavLink to='/contact' className='hover:text-blue-500 hover:underline hover:text-xl'><li>Contact</li></NavLink>
  <li>Home</li>
  
  </>
  return (
    <div className="fixed lg:ml-40 z-20 w-full opacity-75 lg:max-w-[850px] px-4  mt-3">
      <div className="navbar max-w-6xl mx-auto text-white  rounded-full border border-s-8  shadow-md">
        {/* Start - Logo & Mobile Menu */}
        <div className="navbar-start">
          {/* Mobile dropdown */}
          <div className="dropdown lg:hidden">
            <div tabIndex={0} role="button" className="btn btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
             {links}
            </ul>
          </div>

          {/* Logo or Title */}
      
         <h1 className=" text-xl hidden md:block">RASEL MAHMUD</h1>
         <h1 className=" sm:block md:hidden text-xl">RM</h1>
         
        </div>

        {/* Center - Menu items (hidden on mobile) */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu gap-3 menu-horizontal px-1">
           {links}
          </ul>
        </div>

        {/* End - DarkMode or Button */}
        <div className="navbar-end">
       <div className="relative w-32 h-10 shadow-[16px_16px_20px_#000008c] overflow-hidden before:absolute before:top-[-50%] before:right-[-50%] before:bottom-[-50%] before:left-[-50%] before:bg-[conic-gradient(transparent,transparent,#00a6ff)] before:animate-spin-slow  ">
       <button className="absolute flex justify-center  align-middle top-1 bottom-1 left-2 right-2 rounded-2xl lg:px-4 text-white  bg-gradient-to-r from-slate-900 to-purple-700 ">Hire Me
        <FaLocationArrow className="mt-1 ml-1 text-yellow-500"></FaLocationArrow>
         </button>
       
       
       </div>
    

        </div>
      </div>
    </div>
  );
};

export default Navbar;
