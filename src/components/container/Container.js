import { fetchData } from '../../apiCalls';
import React, { useEffect, useState } from 'react';
import Show from '../show_card/ShowCard'
import './Container.css';
import TrackCard from '../track_card/TrackCard';

const Container = (props) => {
  const [ isLoading, setIsLoading ] = useState(true);
  const [ shows, setShows ] = useState([]);
  const [ tracks, setTracks ] = useState([])

  //TO DO: includes conditional so that we can use this for our tracks and our years. 
  useEffect(() => {
    if (props.type === "shows") {
      fetchData(`/years/${props.id}`).then(data => {
        setShows(data.data);
        setIsLoading(false);
      }).catch(err => console.log(err))
      //TO DO: when error component is made, render error component.
    }
    if (props.type === "tracks") {
      fetchData(`/shows/${props.id}`).then(data => {
        setTracks(data.data.tracks);
        setIsLoading(false);
        console.log(data.data)
      }).catch(err => console.log(err))
    }
    }, [])

     {/* at some point we should make this conditional along with line 28 depending on what type is passed. */}
    const showCardComponents = shows.map(show => <Show show={show}/>)
    const trackCardComponents = tracks.map(track => <TrackCard track={track} />)
    
  return (
      <div className={props.type}> 
      {isLoading && <p>Loading...</p>}
      {!isLoading && showCardComponents}
      {!isLoading && trackCardComponents}
      </div>
  )
}

export default Container;