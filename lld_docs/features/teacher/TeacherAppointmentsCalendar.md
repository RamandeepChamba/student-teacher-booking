**Overview and Purpose**

- shows calendar with teacher's (logged in user) appointments.
- calendar is selectable, meaning we can schedule appointments.
- can view appointment details and approve or reject pending ones.

**Data Flow & Interaction**

- shows ScheduleAppointmentForm in modal window when an empty
  time slot is selected from the AppointmentsCalendar.
- fetches logged in teacher's appointments and passes them to
  AppointmentsCalendar, which shows them.
- shows AppointmentDetailed in modal window when an appointment is selected.
  - will show approve,reject buttons if apply.

**State**

- teacher: logged in teacher from AuthContext, to fetch their appointments
- appointments: to fetch and cache above teacher's appointments
  using useGetTeacherAppointments
  - queryKey: ["teacher", teacherId, "appointments"],
- showAppointmentDetails: whether to show AppointmentDetailed modal window, is set to
  true when appointment is clicked on AppointmentsCalendar.
- appointment: appointment to show details of.
- setAppointment: set appointment to show details of, will be set when appointment
  is clicked on the AppointmentsCalendar.
- showScheduleAppointmentForm: set to true when time slot is selected in AppointmentsCalendar.
  - determines whether to show ScheduleAppointmentForm
