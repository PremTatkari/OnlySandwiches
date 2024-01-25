import React from "react";

function Steps(props) {
  return (
    <div className="steps">
      <tr>
        <td className="stepNumber">{props.index}</td> 
        <td>{props.step}</td>
      </tr>
    </div>
  );
}

export default Steps;
