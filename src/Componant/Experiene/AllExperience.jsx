import React from 'react';
import SingleExperience from './SingleExperience';
import { FaArrowRightLong, FaLocationArrow } from 'react-icons/fa6';
import { FaArrowAltCircleDown, FaRegArrowAltCircleDown } from 'react-icons/fa';
import { div } from 'framer-motion/client';
import { fadeIn } from './../AboutMeSection/FramerMotion/variants';
import { motion } from 'framer-motion';

const AllExperience = () => {

    const experiences = [
        {
            job: "Front_End_Developer",
            institute: "Programming Hero",
            date: "2024",
            responsibilities:[
                "Implementing reusable components.",
      "Participating in large scale application.",
      "Working on the performance of web applications.",
      "Generating new ideas for better user experience.",
            ],
        },
        {
            job:"Full_Stack",
            institute:"Next_Level_Programming_hero",
            date:"2025",
            responsibilities:[
                "Implementing reusable components.",
                "Participating in large scale application.",
                "Working on the performance of web applications.",
                "Generating new ideas for better user experience.",
            ],
        },
        {
            job:"Front_End_Developer",
            institute:"Uttara University(UU)",
            date:"2025",
            responsibilities:[
                " JavaScript, React and TailwindCSS.",
                "Participating in preparing course materials.",
            ],
        },
    ]
    return (
        <div>
            <div className='flex md:flex-row flex-col items-center justify-between m-10'>
                {
                    experiences.map((experience, index)=>{
                        
                      return <>
                      <SingleExperience key={index} experience={experience} ></SingleExperience>
                      {index < 2 ? (
              <motion.div
                variants={fadeIn("right", 0)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.7 }}
              >
                <FaArrowRightLong className="text-6xl text-orange-600 lg:block hidden" />
              </motion.div>
            ) : (
              ""
            )}
                      </>   }
                   
                )
                }
            </div>
        </div>
    );
};

export default AllExperience;