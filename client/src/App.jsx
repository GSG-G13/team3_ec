import'./app.css'
import { createBrowserRouter } from "react-router-dom";
import { HomeLayout } from "./layout/HomeLayout";


const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout />
    }
  ])

export default router
