import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home/Home";
import Signup from "../pages/Signup/Signup";
import Signin from "../pages/Signin/Signin";
import Errorpage from "../pages/Errorpage/Errorpage";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import JobDetails from "../pages/JobDetails/JobDetails";
import AddJobs from "../pages/AddJobs/AddJobs";
import MyJobs from "../pages/MyJobs/MyJobs";
import UpdateJob from "../pages/UpdateJob/UpdateJob";
import AllJobs from "../pages/AllJobs/AllJobs";
import PrivateRoute from "./PrivateRoute";
import MyBids from "../pages/MyBids/MyBids";

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
        path: "/all-jobs",
        element: (
          <PrivateRoute>
            <AllJobs />
          </PrivateRoute>
        ),
      },
      {
        path: "/add-job",
        element: <AddJobs />,
      },
      {
        path: "/my-jobs",
        element: <MyJobs />,
      },
      {
        path: "/my-bids",
        element: (
          <PrivateRoute>
            <MyBids />
          </PrivateRoute>
        ),
      },
      {
        path: "/jobs/:id",
        element: (
          <PrivateRoute>
            <JobDetails />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_API_URL}/jobs/${params.id}`),
      },
      {
        path: "/update/:id",
        element: <UpdateJob />,
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_API_URL}/jobs/${params.id}`),
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
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
