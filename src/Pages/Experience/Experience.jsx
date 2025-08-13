import React from "react";
import { motion } from "framer-motion";
import { FaBriefcase } from "react-icons/fa";

const experiences = [
  {
    company: "Programming Hero",
    role: "Frontend Developer",
    duration: "Jan 2024 - Present",
    description:
      "Developed responsive web applications using React, Tailwind CSS, and REST APIs. Collaborated with designers to create smooth user experiences."
  },
  {
    company: "Programming Hero Next Level",
    role: "MERN Stack Developer",
    duration: "Jun 2025 - Dec 2025 - Present",
    description:
      "Built full-stack applications with MongoDB, Express.js, React, and Node.js. Implemented authentication, role-based dashboards, and CRUD operations."
  },
  {
    company: "PH Tour Management Projects",
    role: "Web Developer",
    duration: "2025 - 2025",
    description:
      "Worked with multiple clients to deliver custom websites and e-commerce platforms. Focused on SEO, speed optimization, and responsive design."
  }
];

const Experience = () => {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen py-12 px-6 md:px-20">
      <motion.h2
        className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        My Experience
      </motion.h2>

      <div className="relative border-l border-gray-300 dark:border-gray-600">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className="mb-10 ml-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            {/* Icon */}
            <span className="absolute flex items-center justify-center w-10 h-10 bg-blue-600 rounded-full -left-5 ring-8 ring-white dark:ring-gray-900">
              <FaBriefcase className="text-white" />
            </span>

            {/* Card */}
            <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                {exp.role}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {exp.company} • {exp.duration}
              </p>
              <p className="mt-3 text-gray-600 dark:text-gray-300">
                {exp.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Experience;

