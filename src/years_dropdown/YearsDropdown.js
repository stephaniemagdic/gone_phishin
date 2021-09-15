import React, { useContext } from 'react';
import { ShowContext } from '../contexts/ShowContext';
import Show from '../show_card/ShowCard';

const YearsDropdown = () => {
  const { years, shows, getShows } = useContext(ShowContext);

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
