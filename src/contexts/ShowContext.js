import React, { useState, useEffect, createContext } from 'react';
import { fetchData } from './apiCalls';

const ShowContext = createContext();

const ShowContextProvider = (props) => {
  const [years, setYears] = useState([]);
  // const [shows, setShows] = useState([]);
  const [currentTrack, setCurrentTrack] = useState({});
  // const [isLoading, setIsLoading] = useState(true);

  const getYears = () => {
    fetchData('years').then((data) => setYears(data.data));
  };

  const getTrack = (id) => {
    fetchData(`tracks/${id}`).then((data) => setCurrentTrack(data.data));
  };

  return (
    <ShowContext.Provider
      value={{ years, getYears, currentTrack, setCurrentTrack }}
    >
      {props.children}
    </ShowContext.Provider>
  );
};

export { ShowContextProvider, ShowContext };
