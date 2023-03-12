import React from "react";

function FoodDetails(props) {
  return (
    <div className="food-details">
      <div className="food-image">
        <img src={props.image} alt="food-img" />
      </div>
      <div className="food-info">
        <h1>{props.name}</h1>
        <p>{props.description}</p>
      </div>
    </div>
  );
}

export default FoodDetails;
