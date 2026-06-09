import DarkModeToggle from "../DarkMode/DarkModeToggle";
import { FaLocationArrow } from "react-icons/fa6";
import portfolio from "../../assets/images/icons8-portfolio-64.png";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeIn } from "../../Componant/AboutMeSection/FramerMotion/variants";
import "./Navbar.css";
import resume from "../../assets/resume/my_resume.pdf"

const Navbar = () => {

  const MotionDiv = motion.div;
  const links = (
    <>
      <NavLink
        to="/"
        className="hover:text-lg transition-all hover:underline"
      >
        <li>Home</li>
      </NavLink>
      <NavLink
        to="/aboutme"
        className="hover:text-lg transition-all hover:underline"
      >
        <li>About Me</li>
      </NavLink>
      <NavLink
        to="/contact"
        className="hover:text-lg transition-all hover:underline"
      >
        <li>Contact</li>
      </NavLink>
       <NavLink
        to="/experience"
        className="hover:text-lg transition-all hover:underline"
      >
        <li>Experience</li>
      </NavLink>
       <NavLink
        to="/skills"
        className="hover:text-lg transition-all hover:underline"
      >
        <li>MySkills</li>
      </NavLink>

    </>
  );

  return (
    <div className="top-0 left-0 z-20 w-full   shadow-md">
      <div className="navbar max-w-5xl mx-auto   text-cyan-700 rounded-full  px-2 sm:px-4">
        
        {/* Start - Logo & Mobile Menu */}
        <div className="navbar-start">
          {/* Mobile dropdown */}
          <div className="dropdown lg:hidden">
            <div tabIndex={0} role="button" className="btn btn-ghost p-1">
              
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-3 shadow bg-white rounded-box w-48  space-y-2"
            >
              {links}
            </ul>
          </div>

          {/* Logo */}
          <div className="flex items-center gap-2 sm:gap-3">
            <img src={portfolio} alt="logo" className="w-8 h-8 md:block border-2 hidden sm:w-10 sm:h-10" />
            <h1 className="hidden md:block text-lg sm:text-xl font-bold">
              RASEL MAHMUD
            </h1>
            <h1 className="block md:hidden text-lg sm:text-xl font-bold">RM</h1>
          </div>
        </div>

        {/* Center - Menu items (hidden on mobile) */}
        <MotionDiv
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.8 }}
          className="navbar-center hidden lg:flex"
        >
          <ul className="menu gap-4 xl:gap-6 menu-horizontal px-1">{links}</ul>
        </MotionDiv>

       
     <div className="navbar-end flex items-center gap-2 sm:gap-4">
  <DarkModeToggle />
  

  <div className="relative w-24 sm:w-32 md:w-36 h-10 sm:h-12 flex items-center justify-center overflow-hidden rounded-xl  border border-gray-800 shadow-lg group">
    
   
    <div className="absolute inset-[-100%] bg-[conic-gradient(transparent,transparent,#00a6ff)] animate-[spin_4s_linear_infinite]" />
    
   
    <a 
      href={resume} 
      className="absolute inset-[1.5px] flex items-center justify-center rounded-[11px] text-white text-xs sm:text-sm md:text-base font-semibold bg-gradient-to-r from-[#0f172a] to-[#1e3a8a] hover:from-[#1e3a8a] hover:to-[#2563eb] transition-all duration-300 z-10"
    >
      <span className="flex items-center gap-1">
        Hire Me 
        <FaLocationArrow className="text-yellow-400 text-[10px] sm:text-xs hidden sm:inline-block animate-pulse" />
      </span>
    </a>

  </div>
</div>
      </div>
    </div>
  );
};

export default Navbar;
