import React, { useEffect, useContext, useCallback } from 'react';
import Show from '../show_card/ShowCard';
import { ShowContext } from '../../contexts/ShowContext';
import phishLogoLoading from '../../phishLogoLoading.png';
import './ShowsContainer.css';

const ShowsContainer = ({ year }) => {
  const { shows, getShows } = useContext(ShowContext);
  // const [isLoading, setIsLoading] = useState(true);

  // const memo = useCallback

  useEffect(() => {
    getShows(year);
  }, [getShows, year]);

  // useEffect(() => {
  //     setIsLoading(false);
  // }, [shows]);

  const showCardComponents = shows.map((show) => (
    <Show key={show.id} show={show} />
  ));

  return (
    <div className="show">
      {/* To Do: figure out IsLoading state. Is it necessary to even use this. And also I can't figure out how to do it correctly ha!*/}
      {/* {isLoading && <img src={phishLogoLoading}></img>}
      {!isLoading && showCardComponents} */}
      {shows.length < 1 && (
        <img
          className="phish-logo-loading"
          alt="phish-logo-loading"
          src={phishLogoLoading}
        ></img>
      )}
      {shows.length > 0 && showCardComponents}
    </div>
  );
};

export default ShowsContainer;
