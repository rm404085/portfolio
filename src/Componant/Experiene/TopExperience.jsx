import React from 'react';
import TopLeftExperience from './TopLeftExperience';
import TopRightExperience from './TopRightExperience';
import TopMiddleExperience from './TopMiddleExperience';

const TopExperience = () => {
    return (
        <div className='flex lg:flex-row flex-col gap-4 items-center justify-center'>
            <TopLeftExperience></TopLeftExperience>
            <TopMiddleExperience></TopMiddleExperience>
            <TopRightExperience></TopRightExperience>
        </div>
    );
};

export default TopExperience;