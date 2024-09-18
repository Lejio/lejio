import React from 'react';
import { useTheme } from '../lib/ThemeContext'; // Import the custom hook

const ThemeButton: React.FC = () => {
  const { theme, toggleTheme } = useTheme(); // Use the theme context

  return (
    <button
      onClick={toggleTheme}
      className="px-4 py-2 rounded bg-gray-800 text-white dark:bg-gray-200 dark:text-black transition-colors duration-300"
    >
      {theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
    </button>
  );
};

export default ThemeButton;
