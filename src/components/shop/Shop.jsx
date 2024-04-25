import "../../styles/shop/Shop.css";
import { Products } from "./Products";
import { BackButton } from "../cart/BackButton";
import { useOutletContext } from "react-router-dom";

export const Shop = () => {
  const [addedProducts, setAddedProducts] = useOutletContext();

  const addProduct = (product, amount = 1) => {
    if (addedProducts === null) {
      setAddedProducts([{ ...product, quantity: amount }]);
    } else {
      const productInstances = addedProducts.filter(
        (item) => item.id === product.id
      );
      if (productInstances.length === 0) {
        setAddedProducts((current) => [
          ...current,
          { ...product, quantity: amount },
        ]);
      } else {
        setAddedProducts(
          addedProducts.map((item) => {
            if (item.id === product.id) {
              const count = item.quantity;
              return { ...item, quantity: count + amount };
            } else return item;
          })
        );
      }
    }
  };

  return (
    <>
      <div className="shop">
        <h1>Shop</h1>
        <BackButton page="cart" direction="Go" />
        <Products add={addProduct} />
      </div>
    </>
  );
};
