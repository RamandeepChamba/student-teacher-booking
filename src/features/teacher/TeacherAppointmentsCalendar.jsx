import { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import CalendarLegends from "../../ui/CalendarLegends";
import Loader from "../../ui/Loader";
import AppointmentsCalendar from "../calendar/AppointmentsCalendar";
import useGetTeacherAppointments from "./useGetTeacherAppointments";
import ModalWithWindowOnly from "../../ui/ModalWithWindowOnly";
import AppointmentDetailed from "../appointment/AppointmentDetailed";
import ScheduleAppointmentForm from "../appointment/ScheduleAppointmentForm";

function TeacherAppointmentsCalendar() {
  // user will always be teacher in this component
  const { user: teacher } = useAuth();
  const { isLoading: isLoadingAppointments, data: appointments } =
    useGetTeacherAppointments(teacher.id);
  const [showAppointmentDetails, setShowAppointmentDetails] = useState(false);
  const [appointment, setAppointment] = useState(null);

  const [showScheduleAppointmentForm, setShowScheduleAppointmentForm] =
    useState(false);
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");

  function handleAppointmentClick(appointmentFromCalendar) {
    setShowAppointmentDetails(true);
    setAppointment(appointmentFromCalendar);
  }

  // Render schedule appointment form when user select time slot from calendar
  function handleSlotSelection(appointment) {
    setStart(new Date(appointment.start));
    setEnd(new Date(appointment.end));
    setShowScheduleAppointmentForm(true);
  }
  return (
    <>
      {isLoadingAppointments && <Loader />}
      {!isLoadingAppointments && (
        <>
          <CalendarLegends />
          <AppointmentsCalendar
            isSelectable={true}
            events={appointments}
            onSlotSelect={handleSlotSelection}
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
          {/* Had to use Modal window here */}
          {/* Different from Book Appointment Form for student,
        it uses something else (probably was a workaround)
      */}
          {showScheduleAppointmentForm && (
            <ModalWithWindowOnly
              onClose={() => setShowScheduleAppointmentForm(false)}
            >
              <ScheduleAppointmentForm
                start={start}
                end={end}
                onClose={() => setShowScheduleAppointmentForm(false)}
              />
            </ModalWithWindowOnly>
          )}
        </>
      )}
    </>
  );
}

export default TeacherAppointmentsCalendar;
