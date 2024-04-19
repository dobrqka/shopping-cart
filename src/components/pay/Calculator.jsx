import "../../styles/pay/Calculator.css";
import { useOutletContext } from "react-router-dom";

export const Calculator = () => {
  const [addedProducts] = useOutletContext();

  const totalPrice = () => {
    if (addedProducts) {
      return addedProducts
        .map((product) => {
          return product.price * product.quantity;
        })
        .reduce((total, current) => total + current, 0);
    }
  };

  return (
    <div className="calculator">
      <p>Price: ${totalPrice().toFixed(2)}</p>
      <p>Tax (20%): ${(totalPrice() * 0.2).toFixed(2)}</p>
      <p>Shipping: $10.00</p>
      <p>Total: ${(totalPrice() + 10 + totalPrice() * 0.2).toFixed(2)}</p>
    </div>
  );
};
