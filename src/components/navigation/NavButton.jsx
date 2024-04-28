import "../../styles/navigation/NavButton.css";
import { Link } from "react-router-dom";

export const NavButton = ({ label, link, quantity = null, hideBurger }) => {
  return (
    <Link to={link}>
      <button className="nav-button" onClick={hideBurger}>
        {label}
        {quantity && <span key={quantity}>{quantity}</span>}
      </button>
    </Link>
  );
};
