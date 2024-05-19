import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Blog from "../pages/Blog";
import Bookmark from "../pages/Bookmark";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/blogs",
        element: <Blog />,
      },
      {
        path: "/bookmarks",
        element: <Bookmark />,
      },
    ],
  },
]);

export default router;
