import { useEffect } from "react";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

function ProtectedRoute({children}) {
    const {user} = useAuth();
    const navigate = useNavigate();

    useEffect(function() {
        if(!user) {
            navigate('/login');
        }
    }, []);

    if (!user) return null;
    return children;
}

export default ProtectedRoute;