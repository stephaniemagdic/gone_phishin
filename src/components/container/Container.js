import { fetchData } from '../../apiCalls';
import React, { useEffect, useState } from 'react';
import Show from '../show_card/ShowCard';
import './Container.css';

const Container = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [shows, setShows] = useState([]);

  //TO DO: includes conditional so that we can use this for our tracks and our years.
  useEffect(() => {
    if (props.type === 'shows') {
      fetchData(`/years/${props.id}`)
        .then((data) => {
          setShows(data.data);
          setIsLoading(false);
        })
        .catch((err) => console.log(err));
      //TO DO: when error component is made, render error component.
    }
  }, [props.id]);

  {
    /* at some point we should make this conditional along with line 28 depending on what type is passed. */
  }
  const showCardComponents = shows.map((show) => <Show show={show} />);
  return (
    <div className={props.type}>
      {isLoading && <p>Loading...</p>}
      {!isLoading && showCardComponents}
    </div>
  );
};

export default Container;
