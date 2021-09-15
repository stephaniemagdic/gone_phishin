import React, { useEffect, useContext } from 'react';
import Show from '../show_card/ShowCard';
import { ShowContext } from '../../contexts/ShowContext';
import './ShowsContainer.css';

const ShowsContainer = ({ id }) => {
  const { shows, getShows } = useContext(ShowContext);
  // const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getShows(id);
  }, [id]);

  const showCardComponents = shows.map((show) => <Show show={show} />);

  return (
    <div className="show">
      {/* {isLoading && <p>Loading...</p>} */}
      {/* {!isLoading && showCardComponents} */}
      {showCardComponents}
    </div>
  );
};

export default ShowsContainer;
