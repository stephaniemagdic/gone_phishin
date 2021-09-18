import React, { useEffect, useContext, useCallback, useState } from 'react';
import Show from '../show_card/ShowCard';
import { ShowContext } from '../../contexts/ShowContext';
import phishLogoLoading from '../../phishLogoLoading.png';
import './ShowsContainer.css';

const ShowsContainer = ({ year }) => {
  const { shows, getShows } = useContext(ShowContext);
  const [isLoading, setIsLoading] = useState(true);

  const memo = useCallback(() => {
    const fetchShows = async () => {
      await getShows(year);
      setIsLoading(false)
    }
    fetchShows()
  //DO NOT INCLUDE GET SHOWS AS DEPENDENCY - WILL TRIGGER INFINITE RERENDER LOOP
  //I am not sure I understand useCallback.
  //It seems like this would be helpful if this had a parent component constantly rerendering this compnent?
  //we aren't rerending many child components or are we with mapping through all showCardComponents?
  //but we don't have anything that would trigger a rerender of this page specfically on this page so it doesn't really apply because it will never be rerendering.
  }, [year])

  useEffect(() => {
    memo()
  }, [memo]);

  const showCardComponents = shows.map((show) => (
    <Show key={show.id} show={show} />
  ));

  return (
    <div className="show"> 
      {isLoading && (
        <img
          className="phish-logo-loading"
          alt="phish-logo-loading"
          src={phishLogoLoading}
        ></img>
      )}
      {!isLoading && showCardComponents}
    </div>
  );
};

export default ShowsContainer;
