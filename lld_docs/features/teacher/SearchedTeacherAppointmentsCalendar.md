**Overview and Purpose**

- to request an appointment with a searched teacher.
- views that teacher's appointments.
- shows a form to book an appointment when time and date is selected.

**Data Flow & Interaction**

- fetches and caches searched teacher's appointments using useGetTeacherAppointments.
  - queryKey: ["teacher", teacherId, "appointments"],
- Gives fetched teacher's appointments to AppointmentsCalendar
- BookAppointmentForm is displayed when time is selected.

**Props**

- teacher: searched teacher who a student wants to book appointment with.
  teacher id is used to fetch appointments of this teacher.

**State**

- appointments: searched teacher's appointments to display on calendar.
- showAppointmentDetails: whether to show AppointmentDetailed modal window, is set to
  true when appointment is clicked on AppointmentsCalendar.
- appointment: appointment to show details of.
- setAppointment: set appointment to show details of, will be set when appointment
  is clicked on the AppointmentsCalendar.
- showBookForm: to show book appointment form.
- setShowBookForm: set to true when time is selected on AppointmentsCalendar.
- start: selected start time of appointment
- end: selected end time of appointment
