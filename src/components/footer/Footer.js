import React from 'react';
import ReactAudioPlayer from 'react-audio-player';
import './Footer.css';
import { useContext } from 'react';
import { ShowContext } from '../../contexts/ShowContext';

export default function Footer() {
  const { currentTrack } = useContext(ShowContext);
  const { mp3, title, show_date, venue_name, venue_location } = currentTrack;

  return (
    <footer className="footer">
      <div className="track-info">
        <p>{title}</p>
      </div>
      <div className="venue-info">
        <p>{show_date}</p>
        <p>{venue_name}</p>
        <p>{venue_location}</p>
      </div>
      <ReactAudioPlayer src={mp3} autoPlay={true} controls={true} />
    </footer>
  );
}
