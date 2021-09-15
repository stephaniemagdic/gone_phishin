import React from 'react';
import './YearCard.css';

const YearCard = ({ item }) => {
  return (
    <div className="year-card">
      <h3 className="year-text">{item}</h3>
    </div>
  );
};

export default YearCard;
