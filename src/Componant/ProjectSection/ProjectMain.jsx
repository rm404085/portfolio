import { motion } from "framer-motion";
import { fadeIn } from "../AboutMeSection/FramerMotion/variants";
import ProjectsText from "./ProjectText";
import SingleProject from "./SingleProject";

const projects = [

  {
    name: "Gadget Heaven",
    year: "Sept2024",
    align: "left",
    image: "/src/assets/images/website-img-1.jpg",
    link: "https://celadon-empanada-456bdc.netlify.app/",
    uses: "Html, CSS, Tailwind, React, Javascript",
  },

  {
    name: "Learn Vocabulary",
    year: "Mar2025",
    align: "right",
    image: "/src/assets/images/vocabulary.png",
    link: "https://inspiring-bombolone-d0ed68.netlify.app",
    uses: "Html, Css, Tailwind, React, Firebase, Mongodb",
  },
  {
    name: "Dream 11 Cricket Team",
    year: "Mar2024",
    align: "right",
    image: "/src/assets/images/dream11-2.jpg",
    link: "https://aquamarine-youtiao-34a16d.netlify.app/",
    uses: "Html, Css, Javascript, React",
  },
  
  {
    name: "Tour Management System",
    year: "May2025",
    align: "left",
    image: "/src/assets/images/website-img-4.jpg",
    link: "https://playful-cascaron-550a47.netlify.app/",
    uses: "Html, Css, Tailwind, React, Node.js, Express.js, Mongodb,"
  },
  
   {
    name: "History Fact Project ",
    year: "Jan2025",
    align: "right",
    image: "/src/assets/images/website-img-3.jpg",
    link: "https://celebrated-kleicha-28b0f1.netlify.app/",
    uses: "Html, Css, Tailwind, React, Node.js, Express.js, Mongodb"
  },

  
  {
    name: "Paddy Animals",
    year: "Jan2024",
    align: "right",
    image: "/src/assets/images/R (1).jpeg",
    link: "https://delicate-rabanadas-6c14d7.netlify.app/",
    uses: "Html, Css, Javascript"
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
        {projects.map((project, index) => {
          return (
            <SingleProject
              key={index}
              name={project.name}
              year={project.year}
              align={project.align}
              image={project.image}
              link={project.link}
              uses={project.uses}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsMain;
