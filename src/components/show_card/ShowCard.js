import { Link } from 'react-router-dom';
import './ShowCard.css';
import { useTheme } from '../../contexts/ThemeContext';

const ShowCard = ({ show }) => {
  const { isPartyMode, partyMode, basic } = useTheme();
  const theme = isPartyMode ? partyMode : basic;
  const { date, venue_name, id } = show;
  return (
    <Link to={`/shows/${id}`} className="link">
      <article
        style={{
          background: theme.primaryBG,
          boxShadow: theme.shadow,
          borderRadius: theme.radius,
        }}
        className="card"
      >
        <p> {date} </p>
        <p> {venue_name} </p>
      </article>
    </Link>
  );
};

export default ShowCard;
