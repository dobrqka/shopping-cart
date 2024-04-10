import "../../styles/navigation/NavButton.css";
import { Link } from "react-router-dom";

export const NavButton = ({ label, link }) => {
  return (
    <button className="nav-button">
      <Link to={link}>{label}</Link>
    </button>
  );
};
