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
        <button className="quantity-button" onClick={() => setEditable(true)}>
          {quantity}
        </button>
      )}
      <button name="increase" onClick={increment}>
        +
      </button>
      <button name="decrease" onClick={decrement}>
        -
      </button>
      {showWarning && <Warning />}
    </div>
  );
};
