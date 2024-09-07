// ThemeSwitcher.js

import React, { useState, useEffect } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa'; // Importing the sun and moon icons from react-icons


const ThemeSwitcher = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
      document.body.classList.remove('light-mode');

      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark-mode');
      document.body.classList.add('light-mode');

      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <button 
    onClick={toggleTheme} 
    style={styles.button}
    aria-label="Toggle theme"
  >
    {isDarkMode ? <FaSun style={styles.icon} /> : <FaMoon style={styles.icon} />}
  </button>
  );
};
const styles = {
  button: {
    position: 'fixed',
    bottom: '25px',
    right: '20px',
    backgroundColor: 'var(--text-color)',
    border: 'none',
    padding: '10px',
    borderRadius: '60%',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.3)',
    // zIndex: 0, // Ensure the button is above other content
  },
  icon: {
    color: '#ffd700', // Gold color for the icon, you can customize this
    fontSize: '25px',
  },
};
export default ThemeSwitcher;
