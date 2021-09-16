import React from 'react';
import './YearCard.css';

const YearCard = ({ year }) => {
  return (
    <div className="year-card">
      <h3 className="year-text">{year}</h3>
    </div>
  );
};

export default YearCard;
