import { createBrowserRouter } from "react-router-dom";
import Root from "./../layouts/Root";
import Home from "./../pages/Home/Home";

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
    ],
  },
]);

export default router;
