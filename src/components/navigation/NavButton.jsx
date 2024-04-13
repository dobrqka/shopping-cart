import "../../styles/navigation/NavButton.css";
import { Link } from "react-router-dom";

export const NavButton = ({ label, link }) => {
  return (
    <Link to={link}>
      <button className="nav-button">{label}</button>
    </Link>
  );
};
