import React from 'react';
import TextExperience from './TextExperience';
import TopExperience from './TopExperience';
import AllExperience from './AllExperience';

const ExperienceMain = () => {
    return (
        <div>
            <div>
                <TextExperience></TextExperience>
            </div>
            <div>
                <TopExperience></TopExperience>
            </div>
            <div>
                <AllExperience></AllExperience>
            </div>
        </div>
    );
};

export default ExperienceMain;