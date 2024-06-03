import React from "react";
import { Link } from "react-router-dom";
import Tags from "./Tags";

function Food(props) {
  return (
    <Link to={"/foodPage/" + props.itemId}>
      <div className="food-item">
        <img src={props.image} alt="food-img" />
        <h4>{props.name}</h4>
        <p>{props.description.length > 100 ? props.description.substring(0,100) + "...": props.description}</p>
        <div className="tag-container">
          {props.extra.map((ex, index) => (
            <Tags key={index} tag={ex} />
          ))}
        </div>
      </div>
    </Link>
  );
}

export default Food;
