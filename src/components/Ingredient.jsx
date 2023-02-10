import React from "react";

function Ingredient(props) {
    return <div className="ingredients">
        <h4>{props.item}<button>+</button></h4>
    </div>
}

export default Ingredient;