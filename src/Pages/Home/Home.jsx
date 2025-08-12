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

const Home = () => {
    return (
        <div className="">
        <Banner></Banner>
        <AboutMeSection></AboutMeSection>
        <SkillsMain></SkillsMain>

        
      <div className='mt-28'>
      <SubSkill></SubSkill>
      </div>

      <div className='mt-32'>
        <ExperienceMain></ExperienceMain>
      </div>
      
            
         <div>
           <ProjectsMain></ProjectsMain>
         </div>
         <div>
        <ContactMeMain></ContactMeMain>
      </div>
        
      </div>
    );
};

export default Home;