import { App } from "./App.jsx";
import { Shop } from "./components/shop/Shop.jsx";
import { Cart } from "./components/cart/Cart.jsx";

const routes = [
  {
    path: "/",
    element: <App />,
  },
  {
    path: "cart",
    element: <Cart />,
  },
  {
    path: "shop",
    element: <Shop />,
  },
];

export default routes;
