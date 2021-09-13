import React, { useState, useEffect, createContext } from 'react';

const ShowContext = createContext();

const ShowContextProvider = (props) => {
  const [year, setYear] = useState([]);
  const [shows, setShows] = useState([]);
  const [currentTrack, setCurrentTrack] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  return (
    <ShowContext.Provider value={{}}>{props.children}</ShowContext.Provider>
  );
};

export { ShowContextProvider, ShowContext };
