import React from 'react';

const ExperienceInfo = ({number, text}) => {
    return (
        <div className="flex flex-col justify-center items-center">
      <p className="font-bold text-6xl text-cyan-700">{number}</p>
      <p className="font-bold text-xl text-gray-400 -mt-2 uppercase ">{text}</p>
    </div>
    );
};

export default ExperienceInfo;