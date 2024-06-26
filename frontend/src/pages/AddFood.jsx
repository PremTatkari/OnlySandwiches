import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { useNavigate, useParams } from "react-router-dom";

const AddFood = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [form, setForm] = useState({
    imageUrl: "",
    itemName: "",
    description: "",
  });

  const [allIngredients, setAllIngredients] = useState([]);

  const [tags, setTags] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const [steps, setSteps] = useState([]);
  const [status, setStatus] = useState("");

  useEffect(() => {
    fetch("http://localhost:8000/ingredients", { method: "GET" })
      .then(response => response.json())
      .then(data => setAllIngredients(data))
      .catch(err => console.log(err));
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleAdd = (sectionName, sectionState, setSectionState) => {
    setSectionState((prevSectionState) => [
      ...prevSectionState,
      form[sectionName],
    ]);
    setForm((prevForm) => ({
      ...prevForm,
      [sectionName]: "",
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // You can do something with the form data, such as sending it to an API
    console.log("Form data:", { ...form, tags, ingredients, steps });
    const data = { ...form, tags, ingredients, steps }
    console.log(data);
    if (!id)
      fetch("http://localhost:8000/items/addItem", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json"
        }
      })
      .then(response => response.json())
      .then(result => setStatus(result))
      .then(() => navigate("/"))
      .catch(err => console.log(err))
    else
      fetch(`http://localhost:8000/items/updateItem/${id}`, {
        method: "PUT",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json"
        }
      })
        .then(response => response.json())
        .then(result => setStatus(result))
        .then(() => navigate("/"))
        .catch(err => console.log(err))
  };

  return (
    <div>
      <Header />
      <div className="container">
        <form onSubmit={handleSubmit} className="form">
          <label>
            Image URL:
            <input
              type="text"
              name="imageUrl"
              value={form.imageUrl}
              onChange={handleChange}
            />
          </label>

          <label>
            Item Names:
            <input
              type="text"
              name="itemName"
              value={form.itemName}
              onChange={handleChange}
            />
          </label>

          <label>
            Description:
            <textarea
              name="description"
              value={form.description}
              onChange={handleChange}
            />
          </label>

          <label>
            Tags:
            <input
              type="text"
              name="tags"
              value={form.tags}
              onChange={handleChange}
            />
            <div>
              {tags.map((tag, index) => (
                <span key={index}>{tag} </span>
              ))}
            </div>
            <button
              type="button"
              onClick={() => handleAdd("tags", tags, setTags)}
              className={!form.tags ? "hide-btn" : ""}
            >
              Add Tag
            </button>
          </label>

          <label>
            Ingredients:
            <select id="ingredients" name="ingredients" value={form.ingredients} onChange={handleChange}>
              <option value="" selected disabled>Select ingredient</option>
              {allIngredients.map((ingredient, index) => (
                <option key={index} value={ingredient.ingredientName} >
                  {ingredient.ingredientName}
                </option>
              ))}
            </select>
            <div>
              {ingredients.map((ingredient, index) => (
                <span key={index}>{ingredient} </span>
              ))}
            </div>

            <button
              type="button"
              onClick={() =>
                !ingredients.includes(form.ingredients) && handleAdd("ingredients", ingredients, setIngredients)
              }
              className={!form.ingredients ? "hide-btn" : ""}
            >
              Add Ingredient
            </button>

          </label>

          <label>
            Steps:
            <input
              type="text"
              name="steps"
              value={form.steps}
              onChange={handleChange}
            />
            <div>
              {steps.map((step, index) => (
                <span key={index}>{step} </span>
              ))}
            </div>
            <button
              type="button"
              onClick={() => handleAdd("steps", steps, setSteps)}
              className={!form.steps ? "hide-btn" : ""}
            >
              Add Step
            </button>
          </label>
          <label>
            {status?.message}
            <button type="submit" className="btn">
              Submit
            </button>
          </label>
        </form>
      </div>
    </div>
  );
};

export default AddFood;
