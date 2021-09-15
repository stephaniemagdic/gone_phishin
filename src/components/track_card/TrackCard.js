import React from 'react';
import './TrackCard.css';

const TrackCard = ({ track }) => {
  const {
    id,
    mp3,
    show_date,
    show_id,
    title,
    venue_location,
    venue_name,
    waveform_image,
  } = track;
  console.log(id, 'hello');

  return (
    <article className="track-card">
      <p>{title}</p>
      <iframe src={mp3}></iframe>
    </article>
  );
};

export default TrackCard;
