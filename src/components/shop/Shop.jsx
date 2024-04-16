import "../../styles/shop/Shop.css";
import { Products } from "./Products";
import { useOutletContext } from "react-router-dom";

export const Shop = () => {
  const [addedProducts, setAddedProducts] = useOutletContext();

  const addProduct = (product) => {
    if (addedProducts === null) {
      setAddedProducts([{ ...product, quantity: 1 }]);
    } else {
      const productInstances = addedProducts.filter(
        (item) => item.id === product.id
      );
      if (productInstances.length === 0) {
        setAddedProducts((current) => [
          ...current,
          { ...product, quantity: 1 },
        ]);
      } else {
        setAddedProducts(
          addedProducts.map((item) => {
            if (item.id === product.id) {
              const count = item.quantity;
              return { ...item, quantity: count + 1 };
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
        <Products add={addProduct} />
      </div>
    </>
  );
};
