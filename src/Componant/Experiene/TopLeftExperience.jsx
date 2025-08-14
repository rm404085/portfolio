import React from 'react';
import ExperienceInfo from './ExperienceInfo';

const TopLeftExperience = () => {
    return (
        <div className="flex flex-col gap-6 m-5 max-w-full">
      <p className="text-orange-600 font-bold uppercase lg:text-3xl text-xl font-special text-center">
        Since 2024
      </p>
      <div className="flex justify-center items-center gap-4">
        <ExperienceInfo number="2" text="Years" />
        <p className="font-bold text-6xl text-lightBrown">-</p>
        <ExperienceInfo number="23" text="Websites" />
      </div>
      <p className="text-center text-gray-500">
        With 2 years of experience building dynamic and user-friendly web
        applications.
      </p>
      <ExperienceInfo number="$100k" text="Max Budget" />
    </div>
    );
};

export default TopLeftExperience;