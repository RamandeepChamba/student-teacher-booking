**Overview and Purpose**

- show specific student's appointments on calendar.
- can't select time slot and book appointment in this one.

**Data Flow & Interaction**

- gets student id from auth context.
- fetches and caches student's appointments using above id from supabase
  using custom hook useGetStudentAppointments.
  - queryKey: "student-appointments"
- Gives fetched student appointments as props to our main calendar component (AppointmentsCalendar)

- shows appointment details via AppointmentDetailed component as modal window
  when appointment is clicked from calendar.

**State**

- showAppointmentDetails:
  - determines if to show appointment details in modal window.
- setShowAppointmentDetails:
  - set to false when appointment details modal window is close via close modal button
    or cancel button in AppointmentDetailed.
  - set to true when an appointment is clicked.
- appointment:
  - contains appointment that we want to display the details of.
  - passed to AppointmentDetailed.
- setAppointment:
  - set to an appointment which was clicked on calendar by handleAppointmentClick.
