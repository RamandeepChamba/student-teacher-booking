**Overview and Purpose**

- used by teacher to schedule an appoinment.

**Data Flow & Interaction**

- teacher's appointments calendar opens this after a time slot is selected,
  and passes start and end time as props to this.
  - this calendar can be SearchedTeacherAppointmentsCalendar (role: student)
    or TeacherAppointmentsCalendar
- gets teacher id for appointment from auth user.
- accepts message and student id from user input, both are controlled elements.
- uses add appointment mutation to add appointment to supabase
  - on successfull addition, closes this form and refreshes current logged in teacher's
    appointments so that newly added appointment also shows.
