import { Navigate } from "react-router-dom";
// eslint-disable-next-line react/prop-types
function RequireAuth({ children }) {
  const isLoggedIn = localStorage.getItem('token')
  return isLoggedIn ? children : <Navigate to="/login" replace={true} />;
}

export default RequireAuth;
