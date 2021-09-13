import React, { useState, useEffect, createContext } from 'react';
import { fetchData } from './apiCalls';

const ShowContext = createContext();

const ShowContextProvider = (props) => {
  const [years, setYears] = useState([]);
  const [shows, setShows] = useState([]);
  const [currentTrack, setCurrentTrack] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const getShows = (year) => {
    fetchData(`years/${year}`).then((data) => setShows(data.data));
  };

  const getYears = () => {
    fetchData('years').then((data) => setYears(data));
  };

  return (
    <ShowContext.Provider value={{ year, getYears, shows, getShows }}>
      {props.children}
    </ShowContext.Provider>
  );
};

export { ShowContextProvider, ShowContext };
