import React from 'react';
import aboutMe from '../../assets/images/about-me.jpg'

const AboutMeImage = () => {
    return (
        <div className=''>
            <div className='lg:w-[300px] lg:mb-4 border border-s-8 rounded-2xl border-orange-700 lg:h-[300px]'>
            <img src={aboutMe} alt="" className='w-full m-auto rounded-xl ' />
        </div>
        <div className=''></div>
        </div>
    );
};

export default AboutMeImage;