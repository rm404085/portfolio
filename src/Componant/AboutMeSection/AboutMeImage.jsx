import React from 'react';
import aboutMe from '../../assets/images/about-me.jpg'

const AboutMeImage = () => {
    return (
        <div className=''>
            <div className='lg:w-[300px] lg:mb-32   lg:h-[500px]'>
            <img src={aboutMe} alt="" className='w-full m-auto rounded-xl ' />
        </div>
        <div className=''></div>
        </div>
    );
};

export default AboutMeImage;