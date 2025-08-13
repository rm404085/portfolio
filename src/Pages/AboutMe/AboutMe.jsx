import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import aboutimg from "../../assets/images/IMG_20241126_143058299_PORTRAIT.jpg"

const AboutMe = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white flex items-center justify-center px-6 py-16">
      <div className="max-w-5xl w-full grid md:grid-cols-2 gap-12 items-center">
        
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <img
            src={aboutimg}
            alt="Profile"
            className="rounded-2xl shadow-lg border-4 border-gray-700 w-72 h-72 object-cover"
          />
        </motion.div>

        {/* About Me Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h1 className="text-4xl font-bold mb-4">Hi, I'm Rasel Mahmud 👋</h1>
          <p className="text-gray-300 leading-relaxed mb-6">
            I’m a passionate <span className="text-indigo-400">Full Stack Developer</span> 
             who loves building user-friendly web applications. With experience in 
            <span className="text-indigo-400"> React.js</span>, 
            <span className="text-indigo-400"> Next.js</span>, and 
            <span className="text-indigo-400"> MERN stack</span>, 
            I aim to craft clean, modern, and high-performing applications.
          </p>
          <p className="text-gray-300 leading-relaxed mb-6">
            Outside of coding, I enjoy learning new tech stacks, exploring UI/UX design trends, 
            and contributing to open-source projects.
          </p>

          {/* Social Links */}
          <div className="flex gap-4">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white text-2xl transition"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-blue-400 text-2xl transition"
            >
              <FaLinkedin />
            </a>
            <a
              href="mailto:youremail@example.com"
              className="text-gray-300 hover:text-red-400 text-2xl transition"
            >
              <FaEnvelope />
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutMe;
