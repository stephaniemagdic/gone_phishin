import { Link } from 'react-router-dom';
import './ShowCard.css';

const ShowCard = ({ show }) => {
  const { date, venue_name, id } = show;
  return (
    <Link to={`/shows/${id}`} className="link">
      <article className="show-card">
        <p> {date} </p>
        <p> {venue_name} </p>
      </article>
    </Link>
  );
};

export default ShowCard;
