import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteTeacher as deleteTeacherApi } from "../../services/apiTeachers";
import toast from "react-hot-toast";

export function useDeleteTeacher() {
  const queryClient = useQueryClient();

  const { isLoading: isDeletingTeacher, mutate: deleteTeacher } = useMutation({
    mutationFn: deleteTeacherApi,
    onSuccess() {
      // Refresh teachers list
      toast.success("Teacher deleted successfully");
      queryClient.invalidateQueries(["teachers"]);
    },
    onError(err) {
      toast.error(err.message);
    },
  });

  return { isDeletingTeacher, deleteTeacher };
}
