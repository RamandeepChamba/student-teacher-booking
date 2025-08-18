import { useMutation } from "@tanstack/react-query";
import { updateAnAppointment as updateAnAppointmentApi } from "../../services/apiAppointments";

export function useUpdateAppointment() {
  const { mutate: updateAnAppointment, isLoading: isUpdatingAppointment } =
    useMutation({
      mutationFn: updateAnAppointmentApi,
    });
  return { updateAnAppointment, isUpdatingAppointment };
}
