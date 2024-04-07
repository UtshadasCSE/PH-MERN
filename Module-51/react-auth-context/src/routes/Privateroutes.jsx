import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate } from "react-router-dom";
import { PropTypes } from "prop-types";

const Privateroutes = ({ children }) => {
  const { user } = useContext(AuthContext);
  if (user) {
    return children;
  }

  return <Navigate to="/signin"></Navigate>;
};
Privateroutes.propTypes = {
  children: PropTypes.node,
};
export default Privateroutes;
