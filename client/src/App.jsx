import { createBrowserRouter } from "react-router-dom";
import { Nav } from './components/Nav/nav';


const router = createBrowserRouter([
    {
      path: "/",
      element: <Nav/>
    }
  ])

export default router
