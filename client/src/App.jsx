import "./app.css";
import { createBrowserRouter } from "react-router-dom";
import { HomeLayout } from "./layout/HomeLayout";
import { Login } from "./pages/Login/Login"
import { Home } from "./pages/Home/Home";
import { ProductsPage } from "./pages/products/productListPage/ProductsListPage"
import { ProductDetailPage } from "./pages/products/productDetail/ProductDetailPage";
import { CartPage } from "./pages/cart/CartPage";
import  ErrorPage  from "./pages/Error/error";


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/products",
        element: <ProductsPage />,
      },
      {
        path: "products/:id",
        element: <ProductDetailPage />,
      },
      {
        path: 'cart',
        element: <CartPage />
      }
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

export default router;
