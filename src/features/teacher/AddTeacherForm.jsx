import { useState } from "react";
import Form from "../../ui/Form";
import Button from "../../ui/Button";

function AddTeacherForm({ onCloseModal }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [department, setDepartment] = useState("");
  const [subject, setSubject] = useState("");

  function handleSubmit(e) {
    e.preventDefault;
  }
  return (
    <div>
      <h2>Add a Teacher</h2>
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
        <Form.Group>
          <label htmlFor="department">Department</label>
          <select
            name="department"
            id="department"
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
          >
            <option value="1">Science</option>
            <option value="2">Computer Science</option>
          </select>
        </Form.Group>
        <Form.Group>
          {/* Depends on the department */}
          <label htmlFor="subject">Subject</label>
          <select
            name="subject"
            id="subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          >
            <option value="1">Physics</option>
            <option value="2">Biology</option>
          </select>
        </Form.Group>
        <Button type="submit">Add a teacher</Button>
      </Form>
    </div>
  );
}

export default AddTeacherForm;
