
import { BsFillArrowUpRightCircleFill } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "../../../src/Componant/AboutMeSection/FramerMotion/variants";

const SingleProject = ({ name, year, align, image, link, uses }) => {
  return (
    <motion.div
      variants={fadeIn("top", 0)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.1 }}
      className={`flex w-full flex-col-reverse items-center gap-14 ${
        align === "left" ? "md:flex-row" : "md:flex-row-reverse"
      } justify-end sm:flex-col`}
    >
      <div className="lg:ml-14 flex justify-center items-center flex-col">
        <h2 className="md:text-3xl text-2xl text-orange-700 ">{name}</h2>
        <h2
          className={`text-xl font-thin m-3  font-special text-center ${
            align === "left" ? "md:text-right" : "md:text-left"
          }`}
        >
          {year}
        </h2>
        <p className="md:text-xl flex justify-center items-center flex-row text-cyan-800 ">
          {uses}
        </p>
       <a
          href={link}
          target="_blank" rel="noopener noreferrer"
          className={`text-lg flex gap-2 items-center text-cyan-700 hover:text-orange transition-all duration-500 cursor-pointer justify-self-center ${
            align === "left" ? "md:justify-self-end" : "md:justify-self-start"
          }`}
        >
          <button className="border flex justify-between items-center border-orange-600 py-2 rounded-md px-6 text-orange-400 text-xl mt-8 opacity-50 transition-all duration-500 lg:self-start self-center hover:text-cyan-600 hover:border-cyan-600 shadow-gray-200 shadow-lg">View <BsFillArrowUpRightCircleFill /></button>
        </a>
      </div>
      <div className="max-h-[220px] max-w-[400px] rounded-xl overflow-hidden hover:scale-110 transform transition-all duration-500 ralative border border-white">
        <div className="w-full h-full bg-cyan opacity-50 absolute top-0 left-0 hover:opacity-0 transition-all duration-500 md:block hidden"></div>
        <img src={image} alt="website image" className="w-full h-full" />
      </div>
    </motion.div>
  );
};

export default SingleProject;