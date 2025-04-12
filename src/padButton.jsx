import React from "react";

function padButton(props) {
  // Create state controlling whether
  // this box is "on" or "off". Use the incoming
  //`props.on` to determine the initial state.

  return (
    <div>
      <button
        style={{ backgroundColor: props.color }}
        className={props.on ? "on" : undefined}
        onClick={() => props.handleClick(props.id)}
      ></button>
    </div>
  );
}

export default padButton;
