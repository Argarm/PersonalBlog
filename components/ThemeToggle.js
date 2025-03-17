import React, { useState, useEffect } from 'react';
import styles from '../styles/components/themeToggle.module.css';

export default function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const isDark = localStorage.getItem('darkMode') !== 'false';
    setDarkMode(isDark);
    updateTheme(isDark);
  }, []);

  const toggleTheme = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem('darkMode', newMode);
    updateTheme(newMode);
  };

  const updateTheme = (isDark) => {
    const root = document.documentElement;
    if (isDark) {
      root.style.setProperty('--primary-bg', '#0a0f16');
      root.style.setProperty('--secondary-bg', '#141c26');
      root.style.setProperty('--primary-text', '#ffffff');
      root.style.setProperty('--secondary-text', '#b3c0d1');
      root.style.setProperty('--card-bg', 'rgba(20, 28, 38, 0.7)');
    } else {
      root.style.setProperty('--primary-bg', '#f0f4f8');
      root.style.setProperty('--secondary-bg', '#ffffff');
      root.style.setProperty('--primary-text', '#1a202c');
      root.style.setProperty('--secondary-text', '#4a5568');
      root.style.setProperty('--card-bg', 'rgba(255, 255, 255, 0.9)');
    }
  };

  return (
    <button 
      className={styles.themeToggle} 
      onClick={toggleTheme}
      aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {darkMode ? (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="5"></circle>
          <line x1="12" y1="1" x2="12" y2="3"></line>
          <line x1="12" y1="21" x2="12" y2="23"></line>
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
          <line x1="1" y1="12" x2="3" y2="12"></line>
          <line x1="21" y1="12" x2="23" y2="12"></line>
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
        </svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
        </svg>
      )}
    </button>
  );
}