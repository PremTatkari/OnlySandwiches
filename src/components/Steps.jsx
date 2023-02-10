import React from "react";

function Steps(props) {
    return <div className="steps">
            <li>{props.index}. {props.step}</li>
    </div>
}

export default Steps;