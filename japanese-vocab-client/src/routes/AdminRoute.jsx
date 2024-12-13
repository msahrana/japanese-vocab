import {Navigate, useLocation} from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useRole from "../hooks/useRole";

const AdminRoute = ({children}) => {
  const {user, loading: authLoading} = useAuth();
  const {role, loading: roleLoading} = useRole();
  const location = useLocation();

  if (authLoading || roleLoading) {
    return (
      <progress className="progress w-56" aria-label="Loading..."></progress>
    );
  }

  if (user && role === "Admin") {
    return children;
  }

  return <Navigate to="/lessons" state={{from: location}} replace />;
};

export default AdminRoute;
