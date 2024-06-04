import React from "react";
import { Link } from "react-router-dom";

function Total(props) {
  return (
    <div className="total">
      <h4>Total</h4>
      <Link to={"/cart"} state={props.c}>
        <button>
          <p>Add to cart</p>
          <p>₹{props.total}</p>
        </button>
      </Link>
    </div>
  );
}

export default Total;
