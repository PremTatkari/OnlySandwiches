import React, { useEffect, useState } from "react";
import Food from "./Food";
import Header from "./Header";
import Footer from "./Footer";

function App() {
  const [items, setItems] = useState([]);
  
  useEffect(() => {
    fetch("http://localhost:8000/items/", {method: "GET"})
        .then((response) => response.json())
        .then((data) => {
          setItems(data);
        })
        .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <Header />
      <div className="food-container">
        {items.map((item, index) => (
          <Food
            key={index}
            image={item.imageUrl}
            name={item.itemName}
            description={item.description}
            extra={item.tags}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default App;
