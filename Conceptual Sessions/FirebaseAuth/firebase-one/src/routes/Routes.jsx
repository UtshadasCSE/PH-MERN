import { createBrowserRouter } from "react-router-dom";
import Root from "./../layouts/Root";
import Register from "../pages/Register/Register";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

export default router;
