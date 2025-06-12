import { useSelector } from "react-redux";
import { selectAuthToken } from "../redux/auth/selectors";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const token = useSelector(selectAuthToken);
  return token ? children : <Navigate to="/login" replace />;
};

export default PrivateRoute;
