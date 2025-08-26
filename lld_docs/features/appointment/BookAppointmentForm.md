**Overview and Purpose**

- used by student to book an appointment with the teacher.

**Data Flow & Interaction**

- opens after student selects time of appointment
  from SearchedTeacherAppointmentCalendar. This calendar passes start time,
  end time and teacher as props to this.
- start, end and teacher are put into display only fields of the form.
- uses authenticated user's id as student id for booking.
- uses add appointment mutation to add appointment to supabase
  - on successfull addition, closes this form and refreshes booked teacher's
    appointments so that newly added appointment also shows.

**State**

- message:
  - used by controlled textarea element to enter message for appointment.
