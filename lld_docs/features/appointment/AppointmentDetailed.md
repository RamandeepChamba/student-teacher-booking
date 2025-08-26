**Overview and Purpose**

- shows appointment details
- shows buttons to approve and reject appointment if the appointment status is pending and user is a teacher.

**Data Flow & Interaction**

- receives appointment as prop
- receives optional onClose prop
  - using it to close itself when appointment status is updated by the teacher
- fetches appointment details (appointment + student and teacher name)
- can update an appointment (reject / approve) using useUpdateAppointment custom hook.
