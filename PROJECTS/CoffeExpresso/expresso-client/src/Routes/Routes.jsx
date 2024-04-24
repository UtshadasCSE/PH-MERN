import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root/Root";
import AddCoffe from "../pages/AddCoffe/AddCoffe";
import UpdateCoffe from "../pages/UpdateCoffe/UpdateCoffe";
import Home from "../pages/Home/Home";
import CoffeDetails from "../components/CoffeDetails/CoffeDetails";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    loader: () => fetch("http://localhost:4000/coffe"),
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("http://localhost:4000/coffe"),
      },
      {
        path: "/addcoffe",
        element: <AddCoffe />,
      },
      {
        path: "/updatecoffe/:id",
        element: <UpdateCoffe />,
        loader: ({ params }) =>
          fetch(`http://localhost:4000/coffe/${params.id}`),
      },
      {
        path: "/coffedetails/:id",
        element: <CoffeDetails />,
        loader: () => fetch("http://localhost:4000/coffe"),
      },
    ],
  },
]);

export default router;
