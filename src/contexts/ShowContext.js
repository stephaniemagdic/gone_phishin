import React, { useState, createContext, useEffect } from 'react';
import { fetchData } from '../apiCalls';
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

const ShowContext = createContext();

const ShowContextProvider = ({ children }) => {
  const [years, setYears] = useState([]);
  const [error, setError] = useState('');
  const [currentTrack, setCurrentTrack] = useState({});
  const [shows, setShows] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);

  const getYears = async () => {
    try {
      const years = await fetchData('years');
      setYears(years.data.reverse());
    } catch (error) {
      setError(error.message);
    }
  };

  const getCurrentTrack = async (id) => {
    try {
      const track = await fetchData(`tracks/${id}`);
      setCurrentTrack(track.data);
      console.log(track.data);
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
      console.log(shows.data);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <ShowContext.Provider
      value={{
        years,
        error,
        fetchData,
        getCurrentTrack,
        currentTrack,
        shows,
        getShows,
      }}
    >
      {children}
    </ShowContext.Provider>
  );
};

export { ShowContextProvider, ShowContext };
