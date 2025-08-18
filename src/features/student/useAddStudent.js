import { useMutation } from "@tanstack/react-query";
import { addStudent as addStudentApi } from "../../services/apiStudents";

export function useAddStudent() {
  const { mutate: addStudent, isLoading: isAddingStudent } = useMutation({
    mutationFn: addStudentApi,
  });
  return { addStudent, isAddingStudent };
}
