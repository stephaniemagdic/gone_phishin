import { Link } from 'react-router-dom';
import './ShowCard.css'

const ShowCard = ({show}) => {
  const {date, venue_name, id} = show;
  return (
    <Link to={`/shows/${id}`} className="link">
      <article className="ShowCard">
       <p> {date} </p>
       <p> {venue_name} </p>
      </article>
    </Link>
    )
}

export default ShowCard;


//EXAMPLE OF ONE SHOW OBJECT 
// date: "2019-02-21"
// duration: 9658254
// id: 1987
// incomplete: false
// likes_count: 5
// remastered: false
// sbd: false
// tags: []
// taper_notes: "Phish\nBarcelo Maya Grand Resort\nRiviera Maya, Quintana Roo, Mexico\n02/21/2019\n\nSource 1: AKG CK-61 ULS (DIN) > Nbob actives > Nbox Platinum > Tascam DR-70D @ 24bit/96kHz\nSource 2: AKG CK-63 ULS (DINa) > Nbob actives > Nbox Platinum > Tascam DR-70D @ 24bit/96kHz\nLocation: OTS/DFC, clamped to SBD fence, 8ft up\nTransfer: SD > WaveLab 6 (4 Channel Mix, Gain, Fades, Convert to 16bit/48kHz with Apogee UV22HR Dither) > CDWave (Tracking) > Traders Little Helper (FLAC6)\nTagging: FLACs Tagged With Mp3tag v2.89\n\nRecorded by Ryan Stearns\n\n\nSet 1:\n\n01 Intro\n02 Spock's Brain\n03 Twist\n04 Free\n05 Who Loves the Sun\n06 Everything's Right\n07 We Are Come to Outlive Our Brains\n08 Rise/Come Together\n09 Funky Bitch\n10 Sand\n\nSet 2: \n\n01 Intro\n02 Soul Planet > \n03 Spanish Moon > \n04 I Always Wanted It This Way > \n05 Death Don't Hurt Very Long\n06 2001 > \n07 Bathtub Gin\n08 The Squirming Coil\nEncore:\n09 Waste\n10 Bold As Love"
// tour_id: 106
// tracks: (18) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
// updated_at: "2019-02-28T02:58:30Z"
// venue: {id: 817, slug: 'barcelo-maya-beach', name: 'Barcelo Maya Beach', other_names: Array(0), latitude: 20.631389, …}
// venue_name: "Barcelo Maya Beach"
// [[Prototype]]: Object
