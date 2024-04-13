import "../../styles/shop/Shop.css";
import { Navbar } from "../navigation/Navbar";
import { Products } from "./Products";

export const Shop = () => {
  return (
    <>
      <Navbar />
      <div className="shop">
        <h1>Shop</h1>
        <Products />
      </div>
    </>
  );
};
