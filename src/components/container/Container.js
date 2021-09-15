import { fetchData } from '../../apiCalls';
import React, { useContext, useEffect } from 'react';


const Container = (props) => {


 useEffect(() => {
  fetchData(`/years/${props.id}`).then(data => console.log(data)).catch(err => console.log(err))
  }, [props.id])


  return (
    <p> I am a container!! </p>
  )
}

export default Container;