**Overview and Purpose**

- used by student to book an appointment with the teacher.

**Data Flow & Interaction**

- opens after student selects time of appointment
  from SearchedTeacherAppointmentCalendar. This calendar passes start time,
  end time and teacher as props to this.

- uses add appointment mutation to add appointment to supabase
