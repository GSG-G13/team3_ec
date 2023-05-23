import "./app.css";
import { createBrowserRouter } from "react-router-dom";
import { HomeLayout } from "./layout/HomeLayout";
import Login from "./pages/Login/Login";
import { Home } from "./components/Home/Home";
import { ProductsPage } from "./pages/ProductsListPage";
import { ProductDetailPage } from "./pages/productDetail/ProductDetailPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
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
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

export default router;
