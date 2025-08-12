import { motion } from "framer-motion";
import { fadeIn } from "../AboutMeSection/FramerMotion/variants";
import ProjectsText from "./ProjectText";
import SingleProject from "./SingleProject";

const projects = [

  {
    name: "Moola App",
    year: "Sept2022",
    align: "left",
    image: "/src/assets/images/website-img-2.webp",
    link: "https://celadon-empanada-456bdc.netlify.app/",
  },

  {
    name: "Vacation of Africa",
    year: "Mar2022",
    align: "right",
    image: "/src/assets/images/website-img-1.jpg",
    link: "https://inspiring-bombolone-d0ed68.netlify.app",
  },
  {
    name: "Vacation of Africa",
    year: "Mar2022",
    align: "right",
    image: "/src/assets/images/website-img-1.jpg",
    link: "https://aquamarine-youtiao-34a16d.netlify.app/",
  },
  
  
  {
    name: "Tourzania",
    year: "Jan2023",
    align: "right",
    image: "/src/assets/images/website-img-3.jpg",
    link: "https://delicate-rabanadas-6c14d7.netlify.app/",
  },
   {
    name: "Tourzania",
    year: "Jan2023",
    align: "right",
    image: "/src/assets/images/website-img-3.jpg",
    link: "https://celebrated-kleicha-28b0f1.netlify.app/",
  },

  {
    name: "Bank of Luck",
    year: "May2024",
    align: "left",
    image: "/src/assets/images/website-img-4.jpg",
    link: "https://playful-cascaron-550a47.netlify.app/",
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
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsMain;
