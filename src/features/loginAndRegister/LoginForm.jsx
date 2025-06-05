import { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import StyledNavLink from "../../ui/StyledNavLink";
import Form from "../../ui/Form";
import Button from "../../ui/Button";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();

  function handleSubmit(e) {
    e.preventDefault();
    login({ email, password });
  }

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </Form.Group>
        <div>
          <Button type="submit" radius="none">
            Login
          </Button>
          <StyledNavLink to="/register">Register</StyledNavLink>
        </div>
      </Form>
    </>
  );
}

export default LoginForm;
