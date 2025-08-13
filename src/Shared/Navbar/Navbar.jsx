import DarkModeToggle from "../DarkMode/DarkModeToggle";
import { FaLocationArrow } from "react-icons/fa6";
import portfolio from "../../assets/images/icons8-portfolio-64.png";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeIn } from "../../Componant/AboutMeSection/FramerMotion/variants";
import "./Navbar.css";
import resume from "../../assets/resume/my_resume.pdf"

const Navbar = () => {
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
    </>
  );

  return (
    <div className="top-0 left-0 z-20 w-full   bg-white/85  shadow-md">
      <div className="navbar max-w-6xl mx-auto text-cyan-700 rounded-full border border-s-8 px-2 sm:px-4">
        
        {/* Start - Logo & Mobile Menu */}
        <div className="navbar-start">
          {/* Mobile dropdown */}
          <div className="dropdown lg:hidden">
            <div tabIndex={0} role="button" className="btn btn-ghost p-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 sm:h-7 sm:w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
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
        <motion.div
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.8 }}
          className="navbar-center hidden lg:flex"
        >
          <ul className="menu gap-4 xl:gap-6 menu-horizontal px-1">{links}</ul>
        </motion.div>

        {/* End - DarkMode + Button */}
        <div className="navbar-end flex items-center gap-2 sm:gap-4">
          <DarkModeToggle />
          <div className="relative  w-28 sm:w-36 md:w-40 h-10 sm:h-12 md:h-14 overflow-hidden rounded-xl border border-gray-200 shadow-md before:absolute before:top-[-90%] before:right-[-80%] before:bottom-[-80%] before:left-[-80%] before:bg-[conic-gradient(transparent,transparent,#00a6ff)] before:animate-spin-slow">
            <a href={resume }>
              <button className="absolute  flex items-center justify-center w-full h-full rounded-xl text-white text-sm sm:text-base font-semibold bg-gradient-to-r from-slate-900 to-purple-700 hover:scale-105 transition-transform">
              Hire Me 
              <FaLocationArrow className="ml-1 hidden md:block text-yellow-400" />
              
            </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
