import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';

const ThemeToggle = () => {
  const { toggleTheme, isPartyMode } = useTheme();
  return (
    <button onClick={toggleTheme}>
      {isPartyMode ? 'Default Theme' : 'Party Mode'}
    </button>
  );
};

export default ThemeToggle;
