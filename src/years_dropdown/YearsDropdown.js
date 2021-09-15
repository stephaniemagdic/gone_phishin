import React from 'react';
import { ShowContext } from '../contexts/ShowContext';

const YearsDropdown = () => {
  return (
    <div>
      <select>{yearsOptions}</select>
    </div>
  );
};

export default YearsDropdown;
