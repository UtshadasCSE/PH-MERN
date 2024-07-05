import useAuth from "../hooks/useAuth";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { loading, user } = useAuth();
  const location = useLocation();
  if (loading) {
    return (
      <>
        <div className="h-screen justify-center items-center">
          <span className="loading loading-bars loading-lg"></span>
        </div>
      </>
    );
  }
  if (user) {
    return children;
  }
  return (
    <Navigate to={"/signin"} state={{ from: location }} replace></Navigate>
  );
};

export default PrivateRoute;
