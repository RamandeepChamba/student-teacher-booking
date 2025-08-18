**Overview and Purpose**

- shows color coded appointments on a calendar based on their status.
- optionally gives ability to select a time for booking appointment.
- can click these appointments.
- exposes public API to handle these events on the calendar:
  - click event on an appointment
  - date and time select

**Functional Requirements**

- needs to get student id from auth context.

**Data Flow & Interaction**

- Uses a third-party Calendar component.
- Gives appointments received as props to our main calendar component (Calendar)
