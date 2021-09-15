import { fetchData } from '../../apiCalls';
import React, { useContext, useEffect, useState } from 'react';


const Container = (props) => {
const [loading, setIsLoading] = useState(true);
const [shows, setShows] = useState([]);

 useEffect(() => {
  fetchData(`/years/${props.id}`).then(data => {
    setShows(data);
    setIsLoading(false);
  }).catch(err => console.log(err))
  }, [props.id])


  return (
    <p> I am a container!! </p>
  )
}

export default Container;