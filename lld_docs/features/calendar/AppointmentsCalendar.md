**Overview and Purpose**

- shows color coded appointments on a calendar based on their status.
- optionally gives ability to select a time (click or drag) for
  booking appointment (depends on isSelectable prop).
- can click these appointments.
- exposes public API to handle these events on the calendar:
  - click event on an appointment
  - date and time select

**Data Flow & Interaction**

- Uses a third-party Calendar component.
- is used in following:
  - viewing student appointments (time slots not selectable, can only click on appointments and view it's details).
  - viewing teacher appointments (selectable and can be booked).
  - viewing searched teacher appointments (selectable and can be booked).

**Props**

- events:
  - appointments to display on our main calendar component (Calendar)
- isSelectable:
  - boolean, to determine if calendar can add appointments(true) or
    just display them (false)
- onSlotSelect:
  - handler which runs when a time of appointment to book is selected
  - is passed an event object containing start and end time selected.
- onAppointmentClick:
  - handler which runs when an appointment is clicked
  - is passed the appointment object which was clicked.
