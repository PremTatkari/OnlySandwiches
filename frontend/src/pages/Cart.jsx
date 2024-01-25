import React from "react";
import Header from "../components/Header";

function Cart() {

  return (
    <div>
      <Header />
      <div className="cart">
        <h1>Cart</h1>
        <table>
          <tr>
            <th>Ingredient</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
          <tr>
            <td colSpan={3} style={{ padding: "8rem" }}>
              The cart is empty
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default Cart;