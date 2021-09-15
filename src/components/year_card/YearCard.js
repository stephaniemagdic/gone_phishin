import React from 'react';
import './YearCard.css';

const YearCard = ({ year }) => {
  return (
    <div className="year-card" id={year}>
      <h3 className="year-text">{year}</h3>
    </div>
  );
};

export default YearCard;
