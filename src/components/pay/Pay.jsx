import "../../styles/pay/Pay.css";
import { BackButton } from "../cart/BackButton";
import { OrderSummary } from "./OrderSummary";

export const Pay = () => {
  return (
    <div className="pay">
      <h1>Pay</h1>
      <BackButton page="cart" />
      <OrderSummary />
    </div>
  );
};
