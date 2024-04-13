import "../../styles/cart/Cart.css";
import { Navbar } from "../navigation/Navbar";
import { Link } from "react-router-dom";

export const Cart = () => {
  return (
    <>
      <Navbar />
      <div className="cart">
        <Link to="/shop">
          <button className="back-button" to="/shop">
            <img src="arrow-left.svg" />
            Back to the shop
          </button>
        </Link>
        <h1>Cart page</h1>
      </div>
    </>
  );
};
