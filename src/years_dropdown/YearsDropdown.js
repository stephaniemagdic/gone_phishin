import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ShowContext } from '../contexts/ShowContext';

const YearsDropdown = () => {
  const { years } = useContext(ShowContext);

  const yearsOptions = years.map((year) => {
    return (
      <option key={year} value={year}>
        {year}
      </option>
    );
  });
  return (
    <div>
      <select name="years" id="yearsSelect">
        <option value="">Years</option>
        {yearsOptions}
      </select>
    </div>
  );
};

export default YearsDropdown;
