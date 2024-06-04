import React from "react";
import Header from "../components/Header";
import { useLocation } from "react-router-dom";

function Cart() {

  const { state } = useLocation();
  let total = 0;
  if (state !== null)
  Object.keys(state).forEach(key => {
    total += state[key]["price"] * state[key]["count"];
  });

  return (
    <div>
      <Header />
      <div className="cart">
        <h1>Cart</h1>
        <table>
          <thead>
            <tr>
              <th>Ingredient</th>
              <th>Quantity</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {(state === null && <tr><td colSpan={3}>The cart is empty</td></tr>) ||
              Object.keys(state).map((key, index) => (<tr key={index}><td>
                {key}
              </td>
                <td>
                  {state[key]["count"]}
                </td>
                <td>
                  ₹{state[key]["price"] * state[key]["count"]}
                </td>
              </tr>))
            } 
            {state !== null &&<tr>
              <td></td>
              <td></td>
              <td><strong>Total: ₹{total}</strong></td>
            </tr>
            }
          </tbody>
        </table>
        {state !== null && <button className="btn">Buy</button>}
      </div>
    </div>
  );
}

export default Cart;