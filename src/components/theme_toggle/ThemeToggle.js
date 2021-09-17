import React, { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';

const ThemeToggle = () => {
  // const { isPartyMode, partyMode, basic, toggleTheme } =
  //   useContext(ThemeContext);
  const { toggleTheme } = useContext(ThemeContext);
  // const themes = isPartyMode ? partyMode : basic;
  return (
    <button onClick={toggleTheme}>
      {/* {themes.isPartyMode ? 'Standard View' : 'Party Mode'} */}
      this is a button
    </button>
  );
};

export default ThemeToggle;
