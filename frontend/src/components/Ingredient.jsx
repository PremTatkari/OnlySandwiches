import React, { useState } from "react";

function Ingredient(props) {
  const [count, setCount] = useState(0);

  function add() {
    setCount(Math.max(0, count + 1));
    props.sum(5*(count - (count - 1)));
  }

  function remove() {
    setCount(Math.max(0, count - 1));
    count > 0 ? props.sub(5*(count - (count - 1))) : props.sub(0);
  }

  return (
    <div className="ingredients">
      <h4>{props.item}</h4>
      <h5>₹5</h5>
      <button className="remove" onClick={remove}>
        -
      </button>
      <p
        style={
          count > 9 ? { paddingRight: "2.6rem" } : { paddingRight: "3rem" }
        }
      >
        {count}
      </p>
      <button className="add" onClick={add}>
        +
      </button>
    </div>
  );
}

export default Ingredient;
