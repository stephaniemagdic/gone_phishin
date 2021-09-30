import { Link } from 'react-router-dom';
import './ShowCard.css';
import { useTheme } from '../../contexts/ThemeContext';
import dayjs from 'dayjs';

const ShowCard = ({ show }) => {
  const { isPartyMode, partyMode, basic } = useTheme();
  const theme = isPartyMode ? partyMode : basic;
  const { date, venue_name, venue, id } = show;
  return (
    <Link to={`/gone_phishin//shows/${id}`} className="show-card-link">
      <article
        style={{
          background: theme.primaryBG,
          boxShadow: theme.shadow,
          borderRadius: theme.radius,
        }}
        className="card"
      >
        <p className="date" style={{ color: theme.primaryText }}>
          {' '}
          {dayjs(date).format('MMM D, YYYY')}{' '}
        </p>
        <p className="venue" style={{ color: theme.primaryText }}>
          {' '}
          {venue_name}{' '}
        </p>
        <p className="location" style={{ color: theme.primaryText }}>
          {' '}
          {venue.location}{' '}
        </p>
      </article>
    </Link>
  );
};

export default ShowCard;
