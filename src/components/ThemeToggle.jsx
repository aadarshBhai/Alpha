import React, { useState, useEffect } from 'react';

const ThemeToggle = () => {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'light';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  return (
    <button 
      className="theme-toggle" 
      onClick={toggleTheme}
      aria-label="Toggle theme"
      title="Toggle dark/light theme"
    >
      {theme === 'light' ? (
        <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
          <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.591a.75.75 0 101.06 1.06l1.591-1.591zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.591-1.591a.75.75 0 10-1.06 1.06l1.591 1.591zM12 18a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V18.75a.75.75 0 01.75-.75zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.591a.75.75 0 001.06 1.06l1.591-1.591zM6 12a.75.75 0 01-.75-.75H3a.75.75 0 000 1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06L6.166 5.106a.75.75 0 00-1.06 1.06l1.591 1.591z"/>
        </svg>
      ) : (
        <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
          <path fillRule="evenodd" d="M9.528 1.718a.75.75 0 01.162.819l8.986 8.986a.75.75 0 01-.1 1.075l-8.986 8.986a.75.75 0 01-1.075-.1l-.008-.008a.75.75 0 01-.114-.819L17.428 12l-8.935-8.935a.75.75 0 01.114-.819l.008-.008zM6.75 2.5a.75.75 0 000 1.5h1.5a.75.75 0 000-1.5H6.75zM4.25 7.5a.75.75 0 000 1.5h1.5a.75.75 0 000-1.5H4.25zM3 12.25a.75.75 0 01.75-.75h1.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75zM4.25 17a.75.75 0 000 1.5h1.5a.75.75 0 000-1.5H4.25zM6.75 21.5a.75.75 0 000 1.5h1.5a.75.75 0 000-1.5H6.75z" clipRule="evenodd"/>
        </svg>
      )}
    </button>
  );
};

export default ThemeToggle;
