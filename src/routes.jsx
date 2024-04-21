import App from "./App";
import ErrorPage from "./components/ErrorPage";
import CheckoutPage from "./components/Checkout/CheckoutPage";
import HomePage from "./components/Home/HomePage";
import ShopPage from "./components/Shop/ShopPage";

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "ShopPage",
        element: <ShopPage />,
      },
      {
        path: "CheckoutPage",
        element: <CheckoutPage />,
      },
    ],
  },
];
export default routes;
