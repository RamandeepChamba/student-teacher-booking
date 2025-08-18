import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addTeacher as addTeacherApi } from "../../services/apiTeachers";

export default function useAddTeacher() {
  const queryClient = useQueryClient();
  const { isLoading: isAddingTeacher, mutate: addTeacher } = useMutation({
    mutationFn: addTeacherApi,
    onSuccess(data) {
      console.log(data);
      // Refresh teachers list
      queryClient.invalidateQueries(["teachers"]);
    },
  });

  return { isAddingTeacher, addTeacher };
}
