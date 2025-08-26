**Overview and Purpose**

- used to search a teacher for booking (role: student)
- can search for many teachers not just one.
- can search only by name, department can be any, subjects any.
- can search only by department.
- can search only by department and subject, no name.
- closes itself on submit or cancel, by changing state of parent (BookAppointment)

**Data Flow & Interaction**

- uses useGetDepartmentsAndSubjects + DepartmentsAndSubjectsForForm for departments and subjects fields.
  - isNullable is true as Department and Subject can also be "Any"
- fetches teachers on submit, based on values in form fields.
  - No React Query or caching in this one.
- provides these teachers to parent (BookAppointment)
  - parent views them in a list

**State**

- name: for controlled element, name of teacher to search.

**Props**

- setTeachers: used to set teachers in parent (BookAppointment) with search results.
  - teachers set here will be displayed in parent (BookAppointment)
    using TeachersList
