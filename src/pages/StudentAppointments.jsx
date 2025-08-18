import { NavLink } from "react-router-dom";
import StudentAppointmentsCalendar from "../features/student/StudentAppointmentsCalendar";
import Button from "../ui/Button";

function StudentAppointments() {
  return (
    <div>
      <Button
        as={NavLink}
        to="/student/bookAppointment"
        variation="success"
        radius="rounded"
      >
        Book an appointment
      </Button>
      <h1>Your appointments</h1>
      <StudentAppointmentsCalendar />
    </div>
  );
}

export default StudentAppointments;
