import "../../styles/pay/Pay.css";
import { BackButton } from "../cart/BackButton";
import { OrderSummary } from "./OrderSummary";

export const Pay = () => {
  return (
    <div className="pay">
      <h1>Payment information</h1>
      <h2>
        Please note that this is a fake shop. Please do not insert your actual
        personal information.
      </h2>
      <BackButton page="cart" />
      <OrderSummary />
    </div>
  );
};
