import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAdmin } from "../services/apiAdmins";
import toast from "react-hot-toast";
import { getStudent } from "../services/apiStudents";
import { getTeacher } from "../services/apiTeachers";

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [user, setUser] = useState();
  const navigate = useNavigate();

  useEffect(
    function () {
      if (!user) return;
      console.log(user);
      if (user.role === "admin") {
        navigate("/teachers");
      } else if (user.role === "teacher") {
        navigate("/teacher/appointments");
      } else if (user.role === "student") {
        navigate("/student/appointments");
      }
    },
    [user]
  );

  async function login({ email, password, role }) {
    // Get user
    if (role === "admin") {
      const admin = await getAdmin({ email, password });
      if (admin) {
        setUser({
          id: admin.id,
          name: admin.name,
          email: admin.email,
          role: "admin",
        });
      } else {
        toast.error("Invalid credentials");
      }
    }
    if (role === "student") {
      const { student, error } = await getStudent({ email, password });
      if (student) {
        setUser({
          id: student.id,
          name: student.name,
          email: student.email,
          role: "student",
        });
      }
      if (error) {
        toast.error(error);
      }
    }
    if (role === "teacher") {
      const { teacher, error } = await getTeacher({ email, password });
      if (teacher) {
        setUser({
          id: teacher.id,
          name: teacher.name,
          email: teacher.email,
          role: "teacher",
        });
      }
      if (error) {
        toast.error(error);
      }
    }
  }

  function logout() {
    setUser(null);
    navigate("/login");
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
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
