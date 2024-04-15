import "../../styles/cart/Cart.css";
import { Link } from "react-router-dom";
import { useOutletContext } from "react-router-dom";

export const Cart = () => {
  const [addedProducts, setAddedProducts] = useOutletContext();

  const removeProduct = (product) => {
    const newProducts = addedProducts.filter((item) => {
      item.product.id !== product.product.id;
    });
    console.log(newProducts);

    // setAddedProducts(
    //   addedProducts.filter((item) => {
    //     item.product.id !== product.product.id;
    //   })
    // );
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
            <div key={product.product.id}>
              <h3>{product.product.title}</h3>
              <p>{product.product.price}</p>
              <button onClick={() => removeProduct(product)}>Remove</button>
            </div>
          );
        })}
      </div>
    </>
  );
};
/// set up unique keys on the items in the cart page, fix the "Remove Product" function
