import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import FoodDetails from "../components/FoodDetails";
import Ingredient from "../components/Ingredient";
import Steps from "../components/Steps";
import Total from "../components/Total";
import Footer from "../components/Footer";
import { Link, useNavigate, useParams } from "react-router-dom";


function FoodPage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [total, setTotal] = useState(0);
  const [item, setItem] = useState(null);
  const [c, setC] = useState();
  function sum(t) {
    setTotal(total + t);
  }

  function sub(t) {
    setTotal(Math.max(0, total - t));
  }

  useEffect(() => {
    fetch(`http://localhost:8000/items/${id}`, { method: "GET" })
      .then((response) => response.json())
      .then((data) => {
        setItem(data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  const handleDelete = () => {
    fetch(`http://localhost:8000/items/deleteItem/${id}`, { method: "DELETE" })
      .then(response => response.json)
      .then(status => console.log(status))
      .then(() => navigate("/"))
      .catch(err => console.log(err));
  }

  if (item)
    return (
      <div>
        <Header />
        <div className="food-page">
          <Link to={`/updateItem/${id}`}>
            <button className="btn" type="button">Update item</button>
          </Link>
          <button className="btn" onClick={handleDelete}>Delete item</button>
          <FoodDetails
            image={item.imageUrl}
            name={item.itemName}
            description={item.description}
          />
          <div className="lists">
            <div className="ingredient-list">
              <h2>Ingredients</h2>
              <div className="ingredient-header">
                <h4>Ingredient</h4>
                <h4>Price</h4>
                <h4>Quantity</h4>
              </div>
              {item.ingredients.map((item, index) => (
                <Ingredient key={index} item={item} sum={sum} sub={sub} setC={setC} />
              ))}
              <Total total={total} c={c} />
            </div>
            <div className="step-list">
              <h2>Steps</h2>
              {item.steps.map((step, index) => (
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
