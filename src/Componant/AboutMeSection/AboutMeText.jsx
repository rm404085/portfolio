import React from 'react';

const AboutMeText = () => {
    return (
        <div>
            <div className='flex flex-col lg:items-start items-center lg:text-left text-center lg:mt-6'>
            <h1 className='text-5xl text-cyan-700 font-bold mb-8'>About Me</h1>
            <p className=' opacity-80 font-sans'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore quidem esse repellendus facere saepe consequuntur voluptate soluta impedit vero neque?orem ipsum dolor sit, amet consectetur adipisicing elit. Labore quidem esse repellendus facere saepe consequuntur voluptate soluta impedit vero neque?

            </p>
            <button className='border border-orange-600 py-2 rounded-full px-3 text-orange-400 text-xl mt-8 opacity-50 transition-all duration-500 lg:self-start self-center hover:text-cyan-600 hover:border-cyan-600 shadow-gray-200 shadow-lg'>My Project</button>
            </div>
        </div>
    );
};

export default AboutMeText;