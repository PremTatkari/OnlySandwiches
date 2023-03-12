import React, { useState } from "react";

function Ingredient(props) {
  const [count, setCount] = useState(0);

  function add() {
    setCount(Math.max(0,count + 1));
  }

  function remove() {
    setCount(Math.max(0,count - 1));
  }

  return (
    <div>
      <h4 className="ingredients">
        {props.item}
        <button className="remove" onClick={remove}>-</button>
        <p style={count>9?{paddingRight:"2.6rem"}: {paddingRight:"3rem"}}>{count}</p>
        <button className="add" onClick={add}>+</button>
      </h4>
    </div>
  );
}

export default Ingredient;
