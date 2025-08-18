import styled from "styled-components";
import CalendarLegends from "../../ui/CalendarLegends";
import AppointmentsCalendar from "../calendar/AppointmentsCalendar";
import useGetTeacherAppointments from "./useGetTeacherAppointments";
import { useState } from "react";
import BookAppointmentForm from "../appointment/BookAppointmentForm";
import Loader from "../../ui/Loader";
import ModalWithWindowOnly from "../../ui/ModalWithWindowOnly";
import AppointmentDetailed from "../appointment/AppointmentDetailed";

const Container = styled.div`
  padding: 1rem;
  max-width: 80vw;
  max-height: 90vh;
  overflow: auto;
`;

function SearchedTeacherAppointmentsCalendar({ teacher }) {
  const { id: teacherId } = teacher;
  // fetch teacher's appointments
  const { isLoading: isLoadingAppointments, data: appointments } =
    useGetTeacherAppointments(teacherId);
  const [showAppointmentDetails, setShowAppointmentDetails] = useState(false);
  const [appointment, setAppointment] = useState(null);

  const [showBookForm, setShowBookForm] = useState(false);
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");

  function handleAppointmentClick(appointmentFromCalendar) {
    setShowAppointmentDetails(true);
    setAppointment(appointmentFromCalendar);
  }

  // Render book appointment form when user select time slot from calendar
  function handleSlotSelection(appointment) {
    setStart(new Date(appointment.start));
    setEnd(new Date(appointment.end));
    setShowBookForm(true);
  }
  return (
    <>
      {isLoadingAppointments && !showBookForm && <Loader />}
      {!isLoadingAppointments && !showBookForm && (
        <Container>
          <CalendarLegends />
          <AppointmentsCalendar
            isSelectable={true}
            events={appointments}
            teacherId={teacherId}
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
        </Container>
      )}
      {showBookForm && (
        <BookAppointmentForm
          start={start}
          end={end}
          teacher={teacher}
          onClose={() => setShowBookForm(false)}
        />
      )}
    </>
  );
}

export default SearchedTeacherAppointmentsCalendar;
