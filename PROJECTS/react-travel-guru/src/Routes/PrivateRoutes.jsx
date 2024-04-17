import { Children, useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { useNavigate, Navigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { PropTypes } from "prop-types";
const PrivateRoutes = ({ Children }) => {
  const { user } = useContext(AuthContext);
  const location = useLocation();
  //   here we find path after login where will be go
  //   console.log(location.pathname);
  if (user) {
    return Children;
  }
  return <Navigate state={location.pathname} to="/login"></Navigate>;
};
PrivateRoutes.propTypes = {
  Children: PropTypes.node,
};
export default PrivateRoutes;
