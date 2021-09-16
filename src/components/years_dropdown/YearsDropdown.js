import React, { useContext } from 'react';
import { ShowContext } from '../../contexts/ShowContext';

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
      <select
        name="years"
        id="yearsSelect"
        onChange={(e) => {
          // <Redirect to='/years/'/>
          getShows(e.target.value);
        }}
      >
        <option value="">Years</option>
        {yearsOptions}
      </select>
    </div>
  );
};

export default YearsDropdown;
