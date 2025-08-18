import { useQuery } from "@tanstack/react-query";
import { getAppointmentDetails } from "../../services/apiAppointments";

export function useGetAppointmentDetails(appointmentId) {
  const { isLoading, data } = useQuery({
    queryKey: ["appointment", appointmentId],
    queryFn: () => getAppointmentDetails({ appointmentId }),
  });
  return { isLoading, data };
}
