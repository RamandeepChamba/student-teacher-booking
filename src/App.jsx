import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import AppLayout from "./ui/AppLayout";
import Teachers from "./pages/Teachers";
import TeacherAppointments from "./pages/TeacherAppointments";
import { AuthProvider } from "./contexts/AuthContext";
import ProtectedRoute from "./ui/ProtectedRoute";
import GlobalStyles from "./styles/GlobalStyles";
import RegisteringStudents from "./pages/RegisteringStudents";
import Register from "./pages/Register";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import StudentAppointments from "./pages/StudentAppointments";
import BookAppointmentPage from "./pages/BookAppointmentPage";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <AuthProvider>
          <ReactQueryDevtools initialIsOpen={false} />
          <GlobalStyles />
          <Routes>
            <Route path="/" element={<Navigate to="/login" replace />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            {/* Admin access only */}
            <Route
              element={
                <ProtectedRoute allowedRoles={["admin"]}>
                  <AppLayout />
                </ProtectedRoute>
              }
            >
              <Route path="/teachers" element={<Teachers />} />
              <Route path="/students" element={<RegisteringStudents />} />
            </Route>
            {/* Teacher access only */}
            <Route
              element={
                <ProtectedRoute allowedRoles={["teacher"]}>
                  <AppLayout />
                </ProtectedRoute>
              }
            >
              <Route
                path="/teacher/appointments"
                element={<TeacherAppointments />}
              />
            </Route>

            {/* Student access only */}
            <Route
              element={
                <ProtectedRoute allowedRoles={["student"]}>
                  <AppLayout />
                </ProtectedRoute>
              }
            >
              <Route
                path="/student/appointments"
                element={<StudentAppointments />}
              />
              <Route
                path="/student/bookAppointment"
                element={<BookAppointmentPage />}
              />
            </Route>
          </Routes>
        </AuthProvider>
      </BrowserRouter>
      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
            background: "var(--color-grey-0)",
            color: "var(--color-grey-700)",
          },
          success: {
            duration: 3000,
          },
          error: {
            duration: 5000,
          },
        }}
      />
    </QueryClientProvider>
  );
}

export default App;
