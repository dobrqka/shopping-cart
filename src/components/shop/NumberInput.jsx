import { useState } from "react";
import "../../styles/shop/NumberInput.css";

export const NumberInput = ({ increment, decrement, quantity }) => {
  return (
    <div className="number-input">
      <p>{quantity}</p>
      <button name="increase" onClick={increment}>
        +
      </button>
      <button name="decrease" onClick={decrement}>
        -
      </button>
    </div>
  );
};
