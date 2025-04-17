
import { FaHtml5 } from "react-icons/fa6";
import { FaCss3Alt } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io";
import { SiTailwindcss } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa6";
import { RiNextjsLine } from "react-icons/ri";
import SingleSkill from "./SingleSkill";
import { IoLogoFirebase } from "react-icons/io5";
import { fadeIn } from "../AboutMeSection/FramerMotion/variants";
import { motion } from "framer-motion";
const Allskills = () => {

    const skills = [
        {
            skill:"HTML",
            icon: FaHtml5,
        },
        {
            skill: "CSS",
            icon: FaCss3Alt,
        },
        {
            skill: "JAVASCRIPT",
            icon: IoLogoJavascript,
        },
        {
            skill:"TAILWIND CSS",
            icon: SiTailwindcss,
        },
        {
          skill: "REACT",
          icon: FaReact,
        },
        {
            skill: "MONGODB",
            icon: SiMongodb,
        },
          {
            skill:"NODE JS",
            icon: FaNodeJs,
          },
          {
            skill: "NEXT JS",
            icon: RiNextjsLine,
          },
          {
            skill: "FireBase",
            icon: IoLogoFirebase,
          }
          

    ]
    return (
        <div>
      <div className="flex max-w-[1200px] justify-center items-center relative gap-2">
        {skills.map((item, index) => {
          const IconComponent = item.icon;
          return (
            <motion.div
            variants={fadeIn("up", `0.${index}`)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.8 }}
            
            >
 <SingleSkill
              key={index}
              text={item.skill}
              svgImg={<IconComponent />}
            />
            </motion.div>
           
          );
        })}
      </div>
    </div>
    );
};

export default Allskills;