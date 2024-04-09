import { createBrowserRouter } from "react-router-dom";
import Root from "./../layouts/Root";
import Home from "./../pages/Home/Home";
import Bookmarks from "../pages/Bookmarks/Bookmarks";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Newsdetails from "../pages/Newsdetails/Newsdetails";
import PrivateRoutes from "../pages/PrivateRoutes/PrivateRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("./../../public/data/news.json"),
      },
      {
        path: "/bookmarks",
        element: <Bookmarks />,
        loader: () => fetch("./../../public/data/news.json"),
      },
      {
        path: "/article/:id",
        element: (
          <PrivateRoutes>
            <Newsdetails />
          </PrivateRoutes>
        ),
        loader: () => fetch("./../../public/data/news.json"),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);

export default router;
