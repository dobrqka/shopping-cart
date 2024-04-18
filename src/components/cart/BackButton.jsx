import "../../styles/cart/BackButton.css";
import { Link } from "react-router-dom";

export const BackButton = ({ page }) => {
  return (
    <Link to={`/${page}`}>
      <button className="back-button">
        <img src="arrow-left.svg" />
        Back to the {page}
      </button>
    </Link>
  );
};
