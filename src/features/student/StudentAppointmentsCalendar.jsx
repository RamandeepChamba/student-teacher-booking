import { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import CalendarLegends from "../../ui/CalendarLegends";
import Loader from "../../ui/Loader";
import AppointmentsCalendar from "../calendar/AppointmentsCalendar";
import useGetStudentAppointments from "./useGetStudentAppointments";
import ModalWithWindowOnly from "../../ui/ModalWithWindowOnly";
import AppointmentDetailed from "../appointment/AppointmentDetailed";

function StudentAppointmentsCalendar() {
  // user will always be student in this component
  const { user: student } = useAuth();
  const { isLoading: isLoadingAppointments, data: appointments } =
    useGetStudentAppointments(student.id);

  const [showAppointmentDetails, setShowAppointmentDetails] = useState(false);
  const [appointment, setAppointment] = useState(null);

  function handleAppointmentClick(appointmentFromCalendar) {
    setShowAppointmentDetails(true);
    setAppointment(appointmentFromCalendar);
  }
  return (
    <>
      {isLoadingAppointments && <Loader />}
      {!isLoadingAppointments && (
        <>
          <CalendarLegends />
          <AppointmentsCalendar
            events={appointments}
            onAppointmentClick={handleAppointmentClick}
          />
          {showAppointmentDetails && (
            <ModalWithWindowOnly
              onClose={() => setShowAppointmentDetails(false)}
            >
              <AppointmentDetailed
                appointment={appointment}
                onClose={() => setShowAppointmentDetails(false)}
              />
            </ModalWithWindowOnly>
          )}
        </>
      )}
    </>
  );
}

export default StudentAppointmentsCalendar;
