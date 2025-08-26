**Overview and Purpose**

- Shows departments and subjects for teachers in a form.
- Have select fields for both departments and subjects.
- When a department is selected, subjects options are filled automatically
  based on the department selected.
- using it when adding teacher (admin) and searching teacher (student).

**Props**

- isNullable: is used to make this work for search a
  teacher functionality (as you can search a teacher without department and subject,
  but can't add / update it without those)
  - adds "Any" option in select fields for subjects and departments
- setWasDepartmentUpdated: used when updating teacher, first it'll be false
  and teacher's subject will be pre-filled but when department is changed, will be
  set to true and first subject of that department will be selected.
- setDepartment: sets department to selected option and using
  useGetDepartmentsAndSubjects, subjects are fetched and cached and relevant
  subject if selected in the form.
- subjects: subjects options for subject select field
- departments: departments options for departments select field
