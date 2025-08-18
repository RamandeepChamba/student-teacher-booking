import { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import { NavLink } from "react-router-dom";
import Radios from "../../ui/Radios";
import Line from "../../ui/Line";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("admin");
  const { login } = useAuth();
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setIsLoggingIn(true);
    await login({ email, password, role });
    setIsLoggingIn(false);
  }

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <h1>Login</h1>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          autoFocus
        />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <Line />
        <Radios>
          <div className="group">
            <input
              type="radio"
              name="role"
              id="student"
              checked={role === "student"}
              onChange={() => setRole("student")}
            />
            <label htmlFor="student">Student</label>
          </div>
          <div className="group">
            <input
              type="radio"
              name="role"
              id="admin"
              checked={role === "admin"}
              onChange={() => setRole("admin")}
            />
            <label htmlFor="admin">Admin</label>
          </div>
          <div className="group">
            <input
              type="radio"
              name="role"
              id="teacher"
              checked={role === "teacher"}
              onChange={() => setRole("teacher")}
            />
            <label htmlFor="teacher">Teacher</label>
          </div>
        </Radios>
        <Form.Group>
          <Button type="submit" radius="none" disabled={isLoggingIn}>
            Login
          </Button>
          <Button as={NavLink} to="/register" radius="none" variation="light">
            Register
          </Button>
        </Form.Group>
      </Form>
    </>
  );
}

export default LoginForm;
