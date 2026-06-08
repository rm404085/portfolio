import React from 'react';
import './Banner.css';
import './Button.css';
import './ImageBox.css';
import { motion } from 'framer-motion';
import { FaFacebook, FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa6';
import { fadeIn } from '../../Componant/AboutMeSection/FramerMotion/variants';

import image from '../../assets/images/profile.jpg';
import resume from '../../assets/resume/my_resume.pdf';

const Banner = () => {
  const MotionDiv = motion.div;
  const MotionH1 = motion.h1;
  const MotionSpan = motion.span;

  return (
    
    <div className="hero animated-gradient text-white mb-36 min-h-screen w-full max-w-full overflow-x-hidden">
      <div className="hero-content flex-col animate-float lg:flex-row-reverse max-w-5xl mx-auto w-full px-4">

        {/* ——— Image + Glow Wrapper ——— */}
        <MotionDiv
          className="box mt-10"
          variants={fadeIn("left", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
        >
          <div className="content">
            <img src={image} alt="Profile" />
            <h2>
              Someone Famous
              <br />
              <span>Web developer</span>
            </h2>
            <a className="underline" href={resume}>
              Hire Me
            </a>
          </div>
        </MotionDiv>

        {/* ——— Text & Buttons ——— */}
        <MotionDiv
          className="mt-10 w-full lg:w-1/2"
          variants={fadeIn("right", 0.4)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
        >
          <p className="uppercase text-slate-500 tracking-wider text-sm">
            full-stack web developer
          </p>

          <MotionH1
            className="lg:text-4xl text-3xl uppercase font-bold leading-tight"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1, y: 10 }}
            transition={{
              duration: 2,
              delay: 1,
              ease: "easeOut",
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            Hello I'M <br />
            <span className="text-5xl lg:text-6xl text-white">Rasel </span>
            <MotionSpan
              className="font-bold lg:text-7xl text-6xl"
              initial={{ color: "#ffffff" }}
              animate={{ color: ["#ffaf33", "#337dff", "#e0ff33"] }}
              transition={{
                duration: 2,
                delay: 2,
                ease: "easeOut",
                repeat: Infinity,
              }}
            >
              M
            </MotionSpan>
            ahmud
          </MotionH1>

          <p className="py-6 mt-3 text-zinc-400 text-base lg:text-lg">
            A Passionate Web Developer with 1.5 Year of Front-End Experience
          </p>

          <div className="flex gap-4 mb-6 font-bold text-xl text-blue-500">
            <a href="https://www.facebook.com/mdrasel.mahmud.16568548" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
              <FaFacebook />
            </a>
            <a href="https://www.linkedin.com/in/rasel-mahmud-1ab0b5333/" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
              <FaLinkedin />
            </a>
            <a href="https://github.com/rm404085" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
              <FaGithub />
            </a>
            <a href="https://wa.me/yourwhatsapplink" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
              <FaWhatsapp />
            </a>
          </div>

          <a href={resume}><button className="btnn">Download Resume</button></a>
        </MotionDiv>
      </div>
    </div>
  );
};

export default Banner;