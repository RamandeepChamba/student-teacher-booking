import { useQuery } from "@tanstack/react-query";
import { getDepartments } from "../../services/apiDepartments";

export default function useGetDepartments() {
  const { isLoading, data } = useQuery({
    queryKey: ["departments"],
    queryFn: getDepartments,
    staleTime: Infinity,
  });

  return { isLoading, data };
}
