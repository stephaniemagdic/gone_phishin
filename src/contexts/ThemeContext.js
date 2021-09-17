import React, { useState, createContext, useEffect } from 'react';

const ThemeContext = createContext();

const ThemeContextProvider = ({ children }) => {
  const themesObj = {
    isPartyMode: true,
    party: {
      text: 'pink',
      mainBG: 'teal',
      highlightBG: 'orange',
    },
    dark: { text: '#ddd', mainBG: '#333', highlightBG: '#555' },
  };
  const [themes, toggleTheme] = useState(themesObj);

  const toggleTheTheme = () => {
    toggleTheme({ isPartyMode: !isPartyMode });
  };

  return (
    <ThemeContext.Provider value={(toggleTheTheme, themes)}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContextProvider, ThemeContext };
