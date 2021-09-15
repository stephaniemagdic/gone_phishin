import { fetchData } from '../../apiCalls';
import React, { useEffect, useState } from 'react';
import Show from '../show_card/ShowCard'

const Container = (props) => {
  const [ isLoading, setIsLoading ] = useState(true);
  const [ shows, setShows ] = useState([]);

  //TO DO: includes conditional so that we can use this for our tracks and our years. 
  useEffect(() => {
    if (props.type === "shows") {
      fetchData(`/years/${props.id}`).then(data => {
        setShows(data.data);
        setIsLoading(false);
        console.log(shows)
        console.log(data)
      }).catch(err => console.log(err))
    }
    }, [props.id])

    const showCardComponents = shows.map(show => <Show show={show}/>)

  return (
    <div className="ShowContainer"> 
      {isLoading && <p>Loading...</p>}
      {!isLoading && showCardComponents}
    </div>
  )
}

export default Container;