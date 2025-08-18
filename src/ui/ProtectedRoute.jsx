import { useEffect } from "react";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

function ProtectedRoute({ allowedRoles, children }) {
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(
    function () {
      if (!user || !allowedRoles.includes(user.role)) {
        navigate("/login");
      }
    },
    [user, navigate, allowedRoles]
  );

  if (!user || !allowedRoles.includes(user.role)) return null;
  return children;
}

export default ProtectedRoute;
