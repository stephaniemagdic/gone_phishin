import React, { useState, useEffect, createContext } from 'react';
import { fetchData } from './apiCalls';

const ShowContext = createContext();

const ShowContextProvider = (props) => {
  const [year, setYear] = useState([]);
  const [shows, setShows] = useState([]);
  const [currentTrack, setCurrentTrack] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const getShows = (year) => {
    fetchData(year).then((data) => setShows(data.data));
  };

  return (
    <ShowContext.Provider value={{ shows, getShows }}>
      {props.children}
    </ShowContext.Provider>
  );
};

export { ShowContextProvider, ShowContext };
