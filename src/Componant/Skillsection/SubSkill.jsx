import React from 'react';
import subskill from '../../assets/images/subSkills.jpg'

const SubSkill = () => {
    return (
        <div className="border-y-2 border-b-lightBrown  relative ">
      <div className="absolute bg-gradient-to-r from-orange-700 to-cyan-900 opacity-75 w-full h-full"></div>
      <img
        src={subskill}
        alt="Sub Skill"
        className="w-full h-auto object-cover z-0"
      />
    </div>
    );
};

export default SubSkill;