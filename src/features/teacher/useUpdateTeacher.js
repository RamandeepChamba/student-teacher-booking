import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateTeacher as updateTeacherApi } from "../../services/apiTeachers";

export default function useUpdateTeacher() {
  const queryClient = useQueryClient();

  const { isLoading: isUpdatingTeacher, mutate: updateTeacher } = useMutation({
    mutationFn: updateTeacherApi,
    onSuccess() {
      // Refresh teachers list
      queryClient.invalidateQueries(["teachers"]);
    },
  });

  return { isUpdatingTeacher, updateTeacher };
}
