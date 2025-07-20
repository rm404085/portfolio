import React from 'react';
import './Banner.css';
import './Button.css';
import './ImageBox.css';
import { motion } from 'framer-motion';
import { FaFacebook, FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa6';
import { NavLink } from 'react-router-dom';
import { fadeIn } from '../../Componant/AboutMeSection/FramerMotion/variants';
import myself from '../../assets/images/email-image.png';

const Banner = () => {
  return (
    <div className="hero animated-gradient text-white mb-36 min-h-screen">
      <div className="hero-content flex-col animate-float lg:flex-row-reverse">

        {/* ——— Image + Glow Wrapper ——— */}
        <motion.div
          className="box  mt-20"
          variants={fadeIn("left", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.7 }}
        >
          <div className="content ">
            <img src={myself} alt="Profile" />
            <h2>
              Someone Famous
              <br />
              <span>Web developer</span>
            </h2>
            <a className="underline" href="">
              Hire Me
            </a>
          </div>
        </motion.div>

        {/* ——— Text & Buttons ——— */}
        <motion.div
          className="mt-20 "
          variants={fadeIn("right", 0.4)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.7 }}
        >
          <p className="uppercase text-slate-500">
            front-end web developer
          </p>

          <motion.h1
            className="lg:text-5xl text-2xl lg:mr-20 uppercase font-bold"
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
            <span className="text-6xl text-white">Rasel </span>
            <motion.span
              className="font-bold lg:text-7xl"
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
            </motion.span>
            ahmud
          </motion.h1>

          <p className="py-6 mt-3 text-zinc-600 text-lg">
            A Passionate Web Developer with 1 Year of Front-End Experience
          </p>

          <div className="flex gap-3 mb-4 text-xl text-blue-800">
            <NavLink to="https://www.facebook.com/mdrasel.mahmud.16568548" target="_blank">
              <FaFacebook />
            </NavLink>
            <NavLink to="https://www.linkedin.com/feed/" target="_blank">
              <FaLinkedin />
            </NavLink>
            <a href="https://github.com/yourusername" target="_blank">
              <FaGithub />
            </a>
            <a href="https://wa.me/yourwhatsapplink" target="_blank">
              <FaWhatsapp />
            </a>
          </div>

          <button className="btnn">Download Resume</button>
        </motion.div>
      </div>
    </div>
  );
};

export default Banner;
