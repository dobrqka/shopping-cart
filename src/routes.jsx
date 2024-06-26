import App from "./App.jsx";
import { Home } from "./components/home/Home.jsx";
import { Shop } from "./components/shop/Shop.jsx";
import { Cart } from "./components/cart/Cart.jsx";
import { Pay } from "./components/pay/Pay.jsx";
import { ThankYou } from "./components/pay/ThankYou.jsx";

const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "shop",
        element: <Shop />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "pay",
        element: <Pay />,
      },
      {
        path: "thanks",
        element: <ThankYou />,
      },
    ],
  },
];

export default routes;
