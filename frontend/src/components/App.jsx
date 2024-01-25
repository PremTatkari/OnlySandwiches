import React from "react";
import Food from "./Food";
import Header from "./Header";
import foodItems from "../foodItems";
import Footer from "./Footer";

const items = foodItems;

function App() {
  return (
    <div>
      <Header />
      <div className="food-container">
        {items.map((item, index) => (
          <Food
            key={index}
            image={item.image}
            name={item.name}
            description={item.description}
            extra={item.extra}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default App;
