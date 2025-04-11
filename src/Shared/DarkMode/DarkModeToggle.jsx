

import { useEffect, useState } from 'react';

const DarkModeToggle = () => {
  const [dark, setDark] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
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
    <div className='relative w-32 h-10  overflow-hidden shadow-md before:content-[""] before:absolute before:inset-0 before:rounded lg:before:border-2 lg:before:border-blue-400 lg:before:animate-pulse'>
  <button
    onClick={() => setDark(!dark)}
    className="absolute top-1 bottom-1 left-2 right-2 flex justify-center items-center rounded lg:bg-gradient-to-r from-slate-800 to-slate-900 text-white"
  >
    {dark ? '☀️ Light' : '🌙 Dark'}
  </button>
</div>
  );
};

export default DarkModeToggle;