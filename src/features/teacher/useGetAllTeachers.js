import { useQuery } from "@tanstack/react-query";
import { getAllTeachers } from "../../services/apiTeachers";

export function useGetAllTeachers() {
  const { isLoading, data } = useQuery({
    queryKey: ["teachers"],
    queryFn: getAllTeachers,
  });
  return { data, isLoading };
}
