import React from 'react';
import ReactAudioPlayer from 'react-audio-player';
import { useContext } from 'react';
import { ShowContext } from '../../contexts/ShowContext';

export default function Footer() {
  const { currentTrack } = useContext(ShowContext);
  const { mp3, title, date, venue } = currentTrack;

  return (
    <footer className="footer">
      <ReactAudioPlayer src={mp3} autoPlay={true} controls={true} />
    </footer>
  );
}
