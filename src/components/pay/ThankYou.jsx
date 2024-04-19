import "../../styles/pay/ThankYou.css";
import { BackButton } from "../cart/BackButton";

export const ThankYou = () => {
  return (
    <div className="thank-you">
      <h1>Thanks for shopping!</h1>
      <h2>Your veggies are on their way!</h2>
      <img src="/ontheway.avif" />
      <p>
        You will shortly receive an email with confirmation and details about
        your order!
      </p>
      <p>You order ID is #{Math.floor(Math.random() * 1000) + 100}</p>
      <BackButton page="shop" />
    </div>
  );
};
