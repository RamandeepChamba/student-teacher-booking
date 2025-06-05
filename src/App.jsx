import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import AppLayout from "./ui/AppLayout";
import Teachers from "./pages/Teachers";
import BookAppointment from "./pages/BookAppointment";
import TeacherAppointments from "./pages/TeacherAppointments";
import { AuthProvider } from "./contexts/AuthContext";
import ProtectedRoute from "./ui/ProtectedRoute";
import GlobalStyles from "./styles/GlobalStyles";
import RegisteringStudents from "./pages/RegisteringStudents";
import Register from "./pages/Register";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <GlobalStyles />
        <Routes>
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          {/* Register - TODO */}

          <Route
            element={
              <ProtectedRoute>
                <AppLayout />
              </ProtectedRoute>
            }
          >
            {/* Admin access only */}
            <Route path="/teachers" element={<Teachers />} />
            <Route path="/students" element={<RegisteringStudents />} />
            {/* Teacher access only */}
            <Route
              path="/teacher/appointments"
              element={<TeacherAppointments />}
            />
            {/* Student access only */}
            <Route
              path="/student/bookAppointment"
              element={<BookAppointment />}
            />
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
