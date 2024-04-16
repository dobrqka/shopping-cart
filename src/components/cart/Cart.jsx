import "../../styles/cart/Cart.css";
import { Link } from "react-router-dom";
import { useOutletContext } from "react-router-dom";

export const Cart = () => {
  const [addedProducts, setAddedProducts] = useOutletContext();

  const removeProduct = (product) => {
    setAddedProducts(addedProducts.filter((item) => item.id != product.id));
  };

  return (
    <>
      <div className="cart">
        <Link to="/shop">
          <button className="back-button" to="/shop">
            <img src="arrow-left.svg" />
            Back to the shop
          </button>
        </Link>
        <h1>Cart page</h1>
        {addedProducts.map((product) => {
          return (
            <div key={product.id}>
              <h3>{product.title}</h3>
              <p>{product.price}</p>
              <button onClick={() => removeProduct(product)}>Remove</button>
            </div>
          );
        })}
      </div>
    </>
  );
};
