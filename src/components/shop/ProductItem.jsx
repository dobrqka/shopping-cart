import "../../styles/shop/ProductItem.css";
import { NumberInput } from "./NumberInput";

export const ProductItem = ({ product, add }) => {
  return (
    <div className="product-item">
      <img src={product.image} />
      <h3>{product.title}</h3>
      <p>${product.price}</p>
      <div className="add-to-cart">
        <NumberInput />
        <button onClick={add}>Add to cart</button>
      </div>
    </div>
  );
};

// when adding a product, its quantity should be set to the value of the number input
