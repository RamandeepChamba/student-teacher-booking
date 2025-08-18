import { useEffect, useState } from "react";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import useGetDepartmentsAndSubjects from "./useGetDepartmentsAndSubjects";
import DepartmentsAndSubjectsForForm from "./DepartmentsAndSubjectsForForm";
import { searchTeachers } from "../../services/apiTeachers";
import LabelText from "../../ui/LabelText";

function SearchTeacherForm({ onClose, setTeachers }) {
  const [name, setName] = useState("");

  // Fetch departments and subjects for select menus
  const {
    isLoadingDepartments,
    departments,
    isLoadingSubjects,
    subjects,
    department,
    setDepartment,
    subject,
    setSubject,
    setWasDepartmentUpdated,
  } = useGetDepartmentsAndSubjects();

  // When department is set to any, set subject to any
  useEffect(
    function () {
      if (!department) setSubject("");
    },
    [department]
  );

  async function handleSubmit(e) {
    e.preventDefault();
    // Can search for teacher based on following:
    // 1. By name only
    // 2. By department only
    // 3. By department and subject
    // 4. By name and department
    // 5. By name, department and subject
    if (!name && !department && !subject) {
      alert("Atleast name or department required");
      return;
    }
    const teacherQuery = {
      name: name.trim(),
      department_id: department,
      subject_id: subject,
    };
    const searchedTeachers = await searchTeachers({ teacherQuery });
    console.log(searchedTeachers);
    // Show teachers list
    setTeachers(searchedTeachers);
    // Hide search form
    onClose();
  }

  return (
    <>
      <h1>Search Teacher</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <label htmlFor="name">
            <LabelText>Name</LabelText>
          </label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>
        <DepartmentsAndSubjectsForForm
          isNullable={true}
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
        <Form.Group>
          <Button disabled={isLoadingDepartments || isLoadingSubjects}>
            Search
          </Button>
          <Button
            onClick={onClose}
            variation="dark"
            disabled={isLoadingDepartments || isLoadingSubjects}
          >
            Cancel
          </Button>
        </Form.Group>
      </Form>
    </>
  );
}

export default SearchTeacherForm;
