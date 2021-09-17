import React, { useState, createContext } from 'react';

const ThemeContext = createContext();

const ThemeContextProvider = ({ children }) => {
  const [themes, setTheme] = useState({
    isPartyMode: false,
    partyMode: {
      text: 'pink',
      mainBG: 'teal',
      highlightBG: 'orange',
    },
    basic: { text: '#d9dbdc', mainBG: '#f2f3f5', lowlightBG: '#D9DBDC' },
  });

  const toggleTheme = () => {
    setTheme({ ...themes, isPartyMode: !themes.isPartyMode });
  };

  return (
    <ThemeContext.Provider value={{ ...themes, toggleTheme: toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

function useTheme() {
  const context = React.useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeContextProvider');
  }
  return context;
}

export { ThemeContextProvider, useTheme };
