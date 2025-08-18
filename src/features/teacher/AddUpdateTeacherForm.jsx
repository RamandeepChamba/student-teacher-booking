import Form from "../../ui/Form";
import Button from "../../ui/Button";
import useAddTeacher from "./useAddTeacher";
import toast from "react-hot-toast";
import useGetDepartmentsAndSubjects from "./useGetDepartmentsAndSubjects";
import DepartmentsAndSubjectsForForm from "./DepartmentsAndSubjectsForForm";
import { useState } from "react";
import useUpdateTeacher from "./useUpdateTeacher";
import HeaderForModalWindow from "../../ui/HeaderForModalWindow";
import LabelText from "../../ui/LabelText";

function AddUpdateTeacherForm({ onCloseModal, teacher }) {
  const [name, setName] = useState(teacher?.name || "");
  const [email, setEmail] = useState(teacher?.email || "");
  const [password, setPassword] = useState("");

  // Fetch departments and subjects for select options
  const {
    isLoadingDepartments,
    setWasDepartmentUpdated,
    departments,
    isLoadingSubjects,
    subjects,
    department,
    setDepartment,
    subject,
    setSubject,
  } = useGetDepartmentsAndSubjects(teacher);

  const { isAddingTeacher, addTeacher } = useAddTeacher();
  const { isUpdatingTeacher, updateTeacher } = useUpdateTeacher();

  function handleSubmit(e) {
    e.preventDefault();
    if (!teacher && (!name || !email || !password || !department || !subject))
      return;
    // Updating teacher - password can be empty
    if (teacher && (!name || !email || !department || !subject)) return;
    const newTeacher = {
      name,
      email,
      department,
      subject,
      password,
    };
    console.log(newTeacher);
    if (teacher) {
      newTeacher.id = teacher.id;
    }

    // Add
    if (!teacher) {
      addTeacher(
        { teacher: newTeacher },
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
    } else {
      // Update
      updateTeacher(
        { teacher: newTeacher },
        {
          onError(err) {
            toast.error(err.message);
          },
          onSuccess() {
            toast.success("Teacher updated successfully");
            onCloseModal();
          },
        }
      );
    }
  }
  return (
    <div>
      <HeaderForModalWindow>
        {teacher ? "Update" : "Add"} a Teacher
      </HeaderForModalWindow>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <label htmlFor="name">
            <LabelText>Name</LabelText>
          </label>
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
          <label htmlFor="email">
            <LabelText>Email</LabelText>
          </label>
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
          <label htmlFor="password">
            <LabelText>
              Password{teacher && <small> (Leave empty for no change)</small>}
            </LabelText>
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required={!teacher}
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
          setWasDepartmentUpdated={setWasDepartmentUpdated}
        />
        <Button
          type="submit"
          disabled={
            isLoadingDepartments ||
            isLoadingSubjects ||
            isAddingTeacher ||
            isUpdatingTeacher ||
            !subjects
          }
        >
          {teacher ? "Update teacher" : "Add a teacher"}
        </Button>
      </Form>
    </div>
  );
}

export default AddUpdateTeacherForm;
