import { useState } from "react";

export const AmountInput = ({ warning, editable, changeQuantity }) => {
  const [value, setValue] = useState("");

  const saveOnBlur = () => {
    if (isNaN(value) || value < 1 || value > 10) {
      warning(true);
      return;
    }
    warning(false);
    editable(false);
    changeQuantity(value);
    setValue(1);
  };

  const saveOnEnter = (e) => {
    if (e.key === "Enter") {
      saveOnBlur();
    }
  };

  return (
    <input
      autoFocus
      type="text"
      value={value}
      onFocus={() => warning(false)}
      onChange={(e) => setValue(e.target.value)}
      onKeyDown={(e) => saveOnEnter(e)}
      onBlur={() => saveOnBlur()}
    />
  );
};
