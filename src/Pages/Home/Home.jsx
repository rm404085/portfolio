import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import DarkModeToggle from '../../Shared/DarkMode/DarkModeToggle';
import Banner from '../Banner/Banner';
import AboutMeSection from '../../Componant/AboutMeSection/AboutMeSection';
import SkillsMain from '../../Componant/Skillsection/SkillsMain';
import SubSkill from '../../Componant/Skillsection/SubSkill';
import ExperienceMain from '../../Componant/Experiene/ExperienceMain';
import ProjectsMain from '../../Componant/ProjectSection/ProjectMain';
import ContactMeMain from '../../Componant/ContactUs/ContactMeMain';
import MySkills from '../Skills/MySkiils';

const Home = () => {
    return (
       
        <div className="w-full max-w-full min-h-screen bg-transparent overflow-x-hidden relative">
            
            <Banner />
            <AboutMeSection />
            <MySkills />
            <SkillsMain />

            <div className='mt-28 w-full max-w-full overflow-hidden'>
                <SubSkill />
            </div>

            <div className='mt-32 w-full max-w-full overflow-hidden'>
                <ExperienceMain />
            </div>
            
            <div className='w-full max-w-full overflow-hidden'>
                <ProjectsMain />
            </div>

            <div className='w-full max-w-full overflow-hidden'>
                <ContactMeMain />
            </div>
            
        </div>
    );
};

export default Home;