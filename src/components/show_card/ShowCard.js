import { Link } from 'react-router-dom';
import './ShowCard.css';
import { useTheme } from '../../contexts/ThemeContext';


const ShowCard = ({ show }) => {
  console.log("I am rendering a card with", show.id)
  const { isPartyMode, partyMode, basic } = useTheme();
  const theme = isPartyMode ? partyMode : basic;
  const { date, venue_name, venue, id } = show;
  return (
    <Link to={`/shows/${id}`} className="link">
      <article
        style={{
          background: theme.primaryBG,
          boxShadow: theme.shadow,
          borderRadius: theme.radius,
        }}
         className="show-card" >
        <p className="date"> {date} </p>
        <p className="venue"> {venue_name} </p>
        <p className="location"> {venue.location} </p>
      </article>
    </Link>
  );
};

export default ShowCard;
