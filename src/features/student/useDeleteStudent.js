import { useMutation } from "@tanstack/react-query";
import { deleteStudent as deleteStudentApi } from "../../services/apiStudents";

export function useDeleteStudent() {
  const { isLoading: isDeletingStudent, mutate: deleteStudent } = useMutation({
    mutationFn: deleteStudentApi,
  });

  return { isDeletingStudent, deleteStudent };
}
