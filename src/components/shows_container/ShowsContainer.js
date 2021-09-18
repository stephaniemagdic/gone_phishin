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
