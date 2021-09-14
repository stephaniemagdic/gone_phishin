import React, { useState, createContext, useEffect } from 'react';
import { fetchData } from '../apiCalls';

const ShowContext = createContext();

const ShowContextProvider = (props) => {
  const [years, setYears] = useState([]);
  // const [shows, setShows] = useState([]);
  // const [currentTrack, setCurrentTrack] = useState({});
  // const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchData('years')
      .then((data) => data.data)
      .then((data) => data.reverse())
      .then((data) => setYears(data));
  }, []);

  // const getTrack = (id) => {
  //   fetchData(`tracks/${id}`).then((data) => setCurrentTrack(data.data));
  // };

  return (
    <ShowContext.Provider value={{ years }}>
      {props.children}
    </ShowContext.Provider>
  );
};

export { ShowContextProvider, ShowContext };
