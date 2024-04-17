import "../../styles/cart/BackButton.css";
import { Link } from "react-router-dom";

export const BackButton = () => {
  return (
    <Link to="/shop">
      <button className="back-button" to="/shop">
        <img src="arrow-left.svg" />
        Back to the shop
      </button>
    </Link>
  );
};
