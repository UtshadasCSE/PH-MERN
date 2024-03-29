import React from "react";
import ReactDOM from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
// import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Root from "./components/Root/Root";
import Home from "./components/Home/Home";
import Appliedjobs from "./components/Appliedjobs/Appliedjobs";
import Errorpage from "./components/Errorpage/Errorpage";
import Jobdetails from "./components/Jobdetails/Jobdetails";
import Blogs from "./components/Blogs/Blogs";
import Statistics from "./components/Statistics/Statistics";
import Contact from "./components/Contact/Contact";

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
        path: "/statistics",
        element: <Statistics />,
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
        loader: () => fetch("blogs.json"),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  </React.StrictMode>
);
