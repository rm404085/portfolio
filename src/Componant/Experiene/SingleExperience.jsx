import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../AboutMeSection/FramerMotion/variants';


const SingleExperience = ({experience}) => {
    return (
        <div>
            <motion.div
      variants={fadeIn("right", 0)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.7 }}
      className="md:h-[350px] md:w-[240px] sm:h-auto sm:w-full border-2 border-orange-600 border-dashed rounded-2xl mt-12 p-4"
    >
            <p className="font-bold text-cyan">{experience.job}</p>
      <p className="text-orange">{experience.institute}</p>
      <p className="text-lightGrey">{experience.date}</p>

      <ul>
        {
            experience.responsibilities.map((resp, index)=> <li key={index}>{resp}</li>)
        }
      </ul>
            </motion.div>
        </div>
    );
};

export default SingleExperience;