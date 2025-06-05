import { useState } from "react";
import Form from "../../ui/Form";
import Button from "../../ui/Button";

function RegisterForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <label htmlFor="name">Name</label>
        <input
          type="name"
          name="name"
          id="name"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </Form.Group>
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
      <Button type="submit">Register</Button>
    </Form>
  );
}

export default RegisterForm;
