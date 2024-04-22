import "../../styles/cart/Cart.css";
import { useOutletContext } from "react-router-dom";
import { BackButton } from "./BackButton";
import { CartItem } from "./CartItem";
import { PriceCalculator } from "./PriceCalculator";

export const Cart = () => {
  const [addedProducts, setAddedProducts] = useOutletContext();

  const removeProduct = (product) => {
    if (addedProducts.length === 1) {
      setAddedProducts(null);
      sessionStorage.setItem("products", null);
    } else {
      setAddedProducts(addedProducts.filter((item) => item.id != product.id));
    }
  };

  return (
    <>
      <div className="cart">
        <BackButton page="shop" />
        <h1>Cart page</h1>
        {addedProducts ? (
          <div className="cart-products">
            <table>
              <thead>
                <tr className="table-head-row">
                  <th>Item</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {addedProducts.map((product) => {
                  return (
                    <CartItem
                      key={product.id}
                      title={product.title}
                      price={product.price}
                      quantity={product.quantity}
                      image={product.image}
                      remove={() => removeProduct(product)}
                    />
                  );
                })}
              </tbody>
            </table>
            <PriceCalculator addedProducts={addedProducts} />
          </div>
        ) : (
          <p>Nothing here!</p>
        )}
      </div>
    </>
  );
};
