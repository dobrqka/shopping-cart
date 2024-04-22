import "../../styles/pay/OrderSummary.css";
import { useOutletContext } from "react-router-dom";
import { OrderItem } from "./OrderItem";
import { OrderForm } from "./OrderForm";
import { Calculator } from "./Calculator";

export const OrderSummary = () => {
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
    <div className="order-summary">
      <OrderForm />
      {addedProducts && (
        <div className="order-items">
          {addedProducts.map((product) => {
            return (
              <OrderItem
                key={product.id}
                title={product.title}
                price={product.price}
                quantity={product.quantity}
                image={product.image}
                remove={() => removeProduct(product)}
              />
            );
          })}
          <Calculator />
        </div>
      )}
    </div>
  );
};
