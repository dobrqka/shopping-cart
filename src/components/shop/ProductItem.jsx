import "../../styles/shop/ProductItem.css";

export const ProductItem = ({ product, add }) => {
  return (
    <div className="product-item">
      <img src={product.image} />
      <h3>{product.title}</h3>
      <p>${product.price}</p>
      <div className="add-to-cart">
        <input type="number" value="0"></input>
        <button onClick={add}>Add to cart</button>
      </div>
    </div>
  );
};
