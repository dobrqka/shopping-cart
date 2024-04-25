import "../../styles/cart/BackButton.css";
import { Link } from "react-router-dom";

export const BackButton = ({ page, direction }) => {
  return (
    <Link to={`/${page}`}>
      <button className="back-button">
        {direction} to the {page}
      </button>
    </Link>
  );
};
