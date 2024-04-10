import { App } from "./App.jsx";
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
];

export default routes;
