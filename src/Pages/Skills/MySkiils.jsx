import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaDatabase, FaHtml5, FaCss3Alt, FaJsSquare, FaGitAlt } from "react-icons/fa";
import { SiMongodb, SiTailwindcss, SiTypescript, SiExpress, SiNextdotjs, SiShadcnui } from "react-icons/si";

const skills = [
  { name: "HTML5", icon: <FaHtml5 />, color: "text-orange-500" },
  { name: "CSS3", icon: <FaCss3Alt />, color: "text-blue-500" },
  { name: "JavaScript", icon: <FaJsSquare />, color: "text-yellow-400" },
  { name: "TypeScript", icon: <SiTypescript />, color: "text-blue-400" },
  { name: "React.js", icon: <FaReact />, color: "text-cyan-400" },
  { name: "Next.js", icon: <SiNextdotjs />, color: "text-gray-200" },
  { name: "Node.js", icon: <FaNodeJs />, color: "text-green-500" },
  { name: "Express.js", icon: <SiExpress />, color: "text-gray-300" },
  { name: "MongoDB", icon: <SiMongodb />, color: "text-green-400" },
  { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "text-cyan-300" },
  { name: "shadcn/ui", icon: <SiShadcnui />, color: "text-purple-400" },
  { name: "Git", icon: <FaGitAlt />, color: "text-red-500" },
  { name: "Database", icon: <FaDatabase />, color: "text-yellow-500" },
];

const MySkills = () => {
  return (
    <section className="bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 py-16 px-6 sm:px-10 text-white">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl font-bold mb-4 text-yellow-400"
        >
          My Skills
        </motion.h2>
        <p className="text-gray-300 max-w-2xl mx-auto mb-12">
          I specialize in modern web development technologies and tools to build fast, responsive, and user-friendly applications.
        </p>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="bg-gray-800 hover:bg-gray-700 rounded-xl p-6 flex flex-col items-center shadow-lg hover:shadow-yellow-400/50 transition-all"
            >
              <div className={`text-4xl mb-3 ${skill.color}`}>{skill.icon}</div>
              <h3 className="text-lg font-semibold">{skill.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MySkills;
