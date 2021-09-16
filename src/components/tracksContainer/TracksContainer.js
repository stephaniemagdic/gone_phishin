import React, { useState, useEffect, useContext } from 'react';
import { ShowContext } from '../../contexts/ShowContext';
import TrackCard from '../track_card/TrackCard';
import './TracksContainer.css';

const TracksContainer = ({ id }) => {
  const { fetchData } = useContext(ShowContext);
  const [tracks, setTracks] = useState([]);
  const [show, setShow] = useState({});
  const [error, setError] = useState('');

  const getShow = async (id) => {
    try {
      const show = await fetchData(`shows/${id}`);
      setTracks(show.data.tracks);
      setShow(show.data);
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    getShow(id);
  }, []);

  const filterBySet = (setNumber) => {
    return tracks
      .filter((track) => track.set_name === setNumber)
      .map((track) => <TrackCard key={track.id} id={track.id} track={track} />);
  };

  return (
    <section className="tracks-container">
      <div className="show-title">
        {show.date && show.venue_name && show.venue.location && (
          <h3>
            {show.date} // {show.venue_name} // {show.venue.location}
          </h3>
        )}
      </div>
      <h4>-- SET I --</h4>
      <div className="set-1">{filterBySet('Set 1')}</div>
      <h4>-- SET II --</h4>
      <div className="set-2">{filterBySet('Set 2')}</div>
      {/* need to conditionally render set 3 */}
      {filterBySet('Set 3') !== 'undefined' && (
        <div className="set-3">
          <h4>-- SET III --</h4>
          <div className="set-3">{filterBySet('Set 3')}</div>
        </div>
      )}
      <h4>-- ENCORE --</h4>
      <div className="encore">{filterBySet('Encore')}</div>
    </section>
  );
};

export default TracksContainer;