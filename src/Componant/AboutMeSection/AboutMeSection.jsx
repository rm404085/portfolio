import React from 'react';
import AboutMeText from './AboutMeText';
import AboutMeImage from './AboutMeImage';
import { motion } from 'framer-motion';
import { fadeIn } from './FramerMotion/variants';

const AboutMeSection = () => {
    return (
        <motion.div
            variants={fadeIn("left", 0)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.2 }} // triggers earlier on mobile
            className="flex flex-col md:flex-row lg:gap-32 gap-8 md:gap-12 w-full px-4 md:px-10"
        >
            <div className="flex-1 max-w-full">
                <AboutMeText />
            </div>
            <div className="flex-1 max-w-full">
                <AboutMeImage />
            </div>
        </motion.div>
    );
};

export default AboutMeSection;
