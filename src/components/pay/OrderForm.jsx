import "../../styles/pay/OrderForm.css";
import { Link, useOutletContext } from "react-router-dom";

export const OrderForm = () => {
  const [addedProducts, setAddedProducts] = useOutletContext();

  const orderNow = () => {
    setAddedProducts(null);
    sessionStorage.setItem("products", null);
  };

  return (
    <div className="order-form">
      <form>
        <fieldset>
          <legend>Billing details</legend>
          <div>
            <label htmlFor="email">Email: </label>
            <input type="email" id="email"></input>
          </div>
          <div>
            <label htmlFor="name">Name: </label>
            <input type="text" id="name"></input>
          </div>
          <div>
            <label htmlFor="country">Country: </label>
            <input type="text" id="country" value="Bulgaria" disabled></input>
          </div>
          <div>
            <label htmlFor="city">City: </label>
            <input type="text" id="city"></input>
          </div>
          <div>
            <label htmlFor="zip">Zip code: </label>
            <input type="text" id="zip"></input>
          </div>
          <div>
            <label htmlFor="address">Address: </label>
            <input type="text" id="address"></input>
          </div>
          <div>
            <label htmlFor="phone">Phone number: </label>
            <input type="number" id="phone"></input>
          </div>
          <fieldset className="payment-option">
            <legend>Payment options:</legend>
            <label htmlFor="billing">Cash on delivery</label>
            <input type="radio" id="billing" checked readOnly></input>
          </fieldset>
          <Link to="/thanks">
            <button
              className="order-now"
              type="default"
              onClick={orderNow}
              // disabled={true}
            >
              Order Now
            </button>
          </Link>
        </fieldset>
      </form>
    </div>
  );
};
