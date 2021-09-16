import React, { useContext } from 'react';
import { ShowContext } from '../../contexts/ShowContext';
import YearCard from '../year_card/YearCard';
import { Link } from 'react-router-dom';
import './YearsContainer.css';

const YearsContainer = () => {
  const { years } = useContext(ShowContext);
  console.log(years, 'inside container');

  const cards = years.map((year) => {
    return (
      <Link className="year-link" to={`/years/${year}`} key={year}>
        <YearCard year={year} />
      </Link>
    );
  });

  return <section className="years-container">{cards}</section>;
};

export default YearsContainer;

// const { years, setYears, getData } = useContext(ShowContext);

// getData([props.path], [props.setData]).catch((err) => console.log(err));

// const cards = [props.type].map((item) => {
//   <props.card key={item.id} item={item} />;
// });
// return <div>{cards}</div>;
