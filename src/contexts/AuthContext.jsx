import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [user, setUser] = useState();
  const navigate = useNavigate();

  useEffect(
    function () {
      if (!user) return;
      if (user.role === "admin") {
        navigate("/teachers");
      } else if (user.role === "teacher") {
        navigate("/teacher/appointments");
      } else if (user.role === "student") {
        navigate("/student/bookAppointment");
      }
    },
    [user]
  );

  function login({ username, password }) {
    setUser({ username, password, role: "admin" });
  }

  return (
    <AuthContext.Provider value={{ user, login }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("accessing context outside the scope");
  }
  return context;
}

export { AuthProvider, useAuth };
