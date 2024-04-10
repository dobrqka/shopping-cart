import { NavButton } from "./NavButton";
import "../../styles/navigation/Navbar.css";

export const Navbar = () => {
  return (
    <div className="nav-bar">
      <div className="logo-items">
        <img src="/logo.png" alt="logo" />
        <h1>Zarzavat</h1>
      </div>
      <div className="menu-items">
        <NavButton label="Home" />
        <NavButton label="Shop" />
        <NavButton label="Cart" />
      </div>
    </div>
  );
};
