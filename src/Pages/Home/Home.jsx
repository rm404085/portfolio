import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import DarkModeToggle from '../../Shared/DarkMode/DarkModeToggle';
import Banner from '../Banner/Banner';
import AboutMeSection from '../../Componant/AboutMeSection/AboutMeSection';

const Home = () => {
    return (
        <div className="">
        <Banner></Banner>
        <AboutMeSection></AboutMeSection>
        
      </div>
    );
};

export default Home;