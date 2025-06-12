import { useSelector } from "react-redux";
import { selectAuthToken } from "../redux/auth/selectors";
import { Navigate } from "react-router-dom";

const RestrictedRoute = ({ children }) => {
  const token = useSelector(selectAuthToken);
  return token ? <Navigate to="/" replace /> : children;
};

export default RestrictedRoute;
