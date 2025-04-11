import React from 'react';
import './Banner.css';
import { motion } from 'framer-motion';
import { FaFacebook, FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa6';
import { NavLink } from 'react-router-dom';



const Banner = () => {
  return (
    <div className="hero animated-gradient text-white mb-36 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
          className="max-w-sm rounded-md lg:ml-12 border-s mt-20 shadow-2xl"
          alt="Profile"
        />
        <div className="mt-10">
          <p className="uppercase text-slate-500">front-end web developer</p>

          <motion.h1
            animate={{ opacity: 1, scale: 1, y: 10 }}
            transition={{
              duration: 2,
              delay: 1,
              ease: 'easeOut',
              repeat: Infinity,
              repeatType: 'reverse',
            }}
            initial={{ opacity: 0, scale: 0.95 }}
            className="lg:text-5xl text-4xl lg:mr-20 uppercase font-bold"
          >
            Hello I'M <br />
            <span className="text-6xl text-white">Rasel </span>
            <motion.span
              animate={{ color: ['#ffaf33', '#337dff', '#e0ff33'] }}
              transition={{
                duration: 2,
                delay: 2,
                ease: 'easeOut',
                repeat: Infinity,
              }}
              className="font-bold lg:text-7xl"
            >
              M
            </motion.span>
            ahmud
          </motion.h1>

          <p className="py-6 mt-3 text-zinc-600 text-lg">
            A Passionate Web Developer with 1 Year of Front-End Experience
          </p>

          <div className="flex gap-3 mb-4 text-xl text-blue-800">
            <NavLink
              to="https://www.facebook.com/mdrasel.mahmud.16568548"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook />
            </NavLink>
            <NavLink
              to="https://www.linkedin.com/feed/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </NavLink>
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
            <a
              href="https://wa.me/yourwhatsapplink"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp />
            </a>
          </div>

          <button className='btn'>Download Resume</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
