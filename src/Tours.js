import React from 'react';
import Tour from './Tour';
const Tours = ({data, deleteTour}) => {
  
  return (
  <section>
    <div className='title'>
      <h2>Our tours</h2>
      <div className='underline'/>
    </div>
    <div>
    {data.map((tour) => {
      return <Tour tour={tour} deleteTour={deleteTour} key={tour.id}/>
    })}
    </div>
  </section>)
};

export default Tours;
