import React from 'react';
import AboutMeText from './AboutMeText';
import AboutMeImage from './AboutMeImage';
import { motion } from 'framer-motion';
import { FaDebian } from 'react-icons/fa6';
import { fadeIn } from './FramerMotion/variants';

const AboutMeSection = () => {
    return (
        <motion.div
        variants={fadeIn("left", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
         className='flex md:flex-row flex-col lg:gap-32 gap-12  m-10 '>
            <AboutMeText></AboutMeText>
            <AboutMeImage></AboutMeImage>
        </motion.div>
    );
};

export default AboutMeSection;