import React from "react";
import Header from "../components/Header";
import FoodDetails from "../components/FoodDetails";
import foodItems from "../foodItems";
import Ingredient from "../components/Ingredient";
import Steps from "../components/Steps";

const items = foodItems;

function FoodPage() {
    return <div>
        <Header />
        <div className="food-page">
            <FoodDetails 
            image={items[0].image} 
            name={items[0].name} 
            description={items[0].description} />
            <div className="lists">
            <div className="ingredient-list">
            <h2>Ingredients</h2>
            {items[0].ingredients.map((item,index) => <Ingredient key={index} item={item} />)}
            </div>
            <div className="step-list">
            <h2>Steps</h2>
            {items[0].steps.map((step,index) => <Steps key={index} index={index+1} step={step} />)}
            </div>
            </div>
        </div>
    </div>
}

export default FoodPage;