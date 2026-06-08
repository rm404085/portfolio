import { useEffect, useState } from 'react';

const DarkModeToggle = () => {
  const [dark, setDark] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    
    return savedTheme ? savedTheme === 'dark' : true;
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (dark) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [dark]);

  return (
    <div className='relative w-28 sm:w-32 h-10 sm:h-12 rounded-xl overflow-hidden shadow-md before:content-[""] before:absolute before:inset-0 before:rounded lg:before:border-2 lg:before:border-blue-400 lg:before:animate-pulse'>
      <button
        onClick={() => setDark(!dark)}
        className="absolute top-1 bottom-1 left-1.5 right-1.5 flex justify-center items-center rounded lg:bg-gradient-to-r from-slate-800 to-slate-900 text-white text-xs sm:text-sm font-semibold transition-colors duration-300"
      >
        {dark ? '☀️ Light' : '🌙 Dark'}
      </button>
    </div>
  );
};

export default DarkModeToggle;