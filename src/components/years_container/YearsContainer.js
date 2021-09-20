import React, { useContext } from 'react';
import { ShowContext } from '../../contexts/ShowContext';
import YearCard from '../year_card/YearCard';
import { Link } from 'react-router-dom';
import ErrorDisplay from '../error_display/ErrorDisplay';
import './YearsContainer.css';

const YearsContainer = () => {
  const { years, error } = useContext(ShowContext);

  const cards = years.map((year) => {
    return (
      <Link className="year-link" to={`/years/${year}`} key={year}>
        <YearCard year={year} />
      </Link>
    );
  });

  return (
    <section className="years-container">
      {error && <ErrorDisplay message={error} />}
      {!error && cards}
    </section>
  );
};

export default YearsContainer;
