import { useMutation } from "@tanstack/react-query";
import { addAppointment as addAppointmentApi } from "../../services/apiAppointments";

export function useAddAppointment() {
  const { mutate: addAppointment, isLoading: isAddingAppointment } =
    useMutation({
      mutationFn: addAppointmentApi,
    });
  return { addAppointment, isAddingAppointment };
}
