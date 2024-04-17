import "../../styles/navigation/NavButton.css";
import { Link } from "react-router-dom";

export const NavButton = ({ label, link, quantity = null }) => {
  return (
    <Link to={link}>
      <button className="nav-button">
        {label}
        {quantity && <span>{quantity}</span>}
      </button>
    </Link>
  );
};
