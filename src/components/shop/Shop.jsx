import "../../styles/shop/Shop.css";
import { Products } from "./Products";
import { useOutletContext } from "react-router-dom";

export const Shop = () => {
  const [addedProducts, setAddedProducts] = useOutletContext();

  // adding the same product multiple times should increase its new "quantity" property value
  const addProduct = (product) => {
    setAddedProducts((current) => [...current, { ...product }]);
  };

  return (
    <>
      <div className="shop">
        <h1>Shop</h1>
        <Products add={addProduct} />
      </div>
    </>
  );
};
