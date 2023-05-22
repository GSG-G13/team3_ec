import './app.css'
import { createBrowserRouter } from "react-router-dom";
import { HomeLayout } from "./layout/HomeLayout";
import Login from "./pages/Login/Login";


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />
  },
  {
    path: "/login",
    element: <Login />
  }
])

export default router;
