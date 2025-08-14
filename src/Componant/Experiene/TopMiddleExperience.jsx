import React from 'react';
import experience from "../../assets/images/experience-image.png"

const TopMiddleExperience = () => {
    return (
        <div>
            <div className='lg:w-[90%] md:w-[50%] mt-4 max-w-full'>
                <img src={experience}  className='' alt="experience" />
            </div>
        </div>
    );
};

export default TopMiddleExperience;