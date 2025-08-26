**Overview and Purpose**

- form to add or update a teacher (admin).
- if updating, will fill fields with the teacher provided.
- uses DepartmentsAndSubjectsForForm for departments and subjects fields,
  which is also used in search teacher form.

**Props**

- teacher:
  - teacher to be updated
  - if null, we are adding not updating.
- onCloseModal:
  - handler to handle close of this form.

**State**

- name, email, password:
  - for controlled elements
- departments, subjects, department, subject etc.
  - from useGetDepartmentsAndSubjects custom hook.
  - for DepartmentsAndSubjectsForForm
- on submit, update or add accordingly using addTeacher or updateTeacher
  mutations respectively.
