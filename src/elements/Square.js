import React from "react";

export function Square(props) {
  return (
    <button
      className={
        "square" + " " + (props.value === "X" ? "square-green" : "square-red")
      }
      onClick={props.onClick}
    >
      {props.value}
    </button>
  );
}
