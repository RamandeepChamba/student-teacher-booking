import Form from "../../ui/Form";
import LabelText from "../../ui/LabelText";

// isNullable - is used to make this work for search a
// teacher functionality (as you can search a teacher without department and subject,
// but can't add / update it without those)
function DepartmentsAndSubjectsForForm({
  isNullable = false,
  department,
  setDepartment,
  subject,
  setSubject,
  isLoadingSubjects,
  isLoadingDepartments,
  departments,
  subjects,
  setWasDepartmentUpdated,
}) {
  function handleDepartment(departmentId) {
    setWasDepartmentUpdated(true);
    setDepartment(departmentId);
  }
  return (
    <>
      <Form.Group>
        <label htmlFor="department">
          <LabelText>Department</LabelText>
        </label>
        <select
          name="department"
          id="department"
          value={department}
          onChange={(e) => handleDepartment(e.target.value)}
          disabled={isLoadingDepartments}
        >
          {isNullable && <option value="">Any</option>}
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
        <label htmlFor="subject">
          <LabelText>Subject</LabelText>
        </label>
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
          {isNullable && <option value="">Any</option>}

          {subjects &&
            subjects.map((subject) => (
              <option key={subject.id} value={subject.id}>
                {subject.name}
              </option>
            ))}
        </select>
      </Form.Group>
    </>
  );
}

export default DepartmentsAndSubjectsForForm;
