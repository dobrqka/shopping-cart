import { NavButton } from "./NavButton";
import "../../styles/navigation/Navbar.css";
import { Link } from "react-router-dom";
import { BurgerMenu } from "./BurgerMenu";

export const Navbar = ({ quantity }) => {
  return (
    <>
      <div className="nav-bar">
        <div className="logo-items">
          <Link to="/">
            <img src="/logo.png" alt="logo" />
          </Link>
          <Link to="/">
            <h1>Zarzavat</h1>
          </Link>
          <BurgerMenu />
        </div>
        <div className="menu-items">
          <NavButton label="Home" link="/" />
          <NavButton label="Shop" link="/shop" />
          <NavButton label="Cart" link="/cart" quantity={quantity} />
        </div>
      </div>
    </>
  );
};
