import { NavButton } from "./NavButton";
import "../../styles/navigation/Navbar.css";
import { Link } from "react-router-dom";

export const Navbar = ({ quantity }) => {
  return (
    <>
      <div className="nav-bar">
        <Link to="/">
          <div className="logo-items">
            <img src="/logo.png" alt="logo" />
            <h1>Zarzavat</h1>
          </div>
        </Link>
        <div className="menu-items">
          <NavButton label="Home" link="/" />
          <NavButton label="Shop" link="/shop" />
          <NavButton label="Cart" link="/cart" quantity={quantity} />
        </div>
      </div>
    </>
  );
};
