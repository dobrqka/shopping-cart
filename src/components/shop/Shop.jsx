import "../../styles/shop/Shop.css";
import { Products } from "./Products";
import { useOutletContext } from "react-router-dom";

export const Shop = () => {
  const [addedProducts, setAddedProducts] = useOutletContext();

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
