import styled, { css } from "styled-components";
import Button from "../../ui/Button";
import { respond } from "../../styles/mixins";
import HeaderForModalWindow from "../../ui/HeaderForModalWindow";
import { useGetAppointmentDetails } from "./useGetAppointmentDetails";
import Loader from "../../ui/Loader";
import { formatDateString } from "../../utils/helper";
import { useAuth } from "../../contexts/AuthContext";
import { useUpdateAppointment } from "./useUpdateAppointment";
import toast from "react-hot-toast";
import { useQueryClient } from "@tanstack/react-query";
import LabelText from "../../ui/LabelText";

const Details = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 2rem;
  width: 40rem;
  max-width: 80rem;
  /* background-color: var(--color-light-3); */
  background-color: var(--color-light);
  padding: 4rem;
  box-shadow: 0px 8px 12px rgba(0, 0, 0, 0.3);

  ${respond.phone(css`
    width: 100%;
    max-width: 100%;
    padding: 3rem;
  `)}

  .button-group {
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
  }
`;

function AppointmentDetailed({ appointment, onClose = null }) {
  const { isLoading: isLoadingAppointmentDetails, data: appointmentDetails } =
    useGetAppointmentDetails(appointment.id);
  const queryClient = useQueryClient();
  const { isUpdatingAppointment, updateAnAppointment } = useUpdateAppointment();
  const { students, teachers, message, status, start, end } = appointmentDetails
    ? appointmentDetails
    : {};
  const { user } = useAuth();
  // if user is teacher && pending show approve / reject buttons
  const canUpdateAppointment = user.role === "teacher" && status === "pending";

  function handleUpdateAppointmentStatus(status) {
    updateAnAppointment(
      {
        appointment: { id: appointment.id, status },
      },
      {
        onSuccess() {
          // hide this
          onClose();
          // show success toast
          toast.success("Appointment updated successfully");
          // refresh appointments
          // user will always be a teacher
          queryClient.invalidateQueries(["teacher", user.id, "appointments"]);
        },
      }
    );
  }

  return (
    <div>
      <HeaderForModalWindow>Appointment Details</HeaderForModalWindow>
      <Details>
        {isLoadingAppointmentDetails && <Loader />}
        {!isLoadingAppointmentDetails && (
          <>
            <div>
              <LabelText>Student</LabelText>
              <p>{students?.name}</p>
            </div>
            <div>
              <LabelText>Teacher</LabelText>
              <p>{teachers?.name}</p>
            </div>
            <div>
              <LabelText>Message</LabelText>
              <p>{message}</p>
            </div>
            <div>
              <LabelText>Start time</LabelText>
              <p>{formatDateString(start)}</p>
            </div>
            <div>
              <LabelText>End time</LabelText>
              <p>{formatDateString(end)}</p>
            </div>
            <div>
              <LabelText>Status</LabelText>
              <p>{status}</p>
            </div>
            {canUpdateAppointment && (
              <div className="button-group">
                <Button
                  disabled={isUpdatingAppointment}
                  onClick={() => handleUpdateAppointmentStatus("approved")}
                >
                  Approve
                </Button>
                <Button
                  variation="dark"
                  disabled={isUpdatingAppointment}
                  onClick={() => handleUpdateAppointmentStatus("rejected")}
                >
                  Reject
                </Button>
              </div>
            )}
          </>
        )}
      </Details>
    </div>
  );
}

export default AppointmentDetailed;
