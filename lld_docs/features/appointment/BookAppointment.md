**Overview and Purpose**

- shows contents for BookAppointment tab for student.
- shows search teacher form and searched teacher's list.

**State**

- showForm:
  - is responsible for showing or hiding SearchTeacherForm.
- setShowForm:
  - is passed to SearchTeacherForm so it can close itself on submit or cancel.
- teachers:
  - passed to TeachersList to view searched teacher's list.
- setTeachers:
  - passed to SearchTeacherForm, which uses it to set teachers as an array of teachers returned
    as a result of searching.
