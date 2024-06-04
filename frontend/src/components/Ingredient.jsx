import React, { useEffect, useState } from "react";

function Ingredient(props) {
  const [count, setCount] = useState(0);
  const [price, setPrice] = useState(0);
  const i = props.item
  function add() {
    setCount(Math.max(0, count + 1));
    props.sum(price * (count - (count - 1)));

    props.setC((prev) => (
      {
        ...prev,
        [i]: {"count": Math.max(0, count + 1), "price": price}
      }));
    // props.setC((prev) => {
    //   if (prev.i == 0) {
    //     const { i, ...rest } = prev;
    //     return rest;
    //   }
    // });
  }

  function remove() {
    setCount(Math.max(0, count - 1));
    count > 0 ? props.sub(price * (count - (count - 1))) : props.sub(0);
    props.setC((prev) => ({
      ...prev,
      [i]: {"count": Math.max(0, count - 1), "price": price}
    }));
    props.setC(curr => {
      const {[i]: _, ...rest} = curr;
      if(_["count"] === 0)
        return rest;
      else
        return curr;
    })
  }

  useEffect(() => {
    fetch(`http://localhost:8000/ingredients/${props.item}`, { method: "GET" })
      .then(response => response.json())
      .then(data => setPrice(data.ingredientPrice))
      .catch(err => console.log(err));
  });

  return (
    <div className="ingredients">
      <h4>{props.item}</h4>
      <h5>₹{price}</h5>
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
