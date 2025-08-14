import { motion } from "framer-motion";
import { fadeIn } from "../AboutMeSection/FramerMotion/variants";
import ProjectsText from "./ProjectText";
import SingleProject from "./SingleProject";

// ✅ Import images at the top
import gadget from "/src/assets/images/website-img-1.jpg";
import vocabulary from "/src/assets/images/vocabulary.png";
import dream11 from "/src/assets/images/dream11-2.jpg";
import tour from "/src/assets/images/website-img-4.jpg";
import history from "/src/assets/images/website-img-3.jpg";
import paddy from "/src/assets/images/R (1).jpeg";

const projects = [

    {
    name: "Tour Management System",
    year: "May2025",
    align: "left",
    image: tour,
    link: "https://playful-cascaron-550a47.netlify.app/",
    uses: "HTML, CSS, Tailwind, React, Node.js, Express.js, MongoDB",
  },
  {
    name: "Learn Vocabulary",
    year: "Mar2025",
    align: "right",
    image: vocabulary,
    link: "https://inspiring-bombolone-d0ed68.netlify.app",
    uses: "HTML, CSS, Tailwind, React, Firebase, MongoDB",
  },
  {
    name: "Gadget Heaven",
    year: "Sept2024",
    align: "left",
    image: gadget, // 
    link: "https://celadon-empanada-456bdc.netlify.app/",
    uses: "HTML, CSS, Tailwind, React, JavaScript",
  },
  
  {
    name: "Dream 11 Cricket Team",
    year: "Mar2024",
    align: "right",
    image: dream11,
    link: "https://aquamarine-youtiao-34a16d.netlify.app/",
    uses: "HTML, CSS, JavaScript, React",
  },

  {
    name: "History Fact Project",
    year: "Jan2025",
    align: "right",
    image: history,
    link: "https://celebrated-kleicha-28b0f1.netlify.app/",
    uses: "HTML, CSS, Tailwind, React, Node.js, Express.js, MongoDB",
  },
  {
    name: "Paddy Animals",
    year: "Jan2024",
    align: "right",
    image: paddy,
    link: "https://delicate-rabanadas-6c14d7.netlify.app/",
    uses: "HTML, CSS, JavaScript",
  },
];

const ProjectsMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      <motion.div
        variants={fadeIn("top", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <ProjectsText />
      </motion.div>
      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {projects.map((project, index) => (
          <SingleProject
            key={index}
            name={project.name}
            year={project.year}
            align={project.align}
            image={project.image} // ✅ Now always an imported variable
            link={project.link}
            uses={project.uses}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsMain;
