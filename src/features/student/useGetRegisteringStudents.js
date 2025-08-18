import { useQuery } from "@tanstack/react-query";
import { getRegisteringStudents } from "../../services/apiStudents";

export function useGetRegisteringStudents() {
  const { isLoading, data } = useQuery({
    queryKey: ["registering-students"],
    queryFn: getRegisteringStudents,
  });
  return { isLoading, data };
}
