import React, { useState, createContext, useEffect } from 'react';
import { fetchData } from '../apiCalls';
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

const ShowContext = createContext();

const ShowContextProvider = ({ children }) => {
  const [years, setYears] = useState([]);
  const [error, setError] = useState('');
  const [shows, setShows] = useState([]);
  // const [currentTrack, setCurrentTrack] = useState({});
  // const [isLoading, setIsLoading] = useState(true);

  const getYears = async () => {
    try {
      const years = await fetchData('years');
      setYears(years.data.reverse());
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    getYears();
  }, []);

  const getShows = async (year) => {
    try {
      const shows = await fetchData(`/years/${year}`);
      setShows(shows.data);
      console.log(shows.data)
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <ShowContext.Provider value={{ years, error, shows, getShows }}>
      {children}
    </ShowContext.Provider>
  );
};

export { ShowContextProvider, ShowContext };
