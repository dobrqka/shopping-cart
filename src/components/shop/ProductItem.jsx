import "../../styles/shop/ProductItem.css";
import { NumberInput } from "./NumberInput";
import { useState } from "react";

export const ProductItem = ({ product, add }) => {
  const [quantity, setQuantity] = useState(1);

  const increment = () => {
    if (quantity == 10) {
      return;
    }
    setQuantity((current) => current + 1);
  };

  const decrement = () => {
    if (quantity == 1) {
      return;
    }
    setQuantity((current) => current - 1);
  };

  const changeQuantity = (target) => {
    setQuantity(+target);
  };

  return (
    <div className="product-item">
      <div className="product-general">
        <img src={product.image} />
        <div>
          <h3>{product.title}</h3>
          <p>${product.price}</p>
        </div>
      </div>
      <div className="add-to-cart">
        <NumberInput
          increment={increment}
          decrement={decrement}
          quantity={quantity}
          changeQuantity={changeQuantity}
        />
        <button
          className="add-button"
          onClick={() => {
            add(product, quantity);
            setQuantity(1);
          }}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};
