import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { ShowContext } from '../../contexts/ShowContext';

const YearsDropdown = () => {
  // const { years, shows, getShows } = useContext(ShowContext);
  const { years } = useContext(ShowContext);

  const yearsOptions = years.map((year) => {
    return (
      <option key={year} value={year}>
        {year}
      </option>
    );
  });

 const redirect = (year) => {
   const url = `/years/${year}`;
   window.location.assign(url); 
 }

  return (
    <div>
      <select
        name="years"
        id="yearsSelect"
        onChange={(e) => 
          redirect(e.target.value)
          // getShows(e.target.value);
        }
      >
        <option value="">Years</option>
        {yearsOptions}
      </select>
    </div>
  );
};

export default YearsDropdown;
