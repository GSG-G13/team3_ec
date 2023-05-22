import { createBrowserRouter } from "react-router-dom";
import { Nav } from './components/Nav/nav';
import Login from "./components/Login/Login";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Nav/>
  },
  {
    path: "login",
    element: <Login/>
  }
  ])

export default router;
