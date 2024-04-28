import "../../styles/navigation/BurgerMenu.css";
import { useState } from "react";
import { NavButton } from "./NavButton";

export const BurgerMenu = () => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    if (isActive) {
      setIsActive(false);
    } else setIsActive(true);
  };

  const hideBurger = () => {
    setIsActive(false);
  };

  return (
    <div className="burger-menu">
      <button className="burger-button" onClick={handleClick}></button>
      {isActive && (
        <div className="burger-items">
          <NavButton label="Shop" link="/shop" hideBurger={hideBurger} />
          <NavButton label="Cart" link="/cart" hideBurger={hideBurger} />
        </div>
      )}
    </div>
  );
};
