import "../../styles/pay/Pay.css";
import { BackButton } from "../cart/BackButton";
import { OrderSummary } from "./OrderSummary";

export const Pay = () => {
  return (
    <div className="pay">
      <h1>Payment</h1>
      <BackButton page="cart" direction="Back" />
      <h2>
        This is a fake shop. Please do not insert your actual personal
        information.
      </h2>
      <OrderSummary />
    </div>
  );
};
