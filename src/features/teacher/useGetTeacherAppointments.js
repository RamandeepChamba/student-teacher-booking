import { useQuery } from "@tanstack/react-query";
import { getTeacherAppointments } from "../../services/apiAppointments";

export default function useGetTeacherAppointments(teacherId) {
  const { isLoading, data } = useQuery({
    queryKey: ["teacher", teacherId, "appointments"],
    queryFn: () => getTeacherAppointments({ teacherId }),
  });

  return { isLoading, data };
}
