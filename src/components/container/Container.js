import { fetchData } from '../../apiCalls';
import React, { useContext, useEffect } from 'react';


const Container = () => {

 useEffect(() => {
  fetchData("/years/2021").then(data => console.log(data)).catch(err => console.log(err))
  }, [])


  return (
    <p> I am a container!! </p>
  )
}

export default Container;