import React from "react";

const Tour = ({ tour, deleteTour }) => {
  const [isResdMore, setIsReadMore] = React.useState(false);
  return (
    <article className="single-tour">
      <img src={tour.image} alt={tour.name} />
      <footer>
        <div className="tour-info">
          <h4>{tour.name}</h4>
          <h4 className="tour-price">{tour.price}</h4>
        </div>
        <p>
          {isResdMore ? tour.info : `${tour.info.substring(0, 200)}...`}
          <button onClick={() => setIsReadMore(!isResdMore)}>
            {isResdMore ? "show less" : "read more"}
          </button>
        </p>
        <button className="delete-btn" onClick={() => deleteTour(tour.id)}>
          not interested
        </button>
      </footer>
    </article>
  );
};

export default Tour;
