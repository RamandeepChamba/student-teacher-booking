import { useQuery } from "@tanstack/react-query";
import { getSubjects } from "../../services/apiSubjects";

export default function useGetSubjects({ departmentId }) {
  const { isLoading, data } = useQuery({
    queryKey: ["department", departmentId, "subjects"],
    queryFn: () => getSubjects({ departmentId }),
    staleTime: Infinity,
  });

  return { isLoading, data };
}
