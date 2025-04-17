import DarkModeToggle from "../DarkMode/DarkModeToggle";
import { FaLocationArrow } from "react-icons/fa6"
import icons from '../../assets/images/icons8-arrow-48.png';
import { NavLink } from "react-router-dom";
import portfolio from '../../assets/images/icons8-portfolio-64.png'
import { motion } from 'framer-motion';
import { fadeIn } from "../../Componant/AboutMeSection/FramerMotion/variants";
import './Navbar.css'
const Navbar = () => {
  const links = <>

  <NavLink to='/' className='hover:text-blue-500 hover:underline hover:text-xl'><li >Home</li></NavLink>
  <NavLink to='/aboutUs' className='hover:text-blue-500 hover:underline hover:text-xl'><li  >About Us</li></NavLink>
  <NavLink to='/contact' className='hover:text-blue-500 hover:underline hover:text-xl'><li>Contact</li></NavLink>
  <li>Home</li>
  
  </>
  return (
    <div className="fixed lg:ml-40 z-20 w-full opacity-90 lg:max-w-[900px] px-4  mt-3">
      <div className="navbar max-w-6xl mx-auto text-cyan-700 rounded-full border border-s-8  shadow-md">
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
      
         <div className="flex justify-center items-center gap-3">
         <img src={portfolio} alt="" />
         <h1 className=" text-xl hidden md:block">RASEL MAHMUD</h1>
         <h1 className=" sm:block md:hidden text-xl">RM</h1>
        
         </div>
         
        </div>

        {/* Center - Menu items (hidden on mobile) */}
        <motion.div 
        variants={fadeIn("up", 0.5)}
        initial="hidden"
        whileInView="show"
        viewport={{once:false, amount:0.8}}
        className="navbar-center hidden lg:flex">
          <ul className="menu gap-3 menu-horizontal px-1">
           {links}
          </ul>
        </motion.div>

        {/* End - DarkMode or Button */}
        <div className="navbar-end">
       <div className="relative w-40 h-16 shadow-[16px 16px 20px #000008c] overflow-hidden before:absolute before:top-[-90%] before:right-[-80%] before:bottom-[-80%] before:left-[-80%] before:bg-[conic-gradient(transparent,transparent,#00a6ff)] before:animate-spin-slow  ">
       <button className="absolute flex justify-center text-center mt-2 align-middle top-1 bottom-1 left-2 right-2 rounded-full lg:px-4 text-white   bg-gradient-to-r from-slate-900 to-purple-700 ">Hire Me
        <FaLocationArrow className="mt-1 ml-1 text-yellow-500"></FaLocationArrow>
         </button>
       
       
       </div>
    

        </div>
      </div>
    </div>
  );
};

export default Navbar;
