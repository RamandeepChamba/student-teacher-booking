import { useState } from "react";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import { useAddStudent } from "../student/useAddStudent";
import toast from "react-hot-toast";
import { NavLink, useNavigate } from "react-router-dom";

function RegisterForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { addStudent, isAddingStudent } = useAddStudent();

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!name || !email || !password) return;
    addStudent(
      { name, email, password },
      {
        onError(err) {
          toast.error(err.message);
        },
        onSuccess() {
          toast.success("Registered, Wait for approval from admin");
          navigate("/login");
        },
      }
    );
  }
  return (
    <Form onSubmit={handleSubmit}>
      <h1>Register</h1>
      <input
        type="name"
        name="name"
        id="name"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        autoFocus
      />
      <input
        type="email"
        name="email"
        id="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
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
      <Form.Group>
        <Button type="submit" disabled={isAddingStudent}>
          Register
        </Button>
        <Button
          as={NavLink}
          variation="light"
          to="/login"
          disabled={isAddingStudent}
          className="button"
        >
          Login
        </Button>
      </Form.Group>
    </Form>
  );
}

export default RegisterForm;
