import Form from "../../ui/Form";
import Button from "../../ui/Button";
import useGetDepartments from "./useGetDepartments";
import { useEffect, useState } from "react";
import useGetSubjects from "./useGetSubjects";
import useAddTeacher from "./useAddTeacher";
import toast from "react-hot-toast";

function AddTeacherForm({ onCloseModal }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [department, setDepartment] = useState("");
  const [subject, setSubject] = useState("");
  // Fetch departments
  const { isLoading: isLoadingDepartments, data: departments } =
    useGetDepartments();
  const results = useGetSubjects({ departmentId: department });
  // will only return subjects when department is already selected
  // did this because can't condition a hook (useGetSubjects)
  const { isLoading: isLoadingSubjects, data: subjects } = department
    ? results
    : { isLoading: false, subjects: null };

  const { isAddingTeacher, addTeacher } = useAddTeacher();

  useEffect(
    function () {
      if (!departments) return;
      // Select the first department so it's subjects can be fetched
      setDepartment(departments[0].id + "");
    },
    [departments]
  );
  useEffect(
    function () {
      if (!subjects) return;
      // Select the first department so it's subjects can be fetched
      setSubject(subjects[0].id + "");
    },
    [subjects]
  );
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
          if (
            err.message ==
            'duplicate key value violates unique constraint "teachers_email_key"'
          ) {
            toast.error("Email already registered");
          } else {
            toast.error("Unable to add teacher");
          }
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
        <Form.Group>
          <label htmlFor="department">Department</label>
          <select
            name="department"
            id="department"
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
            disabled={isLoadingDepartments}
          >
            {departments &&
              departments.map((dpmt) => (
                <option key={dpmt.id} value={dpmt.id}>
                  {dpmt.name}
                </option>
              ))}
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
            disabled={
              isLoadingDepartments ||
              isLoadingSubjects ||
              !department ||
              !subjects
            }
          >
            {subjects &&
              subjects.map((subject) => (
                <option key={subject.id} value={subject.id}>
                  {subject.name}
                </option>
              ))}
          </select>
        </Form.Group>
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
