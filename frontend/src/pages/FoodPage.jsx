import React, { useState } from "react";
import Header from "../components/Header";
import FoodDetails from "../components/FoodDetails";
import foodItems from "../foodItems";
import Ingredient from "../components/Ingredient";
import Steps from "../components/Steps";
import Total from "../components/Total";
import Footer from "../components/Footer";

const items = foodItems;

function FoodPage() {
  const [total, setTotal] = useState(0);
  function sum(t) {
    setTotal(total + t);
  }

  function sub(t) {
    setTotal(Math.max(0, total - t));
  }

  return (
    <div>
      <Header />
      <div className="food-page">
        <FoodDetails
          image={items[0].image}
          name={items[0].name}
          description={items[0].description}
        />
        <div className="lists">
          <div className="ingredient-list">
            <h2>Ingredients</h2>
            <div className="ingredient-header">
              <h4>Ingredient</h4>
              <h4>Price</h4>
              <h4>Quantity</h4>
            </div>
            {items[0].ingredients.map((item, index) => (
              <Ingredient key={index} item={item} sum={sum} sub={sub} />
            ))}
            <Total total={total} />
          </div>
          <div className="step-list">
            <h2>Steps</h2>
            {items[0].steps.map((step, index) => (
              <Steps key={index} index={index + 1} step={step} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default FoodPage;
