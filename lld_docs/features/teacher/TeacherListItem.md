**Overview and Purpose**

- Shows table row (teacher record) in teacher's list table.
- Using it for both: CRUD operations on teacher (for admin) and searched teachers list for Booking (for students).

**Props**

- if props.role = booking
  - we are in searched teacher's list (student)
  - will show book button in actions column
  - clicking book button opens SearchedTeacherAppointmentsCalendar as modal window.
- if props.role = crud
  - we are in teacher's list (Admin Dashboard)
  - will show update and delete actions
  - clicking update button opens AddUpdateTeacherForm as modal window.
    - will act as update form as teacher will be passed.
  - clicking delete button opens ConfirmDelete as modal window.
    - on confirm will delete a teacher using deleteTeacher mutation.
