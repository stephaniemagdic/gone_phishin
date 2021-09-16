import React, { useState, createContext, useEffect } from 'react';
import { fetchData } from '../apiCalls';
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

const ShowContext = createContext();

const ShowContextProvider = ({ children }) => {
  const [years, setYears] = useState([]);
  const [error, setError] = useState('');
  // const [shows, setShows] = useState([]);
  const [currentTrack, setCurrentTrack] = useState({});
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

  return (
    <ShowContext.Provider
      value={{ years, error, fetchData, getCurrentTrack, currentTrack }}
    >
      {children}
    </ShowContext.Provider>
  );
};

export { ShowContextProvider, ShowContext };
