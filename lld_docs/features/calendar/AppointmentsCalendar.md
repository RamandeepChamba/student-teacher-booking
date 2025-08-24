**Overview and Purpose**

- shows color coded appointments on a calendar based on their status.
- optionally gives ability to select a time (click or drag) for booking appointment.
- can click these appointments.
- exposes public API to handle these events on the calendar:
  - click event on an appointment
  - date and time select

**Data Flow & Interaction**

- Uses a third-party Calendar component.
- Gives appointments received as props to our main calendar component (Calendar)
- receives events (appointments to display) from parents.
- is used in following:
  - viewing student appointments (time slots not selectable, can only click on appointments and view it's details).
  - viewing teacher appointments (selectable and can be booked).
  - viewing searched teacher appointments (selectable and can be booked).
