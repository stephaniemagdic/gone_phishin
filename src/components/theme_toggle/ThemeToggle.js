import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';

const ThemeToggle = () => {
  const { toggleTheme } = useTheme();
  return <button onClick={toggleTheme}>Change Theme</button>;
};

export default ThemeToggle;
