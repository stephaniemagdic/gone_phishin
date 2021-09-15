import React, { useState, useEffect, useContext } from 'react';
import { ShowContext } from '../../contexts/ShowContext';

import './TracksContainer.css';

const TracksContainer = ({ id }) => {
  const { fetchData } = useContext(ShowContext);
  const [tracks, setTracks] = useState([]);
  const [error, setError] = useState('');

  const getTracks = async (id) => {
    try {
      const showTracks = await fetchData(`shows/${id}`);
      setTracks(showTracks.data.tracks);
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    getTracks(id);
  }, []);

  const trackCards = tracks.map((track) => <TrackCard track={track} />);

  return <div>{trackCards}</div>;
};

export default TracksContainer;
