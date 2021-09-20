import React from 'react';
import './ErrorDisplay.css';
import underConstruction from '../../error.png';
import underConstructionParty from '../../error_party.png';
import { useTheme } from '../../contexts/ThemeContext';

const ErrorDisplay = ({ message }) => {
  const { isPartyMode } = useTheme();
  const errorImage = isPartyMode ? underConstructionParty : underConstruction;

  return (
    <div className='error-display'>
    </div>);
};

export default ErrorDisplay;
