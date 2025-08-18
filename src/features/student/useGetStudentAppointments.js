import { useQuery } from "@tanstack/react-query";
import { getStudentAppointments } from "../../services/apiAppointments";

export default function useGetStudentAppointments(studentId) {
  const { isLoading, data } = useQuery({
    queryKey: ["student-appointments"],
    queryFn: () => getStudentAppointments({ studentId }),
  });

  return { isLoading, data };
}
