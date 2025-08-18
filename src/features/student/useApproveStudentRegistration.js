import { useMutation, useQueryClient } from "@tanstack/react-query";
import { approveStudentRegisteration as approveStudentRegisterationApi } from "../../services/apiStudents";
import toast from "react-hot-toast";

export default function useApproveStudentRegistration() {
  const queryClient = useQueryClient();

  const {
    isLoading: isApprovingStudentRegistration,
    mutate: approveStudentRegisteration,
  } = useMutation({
    mutationFn: approveStudentRegisterationApi,
    onSuccess() {
      toast.success("Student registeration approved successfully");
      // Refresh teachers list
      queryClient.invalidateQueries(["registering-students"]);
    },
  });

  return { isApprovingStudentRegistration, approveStudentRegisteration };
}
