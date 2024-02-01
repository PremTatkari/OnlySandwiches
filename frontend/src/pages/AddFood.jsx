import React, { useState } from "react";
import Header from "../components/Header";

const AddFood = () => {
  const [form, setForm] = useState({
    imageUrl: "",
    itemName: "",
    description: "",
  });

  const [tags, setTags] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const [steps, setSteps] = useState([]);
  const [status, setStatus] = useState("");

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
    const response = await fetch("http://localhost:8000/items/addItem", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    });
    const result = await response.json();
    setStatus(result);
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
            Item Name:
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
            >
              Add Tag
            </button>
          </label>

          <label>
            Ingredients:
            <input
              type="text"
              name="ingredients"
              value={form.ingredients}
              onChange={handleChange}
            />
            <div>
              {ingredients.map((ingredient, index) => (
                <span key={index}>{ingredient} </span>
              ))}
            </div>
            <button
              type="button"
              onClick={() =>
                handleAdd("ingredients", ingredients, setIngredients)
              }
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
