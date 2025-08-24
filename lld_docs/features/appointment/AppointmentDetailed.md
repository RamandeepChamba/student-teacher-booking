**Overview and Purpose**

- shows appointment details
- shows buttons to approve and reject appointment for teachers if the appointment status is pending.

**Data Flow & Interaction**

- receives appointment as prop from AppointmentsCalendar
- receives optional onClose prop
  - using it to close itself when appointment status is updated by the teacher
- fetches appointment details (appointment + student and teacher name)
