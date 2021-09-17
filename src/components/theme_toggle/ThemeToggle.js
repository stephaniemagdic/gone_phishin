import React, { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';

const ThemeToggle = () => {
  const { toggleTheme } = useContext(ThemeContext);
  const { isPartyMode, partyMode, basic } = useContext(ThemeContext);
  const theme = isPartyMode ? partyMode : basic;
  return (
    <button onClick={toggleTheme}>
      {theme.isPartyMode ? 'Standard View' : 'Party Mode'}
    </button>
  );
};

export default ThemeToggle;
