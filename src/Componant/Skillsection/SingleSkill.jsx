import React from 'react';

const SingleSkill = ({text, svgImg}) => {

    return (
       <div className='hover:-translate-y-24 min-h-[400px] ml-5  transition-all relative duration-1000 '>
         <div className="flex items-center flex-col   gap-4">
        <div className="bg-white text-cyan  h-[70px] w-[70px] flex items-center justify-center rounded-full hover:text-darkBrown hover:scale-105 transform transition-all duration-500 text-4xl text-orange-700 border-4 border-orange-800">{svgImg}</div>
        <p className='font-bold text-sm'>{text}</p>
        
      </div>
      <div className='w-[70px] h-[200px]  bg-gradient-to-r opacity-70 absolute from-orange-700 to-gray-600  top-[60px] rounded-3xl -z-20'></div>
       </div>
    );
};

export default SingleSkill;