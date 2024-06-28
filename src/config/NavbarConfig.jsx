import Home from "../pages/Home";
import Products from "../pages/Products";

const NAVBAR_ITEMS = [
  {
    path: "/",
    element: <Home />,
    title: "Home",
  },
  {
    path: "/products",
    element: <Products />,
    title: "Products",
  },
];

export { NAVBAR_ITEMS };
