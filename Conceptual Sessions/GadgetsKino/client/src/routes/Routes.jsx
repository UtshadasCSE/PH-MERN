import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home/Home";
import AddProduct from "../pages/AddProduct/AddProduct";
import PrivateRoute from "./PrivateRoute";
import Signup from "../pages/Signup/Signup";
import Signin from "../pages/Signin/Signin";
import Errorpage from "../pages/Errorpage/Errorpage";
import MyProduct from "../pages/MyProduct/MyProduct";
import Cart from "../pages/Cart/Cart";
import axios from "axios";
import ProductCart from "./../pages/ProductCart/ProductCart";
import Update from "../pages/Update/Update";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Errorpage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/addproduct",
        element: (
          <PrivateRoute>
            {" "}
            <AddProduct />
          </PrivateRoute>
        ),
      },
      {
        path: "/myproduct",
        element: <MyProduct />,
      },
      {
        path: "/cart",
        element: <ProductCart />,
      },
      {
        path: "/details/:id",
        element: (
          <PrivateRoute>
            <Cart />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          axios.get(`http://localhost:3000/details/${params.id}`),
      },
      {
        path: "/update/:id",
        element: <Update />,
        loader: ({ params }) =>
          axios.get(`http://localhost:3000/update/${params.id}`),
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/signin",
        element: <Signin />,
      },
    ],
  },
]);

export default router;
