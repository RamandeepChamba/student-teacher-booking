**Overview and Purpose**

- show specific student's appointments on calendar.
- can't select time slot and book appointment in this one.

**Functional Requirements**

- needs to get student id from auth context.
- needs to fetch that specific student's appointments.

**Data Flow & Interaction**

- Gives fetched student appointments to our main calendar component (AppointmentsCalendar)

- shows appointment details via AppointmentDetailed component as modal window
  when appointment is clicked from calendar.
