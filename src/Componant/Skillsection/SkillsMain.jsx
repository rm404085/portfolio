import React from 'react';
import SkillsText from './SkillsText';
import Allskills from './Allskills';
import SingleSkill from './SingleSkill';
import SubSkill from './SubSkill';
import AllSkillsSm from './AllSkillsSm';
import { motion } from "framer-motion";
import { fadeIn } from '../AboutMeSection/FramerMotion/variants';



const SkillsMain = () => {

   


    return (
        <div className='mb-20'>
            <motion.div 
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
            className='max-w-[1200px] px-4 mx-auto min-h-[300px] relative overflow-hidden'>
                <SkillsText></SkillsText>
            </motion.div>
            <div className='absolute hidden lg:block  -transation-x-[50%] '>
               <Allskills></Allskills>
            </div>
            <div className='lg:hidden block'>
                    <AllSkillsSm></AllSkillsSm>
            </div>

            
            
        </div>
    );
};

export default SkillsMain;