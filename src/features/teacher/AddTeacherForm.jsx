import Form from "../../ui/Form";
import Button from "../../ui/Button";
import useAddTeacher from "./useAddTeacher";
import toast from "react-hot-toast";
import useGetDepartmentsAndSubjects from "./useGetDepartmentsAndSubjects";
import DepartmentsAndSubjectsForForm from "./DepartmentsAndSubjectsForForm";
import { useState } from "react";

function AddTeacherForm({ onCloseModal }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Fetch departments and subjects for select options
  const {
    isLoadingDepartments,
    departments,
    isLoadingSubjects,
    subjects,
    department,
    setDepartment,
    subject,
    setSubject,
  } = useGetDepartmentsAndSubjects();

  const { isAddingTeacher, addTeacher } = useAddTeacher();

  function handleSubmit(e) {
    e.preventDefault();
    if (!name || !email || !password || !department || !subject) return;
    // Add teacher
    const teacher = {
      name,
      email,
      password,
      department,
      subject,
    };
    addTeacher(
      { teacher },
      {
        onError(err) {
          toast.error(err.message);
        },
        onSuccess() {
          toast.success("Teacher added successfully");
          onCloseModal();
        },
      }
    );
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
        <DepartmentsAndSubjectsForForm
          department={department}
          setDepartment={setDepartment}
          subject={subject}
          setSubject={setSubject}
          isLoadingSubjects={isLoadingSubjects}
          isLoadingDepartments={isLoadingDepartments}
          departments={departments}
          subjects={subjects}
        />
        <Button
          type="submit"
          disabled={
            isLoadingDepartments ||
            isLoadingSubjects ||
            isAddingTeacher ||
            !subjects
          }
        >
          Add a teacher
        </Button>
      </Form>
    </div>
  );
}

export default AddTeacherForm;
