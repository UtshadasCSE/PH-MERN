import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Root from "./components/Root/Root";
import Home from "./components/Home/Home";
import Appliedjobs from "./components/Appliedjobs/Appliedjobs";
import Errorpage from "./components/Errorpage/Errorpage";
import Jobdetails from "./components/Jobdetails/Jobdetails";
import Blogs from "./components/Blogs/Blogs";

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
        path: "/applied",
        element: <Appliedjobs />,
        loader: () => fetch("jobs.json"),
      },
      {
        path: "/job/:id",
        element: <Jobdetails />,
        loader: () => fetch("jobs.json"),
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
