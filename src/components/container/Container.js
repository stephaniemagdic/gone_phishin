import { fetchData } from '../../apiCalls';
import React, { useContext } from 'react';


const Container = () => {


 const fetch = () => {fetchData("/years/2021").then(data => console.log(data)).catch(err => console.log(err))}
 fetch();

  return (
    <p> I am a container!! </p>
  )
}

export default Container;