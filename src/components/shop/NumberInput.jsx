import { useState } from "react";
import { AmountInput } from "./AmountInput";
import { Warning } from "./Warning";
import "../../styles/shop/NumberInput.css";

export const NumberInput = ({
  increment,
  decrement,
  quantity,
  changeQuantity,
}) => {
  const [editable, setEditable] = useState(false);
  const [showWarning, setShowWarning] = useState(false);

  return (
    <div className="number-input">
      {editable ? (
        <AmountInput
          warning={setShowWarning}
          editable={setEditable}
          changeQuantity={changeQuantity}
        />
      ) : (
        <button
          className="quantity-button"
          onClick={(e) => {
            if (window.innerWidth > 600) {
              setEditable(true);
            } else {
              changeQuantity(+e.target.textContent + 1);
            }
          }}
        >
          {quantity}
        </button>
      )}
      <button name="increase" className="increase" onClick={increment}>
        +
      </button>
      <button name="decrease" className="decrease" onClick={decrement}>
        -
      </button>
      {showWarning && <Warning />}
    </div>
  );
};
