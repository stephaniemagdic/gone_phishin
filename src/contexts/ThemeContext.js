import React, { useState, createContext, useEffect } from 'react';

const ThemeContext = createContext();

const ThemeContextProvider = ({ children }) => {
  const [themes, setTheme] = useState({
    isPartyMode: false,
    party: {
      text: 'pink',
      mainBG: 'teal',
      highlightBG: 'orange',
    },
    basic: { text: '#d9dbdc', mainBG: '#f2f3f5', lowlightBG: '#D9DBDC' },
  });

  const toggleTheme = () => {
    setTheme({ isPartyMode: !isPartyMode });
  };

  return (
    <ThemeContext.Provider value={(toggleTheme, themes)}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContextProvider, ThemeContext };
