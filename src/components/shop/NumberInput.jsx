import { useState } from "react";
import "../../styles/shop/NumberInput.css";

export const NumberInput = () => {
  const [quantity, setQuantity] = useState(0);

  const increment = () => {
    setQuantity((current) => current + 1);
  };

  const decrement = () => {
    if (quantity == 0) {
      return;
    }
    setQuantity((current) => current - 1);
  };

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
